var cityList = [];

$(document).ready(function(){
  
    var currentBox = $("<div>").addClass("card text-center border m-4 border-dark border-3")
    var ccBody = $("<div>").addClass("card-body p-3")
    var theCity = $("<p>").addClass("theCity myH1 h4");
    var theDate = $("<p>").addClass("theDate")
    var icon = $("<img>").addClass("theIcon");
    var temperature = $("<p>").addClass("theTemp");
    var humidity = $("<p>").addClass("theHum");
    var windSpeed = $("<p>").addClass("theWind");
    var uvIndex = $("<p>").addClass("uV");
    var uvIndicator = $("<span>").addClass("uvIndicator")
    
    ccBody.append(theCity, theDate, icon, temperature, humidity, windSpeed, uvIndex, uvIndicator)
    currentBox.append(ccBody)
    $("#cityCurrent").append(currentBox)

    var forecastHeading = $("<p>").addClass("h3 myH1 text-center mt-2 forecastHeading");
    $("#fHeading").append(forecastHeading);
    
    getWeather("Austin")
    searchHistory()

});