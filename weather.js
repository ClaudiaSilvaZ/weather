// jQuery Weather!

// Using your newfound knowledge of jQuery, create a weather
// application. It should:
// - Use a loop to create 6 days of forecast within the <div> element
//   with class name "forecast"
// - When clicking the "Get the weather!" button, the weather should
//   appear with a "fade" effect (try fading in the .current and .forecast
//   elements at different speeds for maximum fun!)
// - It doesn't need to fade in again when clicking "Get the weather!"
//   after the first time

// NOTES AND HINTS

// All of the work of grabbing data from the Dark Sky API is already done
// for you! Your task is to take that data, transform it into HTML, and
// insert it into the document. All of your work begins on line 47!

// Each day of the forecast should use HTML markup similar to:
// <div class="col">
//   <h3><i class="fas fa-sun"></i></h3>
//   <h4>89|55</h4>
//   <h5>Clear throughout the day.</h5>
// </div>

// The CSS styles are already written to fit the markup above. However,
// feel free to go nuts!

// The provided icon() function (in helpers.js) takes a Dark Sky icon name
// (e.g. "clear-day") and converts it into an icon, e.g.
// icon("clear-day") => <i class='fas fa-sun'></i>

// Math.round(75.88) => 75
//
// .empty() empties the HTML contents of a jQuery DOM object

// .append() appends a string (containing HTML) to a jQuery DOM object

let handleWeatherResponse = function(response) {
  // leave these two lines alone; they allow for the inspection of
  // the response object in the browser console (try typing "response"
  // in the Chrome JavaScript console!)
  console.log(response)
  window.response = response


  // **** your code starts here - don't modify anything else. you will be sad.

  $(".current").empty()
    for (let i=0; i<1 ; i++) {
          let weatherforecast = response.daily.data[i];
          console.log(weatherforecast.summary);
          let htmlcurrent = '<div class="col">'
          htmlcurrent = htmlcurrent + '<h3>' + icon(weatherforecast.icon) + '</h3>';
          htmlcurrent = htmlcurrent + '<h4>'+ Math.round(weatherforecast.apparentTemperatureMax) + '|' + Math.round(weatherforecast.apparentTemperatureMin) + '</h4>';
          htmlcurrent = htmlcurrent + '<h5>' + weatherforecast.summary + '<h5>';
          htmlcurrent = htmlcurrent + '</div>';
          $(".current").append(htmlcurrent);
          $(".current").fadeIn();
          }

$(".forecast").empty()
  for (let j=1; j<7 ; j++) {
        let weatherforecast = response.daily.data[j];
        console.log(weatherforecast.summary);
        let htmlforecast = '<div class="col">'
        htmlforecast = htmlforecast + '<h3>' + icon(weatherforecast.icon) + '</h3>';
        htmlforecast = htmlforecast + '<h4>'+ Math.round(weatherforecast.apparentTemperatureMax) + '|' + Math.round(weatherforecast.apparentTemperatureMin) + '</h4>';
        htmlforecast = htmlforecast + '<h5>' + weatherforecast.summary + '<h5>';
        htmlforecast = htmlforecast + '</div>';
        $(".forecast").append(htmlforecast);
        $(".forecast").fadeIn();
        }
      };

// leave this alone; does the event handling and ajax
$(function() {
  $("#get-the-weather").on("click", function(event) {
    event.preventDefault();
    let locationName = $("#location-name").val();
    geocodeAndGetWeather(locationName);
  });
});
