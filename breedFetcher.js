const request = require("request");
const breedName = process.argv[2];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (err, response, body) => {
  //Edge Case: Request Failed
  if (err) {
    return console.log("Request Failed");
  }
  const data = JSON.parse(body);
  // Edge Case: Breed Not Found
  if (data.length === 0) {
    return console.log("Breed Not Found");
  }
  console.log(data[0].description);
});
