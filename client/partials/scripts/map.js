Template.map.helpers({
    exampleMapOptions: function () {
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
