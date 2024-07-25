const express = require("express");
require("dotenv").config();
const app = express();
const sharp = require("sharp");
const { fetchImage } = require("./App/controllers/imageControllers");

const port = process.env.PORT || 3000;

app.get("/unsafe", fetchImage, async (req, res) => {
  const { img, metadata } = req.profile;
  console.log("params : ", req.query);
  // console.log("Metadata - ", metadata);

  const height = parseInt(req.query.height) || parseInt(metadata.height);
  const width = parseInt(req.query.width) || parseInt(metadata.width);
  const quality = parseInt(req.query.quality || 70);
  const fit = req.query.fit || "cover";
  const format = req.query.format || "webp";

  await sharp(img)
    .resize({
      width,
      height,
      fit,
      quality,
    })
    .toFormat(format)
    .toBuffer({ resolveWithObject: true })
    .then(({ data, info }) => {
      console.info("INFO - ", info);
      res.setHeader("Content-Type", `image/${format}`).end(data);
    })

    .catch((err) => {
      return res.json(err).end();
    });
  // res.type("image/webp");
});

app.get("/", (req, res) => {
  res
    .json({
      status: "Working",
    })
    .status(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
