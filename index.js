import Replicate from "replicate";
import * as dotenv from "dotenv";
dotenv.config();

const replicate = new Replicate({
  auth: "r8_9OKpukr9Jbm49guiyvTz6bF04EkoL5y20tk5j",
});

async function main() {
  const training = await replicate.trainings.create(
    "stability-ai",
    "sdxl",
    "a00d0b7dcbb9c3fbb34ba87d2d5b46c56969c84a628bf778a7fdaec30b1b99c5",
    {
      destination: "amk-dev/nouns-sdxl",
      input: {
        input_images:
          "https://drive.google.com/u/0/uc?id=1Zn4DpDgEL54xo2lXuNwTUP2rRaFHmC1Y&export=download",
      },
    }
  );
  console.log(`URL: https://replicate.com/p/${training.id}`);
}

main();

// Run:
// node train-sdxl.js
