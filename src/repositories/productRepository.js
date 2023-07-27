import Product from "../models/productModel.js";

export const getProductByVideo = async (videoId) => {
  //   console.log(await Product.find());
  return await Product.find({ videoId: videoId }).select(
    "_id link title price"
  );
};
