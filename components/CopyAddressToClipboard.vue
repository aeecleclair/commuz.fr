<template>
  <div>

    <UTooltip :popper="{ arrow: true, placement: 'top' }">
      <template #text>
        <div v-if="!contentCoppied" class="flex flex-row items-center gap-2 pb-2">
          <UIcon name="i-heroicons-clipboard-document-check" class="w-5 h-5" />
          Copier l'adresse
        </div>
        <div v-else class="flex flex-row items-center gap-2 pb-2">
          <UIcon name="i-heroicons-check-circle" class="w-5 h-5" />
          Adresse copiée
        </div>
      </template>
      <button @click="copyClipboard()">
        <slot />
      </button>
    </UTooltip>
  </div>
</template>

<script lang="ts" setup>
// The content we want to copy to the clipboard
const props = defineProps<{
  content: string;
}>()


// We store in a variable if the content has been copied to the clipboard during the last 5 seconds
const contentCoppied = ref(false);
async function copyClipboard() {
  navigator.clipboard.writeText(props.content);
  contentCoppied.value = true;
  await delay(5000)
  contentCoppied.value = false;
}

function delay(delay: number) {
  return new Promise((r) => {
    setTimeout(r, delay);
  });
}
</script>
