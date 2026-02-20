import fs from "fs";
import sharp from "sharp";
import path from "path";
import exifReader from "exif-reader";

/*
We use NuxtImage in the site, which will generate multiple size images, for the various devices. A smartphone will be served a lighter image than a computer.
If the image is small, in the mosaic, it will be lighter that a full screen image.

If we use this optimisation techniques, we can not upload 3 Go of pictures to GitHub each year, which will never be viewed at full resolution.
We use this script to optimize these images by reducing their size.

The algorithm will also sort pictures, give them a correct filename and put them in the correct folder.

Usage:
```bash
npx tsx image_manipulation.ts directory/containing/all/images
```

An offset can be added if the filenames need to start at a specific number:
```bash
npx tsx image_manipulation.ts directory/containing/all/images 330
```
*/

const args = process.argv.slice(2);

if (args.length !== 1 && args.length !== 2) {
  console.log();
  console.log();
  console.log(
    "Usage: `npx tsx image_manipulation.ts directory/containing/all/images`"
  );
  console.log(
    "An optional offset can be added: `npx tsx image_manipulation.ts directory/containing/all/images 330`"
  );
  console.log();
  console.log();
  throw new Error("Invalid usage");
}

const dir = args[0];

let imageOffset: number;
if (args.length === 2) {
  imageOffset = Number(args[1]);
} else {
  imageOffset = 0;
}

console.log(`Starting to prepare pictures from folder ${dir}`);

// We search the latest year already used for the website
let currentYear = 0;
fs.readdirSync("public/images/galeries/").forEach((filename) => {
  const name = Number(path.parse(filename).name);
  if (name > currentYear) {
    currentYear = name;
  }
});
const outputFolder = `public/images/galeries/${currentYear + 1}/`;
console.log(`Images will be added to folder ${outputFolder}`);

// We use two structures to store images
// `imagesWithoutTimestamp` will contains all images that don't have a date. We will add them at the end of the folder
const imagesWithoutTimestamp: sharp.Sharp[] = [];
// `imagesWithTimestamp` will contains other images, add will be sorted
const imagesWithTimestamp: {
  dateTimeOriginal: Date;
  image: sharp.Sharp;
}[] = [];

const files = await fs.promises.readdir(dir);

for (const filename of files) {
  const name = path.parse(filename).name;
  const ext = path.parse(filename).ext;

  if (name[0] === ".") {
    // This is a system file
    continue;
  }

  if (ext !== ".jpg" && ext !== ".jpeg") {
    throw new Error(
      "Warning: you need to implement export for non jpg files, current extension: " +
        ext +
        "for file " +
        filename
    );
  }

  const filepath = path.resolve(dir, filename);

  const image = sharp(filepath);
  const metadata = await image.metadata();

  // Images should have exif data containing the date and hour they where taken
  // As we may have multiples images sources (ex: Pixels and Declic), we will use these timestamps to sorts images
  const exif =
    metadata.exif !== undefined ? exifReader(metadata.exif) : undefined;
  const dateTimeOriginal = exif?.Photo?.DateTimeOriginal;

  if (dateTimeOriginal !== undefined) {
    imagesWithTimestamp.push({
      dateTimeOriginal,
      image,
    });
  } else {
    console.log(`Warning: ${name} does not have a dateTimeOriginal`);
    imagesWithoutTimestamp.push(image);
  }
}

// We want to store found images by date
imagesWithTimestamp.sort(
  (a, b) => a.dateTimeOriginal.getTime() - b.dateTimeOriginal.getTime()
);

const images: sharp.Sharp[] = [];

imagesWithTimestamp.forEach((image) => images.push(image.image));
imagesWithoutTimestamp.forEach((image) => images.push(image));

console.log(`Found ${images.length} images, starting to export`);

await fs.promises.mkdir(outputFolder);

let imageIndex = 1;

// We will export images after changing their quality
for (const image of images) {
  console.log(`${imageIndex}/${images.length}`);
  // https://stackoverflow.com/questions/51291678/compress-image-using-sharp-in-node-js
  await image
    .resize({ width: 2048 })
    .jpeg({ progressive: true, force: false, quality: 100 })
    //.png({ progressive: true, force: false, quality: 80 })
    .toFile(outputFolder + (imageIndex + imageOffset) + ".jpg");

  imageIndex += 1;
}

// const image = sharp("_4_.jpg");
// const meta = await image.metadata();
// const { format } = meta;

//

//
