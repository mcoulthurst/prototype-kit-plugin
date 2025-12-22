// Postcode lookup functionality
const PROJECTION= 'EPSG:27700';

function lookupPostcode(postcode) {
  console.log('Check postcode before sending', postcode);
  
  if (!postcode) {
    console.log("Postcode has invalid format");
    return Promise.reject(new Error("Invalid postcode"));
  }
  
  const url = POSTCODE_URL + postcode;
  console.log('Look up Postcode from ', url);
  
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("postcode reply");
      console.log(data);
      const coords = [data.easting, data.northing];
      console.log(coords);
      return coords;
    })
    .catch(error => {
      console.log(error);
      console.warn("error");
      throw error; // Re-throw so the caller can handle it
    });
}