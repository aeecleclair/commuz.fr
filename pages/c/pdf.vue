<template>
  <div class="p-6 space-y-4">


    <div class="w-full flex flex-col gap-4 items-center">
      <h1 class="text-xl font-bold pb-5">Fusionner des partitions</h1>

      <UFileUpload v-model="selectedFiles" multiple accept="application/pdf" label="Téléverser vos partitions"
        description="PDF" layout="list" class="w-96 min-h-48 cursor-pointer" />

      <UButton v-if="selectedFiles.length > 0" @click="merge" icon="i-lucide-rocket" size="md" color="neutral"
        variant="solid" class="cursor-pointer">
        Fusionner les
        PDF
      </UButton>

      <span v-if="mergedPdfUrl">{{ stats.totalPages }} pages au total</span>

      <UButton v-if="mergedPdfUrl" :href="mergedPdfUrl" download="merged.pdf" icon="i-lucide-download" size="md"
        color="neutral" variant="solid" class="cursor-pointer">
        Télécharger le PDF fusionné
      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup scoped>

import { PDFDocument, PDFPage } from 'pdf-lib'
import { ref } from "vue"

const selectedFiles = ref<File[]>([])
const mergedPdfUrl = ref<string | null>(null)

const stats = ref<{ totalPages: number }>({ totalPages: 0 })

async function merge() {
  console.log("Merging PDFs:", selectedFiles.value)
  const buffers = await Promise.all(
    selectedFiles.value.map(f => f.arrayBuffer())
  )
  console.log("Buffers:", buffers)

  const mergedPdf = await mergePdfs(buffers)
  mergedPdfUrl.value = URL.createObjectURL(
    new Blob([mergedPdf], { type: "application/pdf" })
  )
}





async function mergePdfs(pdfsToMerges: ArrayBuffer[]) {
  // Count the total number of pages
  let totalPages = 0;
  for (const pdfBuffer of pdfsToMerges) {
    const pdf = await PDFDocument.load(pdfBuffer);
    totalPages += pdf.getPageCount();
  }
  console.log("Total pages:", totalPages);

  stats.value.totalPages = totalPages;

  const halfPageCount = Math.ceil(totalPages / 2);
  console.log("Half page count:", halfPageCount);

  const mergedPdf = await PDFDocument.create();
  const firstHalfPages: PDFPage[] = [];
  const secondHalfPages: PDFPage[] = [];
  let accumulatedPages = 0;

  for (const pdfBuffer of pdfsToMerges) {
    const pdf = await PDFDocument.load(pdfBuffer);
    const pageCount = pdf.getPageCount();

    const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());

    if (accumulatedPages < halfPageCount) {
      firstHalfPages.push(...pages);
    } else {
      const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      secondHalfPages.push(...pages);
    }
    accumulatedPages += pageCount;
  }

  // Merge one page at a time from each half
  while (firstHalfPages.length > 0 || secondHalfPages.length > 0) {
    if (firstHalfPages.length > 0) {
      const page = firstHalfPages.shift()!;
      mergedPdf.addPage(page);
    }
    if (secondHalfPages.length > 0) {
      const page = secondHalfPages.shift()!;
      mergedPdf.addPage(page);
    }
  }

  const mergedPdfFile = await mergedPdf.save();
  return mergedPdfFile;
}

</script>

<style></style>
