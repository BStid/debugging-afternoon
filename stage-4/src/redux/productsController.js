const axios = require("axios");

const getAllProducts = function() {
  return axios
    .get("https://practiceapi.devmountain.com/products/")
    .then(response => response.data);
};

module.exports = {
  getAllProducts
};
