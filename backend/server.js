// server.ts
import express from "express";
import multer from "multer";
import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import ffprobeInstaller from "@ffprobe-installer/ffprobe";
import fs from "fs";
import path from "path";
import cors from "cors";
// import { createClient } from "@supabase/supabase-js";

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());

// Setup ffmpeg binary
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffprobeInstaller.path);

// Supabase client (optional)
// const supabase = createClient(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_KEY!
// );

app.post("/resize", upload.single("video"), async (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded.");
  console.log("We're in the backend");

  console.log("This is the req: " + JSON.stringify(req.file));

  const inputPath = req.file.path;
  console.log("Input path: " + inputPath);

  const outputPath = path.join("uploads", `output.mp4`);
  console.log("Output path: " + outputPath);

  try {
    // Run ffmpeg
    await new Promise((resolve, reject) => {
      //   ffmpeg(inputPath)
      //     .size("720x?")
      //     .output(outputPath)
      //     .on("progress", (progress) => {
      //       console.log(`Processing: ${progress.percent?.toFixed(2)}% done`);
      //     })
      //     .on("end", () => resolve())
      //     .on("error", (err) => reject(err))
      //     .run();
      ffmpeg.ffprobe(inputPath, (err, metadata) => {
        if (err) throw err;
        const duration = metadata.format.duration; // in seconds
        console.log("Video duration:", duration);

        ffmpeg(inputPath)
          .size("1080x?") // scale to 360p
          .outputOptions([
            "-c:v libx264", // H.264 codec
            "-crf 28", // quality factor (23=default, 28=smaller file, 30+ very small but blurry)
            "-preset veryfast",
            "-c:a aac",
            "-b:a 64k",
          ])
          .output(outputPath)
          .on("progress", (progress) => {
            console.log(`Processing: ${progress.percent?.toFixed(2)}% done`);
          })
          .on("end", () => {
            console.log("FFmpeg finished writing file");

            // send response AFTER file is ready
            // res.setHeader("Content-Type", "video/mp4");
            // const readStream = fs.createReadStream(outputPath);
            // readStream.pipe(res);
            const buffer = fs.readFileSync(outputPath);

            // console.log("This is the buffer: " + buffer)

            res.set("Content-Type", "video/mp4");
            res.set("Content-Length", buffer.length);
            res.send(buffer);

            console.log("Sent buffer to client, cleaning up...");
            fs.unlinkSync(inputPath);
            fs.unlinkSync(outputPath);
          })
          .on("error", (err) => console.error(err))
          .run();
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error processing video");
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
