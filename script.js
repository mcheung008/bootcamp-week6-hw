FACTS:
// 1) Need to get current weather for a city
// 2) Need to get 5-day forecast for that city
// 3) Need a list of past city searches
// 4) Need an input field and search button for searching a new city weather forecast
// <input type='text' name='cityField' id='cityField'><button></button>
// SPECIAL NOTE #1: UV Index is not part of the current weather API.  You
// need to make a separate API call to get the UV Index.  This API requires two
// parameters: longitude and latitude, which are part of teh response you get
// from the current weather API
// SPECIAL NOTE #2: a 'card' is a specific layout element in Bootstrap
// [  ][  ][  ][  ][  ]
//  `- each card represents a day


(1)
function getCurrentWeather(cityName) {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  // TODO: use API to request current weather data for a given city
  // TODO: use response from API to populate each field on page
}

(2)
function getFiveDayForecast(cityName) {
  // TODO: use API for retrieving the 5-day forecast for a city
  // TODO: use response to populate fields in each card/day
}

(3)
function showPastCitySearches() {
}

var pastCitySearches = [];
var city = 'Eugene';
var inputField = $(<SELECTOR FOR THAT INPUT FIELD>);
var searchButton = $(<SELECTOR FOR THAT BUTTON>);
const LS_KEY = 'pastCities';
$(document).ready(function() {

  // Get past city searches from local storage and assign them to pastCitySearches[]
  if (JSON.parse(localStorage.getItem(LS_KEY))) {
      pastCitySearches = JSON.parse(localStorage.getItem(LS_KEY));
  }

  // Add click handler to search button
  searchButton.on('click', function() {
    city = inputField.val();
    // Display the city and weather forecast
    getCurrentWeather(city);
    // Display the 5-day forecast for that city
    getFiveDayForecast(city);
    // Add city to past city searches
    pastCitySearches.push(city);
    // Save to local storage
    localStorage.setItem(LS_KEY, JSON.stringify(pastCitySearches));
  });

  // Show current weather for default city
  getCurrentWeather(city);
  // Show 5-day forecast for default city
  getFiveDayForecast(city);
  // Show past city searches
  showPastCitySearches();
  
});