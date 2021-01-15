const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  const options = {
    url: url,
    method: 'GET'
  };
  
  request(options, (err, res, body) => {
    if (err) {
      callback(err, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('Breed not found', null);
    } else {
      callback(null, data[0]['description']);
    
    }
  });
};



module.exports = { fetchBreedDescription };
