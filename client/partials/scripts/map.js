Template.map.helpers({
    exampleMapOptions: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(6.927079, 79.861244),
                zoom: 8
            };
        }
    }
});

// Template.map.onCreated(function() {
//     // We can use the `ready` callback to interact with the map API once the map is ready.
//     GoogleMaps.ready('exampleMap', function(map) {
//         // Add a marker to the map once it's ready
//         var marker = new google.maps.Marker({
//             position: map.options.center,
//             map: map.instance
//         });
//     });
// });

Template.map.onRendered(function() {
    GoogleMaps.load({key:'AIzaSyDz4OqXSPfYD-AvW1SopPLMBoW9n1c90Qg'});
});
GoogleMaps.create({
    name: 'exampleMap',
    element: document.getElementById('exampleMap'),
    options: {
        center: new google.maps.LatLng(6.927079, 79.861244),
        zoom: 8
    }
});