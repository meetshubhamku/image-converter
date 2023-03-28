const axios = require("axios");
const sharp = require("sharp");

exports.fetchImage = async (req, res, next) => {
  const imgUrl = req.query.image || "http://vto1.cloud.in/profile.jpg";

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
