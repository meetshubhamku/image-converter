const axios = require("axios");
const sharp = require("sharp");

exports.fetchImage = async (req, res, next) => {
  const imgUrl = req.query.image || "https://picsum.photos/200";

  const img = (
    await axios({
      url: imgUrl,
      responseType: "arraybuffer",
    })
  ).data;
  const metadata = await sharp(img).metadata();
  req.profile = { img, metadata };
  next();
};
