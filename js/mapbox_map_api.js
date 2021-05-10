"use strict"



var restaurants = [
    {
        name: "El Nino 323",
        address: "220, Noksapyeong-daero, Yongsan-gu 2f, Seoul 04345 South Korea",
        description: "The most authentic Mexican food, in South Korea"

    }, {
        name: "Sushi Zushi",
        address: "18720 Stone Oak @ 1604, San Antonio, TX 78258",
        description: "Japanese traditions with Latin American influences"
    }, {
        name: "Chama Gaucha",
        address: "18318 Sonterra Pl, San Antonio, TX 78258",
        description: "Fine Dining Brazilian Steakhouse"
    }, {
        name: "Pappadeaux",
        address: "15715 I-10 West, San Antonio, TX 78257",
        description: "French Quarter inspired Seafood"
    }
]

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', //stylesheet location
    center: [-98.4936, 29.4241], //starting position [lng, lat]
    zoom: 9 //starting zoom
});

restaurants.forEach(function (restaurant) {
    geocode(restaurant.address, MAPBOX_ACCESS_TOKEN).then(function (result){

        var popup = new mapboxgl.Popup()
            .setHTML(restaurant.name + "<br>" + restaurant.description);

        new mapboxgl.Marker()
            .setLngLat(result)
            .setPopup(popup)
            .addTo(map);
    });
})