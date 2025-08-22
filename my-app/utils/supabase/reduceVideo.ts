// // // import fs from "fs";
// // // import path from "path";
// // // import ffmpeg from "fluent-ffmpeg";

// // // export const ReduceVideo = async (file: File) => {
// // //   try {
// // //     const arrayBuffer = await file.arrayBuffer();
// // //     const buffer = Buffer.from(arrayBuffer);

// // //     const tempPath = path.join(__dirname, "temp-video.mp4");
// // //     fs.writeFileSync(tempPath, buffer);

// // //     var process = new ffmpeg(tempPath);
// // //     process.then(
// // //       function (video) {
// // //         console.log("The video is ready to be processed");
// // //       },
// // //       function (err) {
// // //         console.log("Error: " + err);
// // //       }
// // //     );
// // //   } catch (e) {
// // //     console.log(e);
// // //   }
// // // };

// // import fs from "fs";
// // import path from "path";
// // import ffmpeg from "fluent-ffmpeg";

// // export const ReduceVideo = async (file: File) => {
// //   try {
// //     // Convert the browser File object to a buffer
// //     const arrayBuffer = await file.arrayBuffer();
// //     const buffer = Buffer.from(arrayBuffer);

// //     // Write buffer to a temp file
// //     const tempInputPath = path.join(__dirname, "temp-input.mp4");
// //     const tempOutputPath = path.join(__dirname, "temp-output.mp4");
// //     fs.writeFileSync(tempInputPath, buffer);

// //     return new Promise<void>((resolve, reject) => {
// //       ffmpeg(tempInputPath)
// //         // Example: reduce size/quality
// //         .outputOptions([
// //           "-vf scale=1280:-1", // scale to width 1280px, keep aspect ratio
// //           "-crf 28",           // control quality (lower is better, 23 default)
// //           "-preset veryfast"   // speed vs compression tradeoff
// //         ])
// //         .on("start", (cmd) => {
// //           console.log("FFmpeg started with command:", cmd);
// //         })
// //         .on("error", (err) => {
// //           console.error("Error processing video:", err);
// //           reject(err);
// //         })
// //         .on("end", () => {
// //           console.log("Video processing finished:", tempOutputPath);
// //           resolve();
// //         })
// //         .save(tempOutputPath);
// //     });
// //   } catch (e) {
// //     console.error("Unexpected error:", e);
// //   }
// // };

// import fs from "fs";
// import path from "path";
// import ffmpeg from "fluent-ffmpeg";

// export const ReduceVideo = async (file: File): Promise<Buffer> => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       // Convert File -> Buffer
//       const arrayBuffer = await file.arrayBuffer();
//       const buffer = Buffer.from(arrayBuffer);

//       // Create temp input + output paths
//       const inputPath = path.join(__dirname, "temp-input.mp4");
//       const outputPath = path.join(__dirname, "temp-output.mp4");

//       fs.writeFileSync(inputPath, buffer);

//       // Run ffmpeg compression (example: reduce size/bitrate)
//       ffmpeg(inputPath)
//         .outputOptions([
//           "-vf scale=1280:-1", // resize width to 1280, keep aspect ratio
//           "-b:v 1000k",        // reduce video bitrate
//           "-b:a 128k"          // reduce audio bitrate
//         ])
//         .save(outputPath)
//         .on("end", () => {
//           const editedBuffer = fs.readFileSync(outputPath);

//           // Cleanup temp files
//           fs.unlinkSync(inputPath);
//           fs.unlinkSync(outputPath);

//           resolve(editedBuffer);
//         })
//         .on("error", (err) => {
//           reject(err);
//         });

//     } catch (e) {
//       reject(e);
//     }
//   });
// };

"use server";

import fs from "fs";
import path from "path";
import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";

export const ReduceVideo = async (file: File): Promise<Buffer> => {
  return new Promise(async (resolve, reject) => {
    console.log("We're in the video reduction");
    try {
      ffmpeg.setFfmpegPath(ffmpegInstaller.path);
      // Convert browser File -> Buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Temp file paths
      const inputPath = path.join(process.cwd(), "temp-input.mp4");
      const outputPath = path.join(process.cwd(), "temp-output.mp4");

      fs.writeFileSync(inputPath, buffer);
      //   .outputOptions([
      //       "-vf scale=1280:-1", // resize width to 1280, keep aspect ratio
      //       "-b:v 1000k",        // video bitrate
      //       "-b:a 128k"          // audio bitrate
      //     ])

      ffmpeg(inputPath)
        .size("720x?")
        .save(outputPath)
        .on("end", () => {
          try {
            const editedBuffer = fs.readFileSync(outputPath);

            // Cleanup
            fs.unlinkSync(inputPath);
            fs.unlinkSync(outputPath);

            console.log("This is the editedBuffer: " + editedBuffer);
            resolve(editedBuffer);
          } catch (readErr) {
            reject(readErr);
          }
        })
        .on("error", (err) => {
          reject(err);
        });
    } catch (e) {
      reject(e);
    }
  });
};
