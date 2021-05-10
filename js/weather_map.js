(function() {
    "use strict"
    var lat = 29.4241;
    var lng = -98.4936;
    var input = $("#user-input");

    // AJAX REQUEST FUNCTION
    weatherMap();
    function weatherMap() {
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: WEATHER_MAP_TOKEN,
            lat: lat,
            lon: lng,
            units: "imperial",
            exclude: "minutely,hourly"
        }).done(function (data) {
            console.log(data);
            renderHtml(data);
        });
    }
    // FUNCTION TO ADD HTML
    function renderHtml(data) {
        var html = "";
        for(var i = 0; i < 5; i += 1) {
            var tempMax = data.daily[i].temp.max;
            var tempMin = data.daily[i].temp.min;
            var description = data.daily[i].weather[0].description;
            var windSpeed = data.daily[i].wind_speed;
            var pressure = data.daily[i].pressure;
            var humidity = data.daily[i].humidity;
            var iconCode = data.daily[i].weather[0].icon;
            var date = data.daily[i].dt;
            var date1 = new Date (date*1000);
            var date2 = date1.toLocaleDateString("en-US");
            html += "<div class='card' style='width: 17rem;'>";
            html += "<div class='card-header text-center'>" + date2 + "</div>";
            html += "<ul class='list-group list-group-flush'>";
            html += "<li class='list-group-item text-center'>" + tempMax + "°F" + " / " + tempMin + "°F" + "<br>" + "<img src='http://openweathermap.org/img/wn/" + iconCode + ".png'>" ;
            html += "<li class='list-group-item'>" + "Description: " + "<strong>" + description + "</strong>";
            html += "<li class='list-group-item'>" + "Humidity: " + "<strong>" + humidity + "</strong>";
            html += "<li class='list-group-item'>" + "Wind: " + "<strong>" + windSpeed + "</strong>";
            html += "<li class='list-group-item'>" + "Pressure: " + "<strong>" + pressure + "</strong>";
            html += "</ul>";
            html += "</div>";
        }
        $("#weather").html(html);
    }

    // ADDS MAP TO HTML
    mapboxgl.accessToken = WEATHER_MAP_TOKEN;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', //stylesheet location
        center: [lng, lat], //starting position [lng, lat]
        zoom: 9 //starting zoom
    });
    // CONTROLS FOR MAP
    map.addControl(
        new mapboxgl.NavigationControl())

    // DRAGGABLE MARKER ON MAP
    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([lng, lat])
        .addTo(map);

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        lng = lngLat.lng;
        lat = lngLat.lat;
        reverseGeocode(lngLat, WEATHER_MAP_TOKEN).then(function (result){
            input.val(result)
        })
        weatherMap();
    }
    marker.on('dragend', onDragEnd);

    // FUNCTION FOR SEARCH AND FLY TO ADDED
    function userSearch(){
        var newInput = input.val();
        geocode(newInput, WEATHER_MAP_TOKEN).then(function (result){
            lng = result[0];
            lat = result[1];
            marker.setLngLat([lng, lat]);
            map.flyTo({
                center: [lng, lat],
                essential: true,
                zoom: 9
            })
            weatherMap();
        })
    }

    //this click event is using userSearch function and adding marker to map based on the user search
    $("button").click(function (e) {
        e.preventDefault();
        userSearch();
        marker.addTo(map);
    })
})();