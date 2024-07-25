const axios = require("axios");
const sharp = require("sharp");

// exports.fetchImage = async (req, res, next) => {
//   const imgUrl = req.query.image || "https://picsum.photos/200";

//   const img = (
//     await axios({
//       url: imgUrl,
//       responseType: "arraybuffer",
//     })
//   ).data;

//   const original_img_metadata = await sharp(img).metadata();
//   req.profile = { img, original_img_metadata };
//   next();
// };

exports.fetchImage = async (req, res, next) => {
  try {
    const imgUrl = req.query.image || "https://picsum.photos/200";

    const response = await axios.get(imgUrl, { responseType: "arraybuffer" });

    // Check if response status indicates success (200-299 range)
    if (response.status >= 200 && response.status < 300) {
      const img = response.data;
      const original_img_metadata = await sharp(img).metadata();
      req.profile = { img, original_img_metadata };
      next();
    } else {
      // Handle the case where the image URL request was unsuccessful
      // For example, return an error response or fallback to a default image
      res.status(404).send("Image not found or could not be fetched.");
    }
  } catch (error) {
    // Handle any errors that occur during the request
    // console.error("Error fetching image:", error);
    res.status(500).send("Internal Server Error | Error fetching image");
  }
};
