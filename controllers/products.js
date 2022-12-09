const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "All Products" });
};
const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "this is all products Testing router" });
};

module.exports = { getAllProducts, getAllProductsTesting };
