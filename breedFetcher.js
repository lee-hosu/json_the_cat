const fetchBreedDescription = function (breedName, callback) {
  const request = require("request");
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    //Edge Case: Request Failed
    if (error) {
      callback("Request Failed", null);
      return;
    }
    const data = JSON.parse(body);
    // Edge Case: Breed Not Found
    if (data.length === 0) {
      callback("Breed Not Found", null);
      return;
    }
    // Breed found, extract the description
    const description = data[0].description;
    callback(null, description);
  });
};

module.exports = { fetchBreedDescription };
