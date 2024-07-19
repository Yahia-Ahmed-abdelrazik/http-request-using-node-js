// npm init -y
// npm i   =>    npm i request
// const request =require("request")

////////////////////////////////////////////////////////////////////////
const request = require("request");
////////////////////////////////////////////////////////////////////////

// //mapbox

// const geocodingUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?proximity=ip&access_token=pk.eyJ1IjoieWFoaWFhaG1lZCIsImEiOiJjbHlxMDVmaWYwZ2Y1MmlzN3hhcWE2cTJ2In0.IzSKYMJrqvELuxsNVw5WwQ";

// request({ url: geocodingUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to connect geocode service0");
//   } else if (response.body.message) {
//     console.log(response.body.message);
//   } else if (response.body.features.lenght == 0) {
//     console.log("unabel to find this location");
//   } else {
//     // console.log(response.body);
//     const longtitude = response.body.features[0].center[0];
//     const latutitude = response.body.features[0].center[1];

//     console.log(latutitude, longtitude);
//   }
// });
//////////////////////////////////////////////////////////////

// const forecast = (latutitude, longtitude, callback) => {
//   //weather Api
//   const url =
//     "http://api.weatherapi.com/v1/current.json?key=a9ae6ca835d34bf7b3a211650241507&q=" +
//     latutitude +
//     "," +
//     longtitude;

//   request({ url, json: true }, (error, response) => {
//     if (error) {
//       callback("unable to connect weather api service ", undefined);
//     } else if (response.body.error) {
//       callback(response.body.error.message, undefined);
//     } else {
//       callback(
//         undefined,
//         response.body.location.name +
//           " it is " +
//           response.body.current.condition.text
//       );
//     }
//   });
// };

////////////////////////////////////////////////////////////////////
// //mapbox

// const geocode = (address, callback) => {
//   const geocodingUrl =
//     "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//     address +
//     ".json?proximity=ip&access_token=pk.eyJ1IjoieWFoaWFhaG1lZCIsImEiOiJjbHlxMDVmaWYwZ2Y1MmlzN3hhcWE2cTJ2In0.IzSKYMJrqvELuxsNVw5WwQ";

//   request({ url: geocodingUrl, json: true }, (error, response) => {
//     if (error) {
//       callback("unable to connect geocode service0", undefined);
//     } else if (response.body.message) {
//       callback(esponse.body.message, undefined);
//     } else if (response.body.features.lenght == 0) {
//       callback("unabel to find this location", undefined);
//     } else {
//       callback(undefined, {
//         longtitude: response.body.features[0].center[0],
//         latutitude: response.body.features[0].center[1],
//       });
//     }
//   });
// };

//////////////////////////////////////////////////////////////////
const forecast = require("./weatherDataFile/forecast");
const geocode = require("./weatherDataFile/geocode");

// console.log(process.argv);
const country = process.argv[2];

geocode(country, (error, data) => {
  console.log("Error :", error);
  console.log("Data :", data);

  forecast(data.latutitude, data.longtitude, (error, data) => {
    console.log("Error :", error);
    console.log("Data :", data);
  });
});

////process.argv       xxxxxxx=>  ////yargs
