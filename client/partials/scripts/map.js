Template.map.helpers({
    exampleMapOptions: function () {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            return {
                zoom: 8,
                center: new google.maps.LatLng(6.927079, 79.861244),
            };
        }
    }
});

Template.map.onCreated(function () {
    GoogleMaps.ready('exampleMap', function (map) {
        // Add a marker to the map once it's ready
        // var gc = new google.maps.Geocoder();
        const cursor = Template.instance().data;

        // var myLatLng = {lat: 6.977079, lng: 79.831244};
        // var bounds = new google.maps.LatLngBounds();

        const handle = cursor.observeChanges({
            changed: function () {
                var myLatLng = cursor.fetch().current_location.coordinate;
                var marker = new google.maps.Marker({
                    position: myLatLng
                });
                marker.setMap(map.instance);

            }
        });

    });
})