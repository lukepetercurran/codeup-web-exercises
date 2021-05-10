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
        name: "Zaap Thai",
        address: "22 Grand Arcade, Leeds, LS1 6PG",
        description: "Fresh Thai Based Cuisine"
    }, {
        name: "Chequers British Pub",
        address: "5/11 Nana Tai, Sukhumvit Soi 4 Sukhumvit Soi 4, Bangkok 10110 Thailand",
        description: "Casual UK Dining Pub"
    }
]

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10', //stylesheet location
    center: [-95.7129, 37.0902], //starting position [lng, lat]
    zoom: 3 //starting zoom
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