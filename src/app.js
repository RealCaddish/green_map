// set options for the map object
const options = {
  zoomSnap: 0.1,
  center: [38.04696, -84.507469],
  zoom: 2.9,
  minZoom: 2,
  maxZoom: 17,
};

// creating the map object
const map = L.map("map", options);

// load in data with d3 fetch
// const blocksDataRaw = d3.json(
//   'data/geojson/blocks_census_airbnb_joined.geojson'
// );
// const listingsDataRaw = d3.csv('data/csv/listings_cleaned.csv');
// const listingsGeojson = d3.json('data/geojson/listings_cleaned.geojson');

// const visiblePoints = L.featureGroup().addTo(map);
// const hiddenPoints = L.featureGroup();

const countries_CBD = d3.json("../data/geojson/countries_cbd.geojson");
console.log("added to constant")
// promise statement to call an array of data variables then proceed to mapping function
Promise.all([
  countries_CBD
]).then(drawMap);

// start of drawing Map function
function drawMap(data) {
  // display Carto basemap tiles with light features and labels
  const tiles = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 20,
    }
  );

  // add basemap tiles to map
  tiles.addTo(map);

  // add data after Promise
  const countries = data[0];


  // add countries polygons with cbd data
  var cbdCountries = L.geoJson(countries, {
  })
    .bringToFront()
    .addTo(map)
  

  console.log(countries)
}


