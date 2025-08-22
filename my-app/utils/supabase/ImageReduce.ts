// import sharp from "sharp";

// export const ImageReduce = () => {
//   sharp("input.jpg")
//     .rotate()
//     .resize(200)
//     .jpeg({ mozjpeg: true })
//     .toBuffer()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// import sharp from "sharp";

// export const ImageReduce = async (): Promise<Buffer> => {
//   try {
//     const data = await sharp("input.jpg")
//       .rotate()
//       .resize(200)
//       .jpeg({ mozjpeg: true })
//       .toBuffer();

//     return data; // return the processed image buffer
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };

"use server"

import sharp from "sharp";

export const ImageReduce = async (
  file: File
): Promise<Buffer | null> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const data = await sharp(buffer)
      .resize(1024).jpeg({ mozjpeg: true })
      .toBuffer();
      
    if(data) {
        console.log("Reduction successful")
    }

    return data; // URL usable in <Image src="/output.jpg" />
  } catch (err) {
    console.error(err);
    return null
  }
};
