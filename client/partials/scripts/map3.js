Template.map3.helpers({
    schoolLocationMapOptions: function () {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(6.927079, 79.861244),
                zoom: 13
            };
        }
    }
});

Template.map3.onCreated(function () {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('schoolLocationMap', function (map3) {
        var map = map3.instance;
        var bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(9.223031, 79.464111),
            new google.maps.LatLng(7.647298, 81.650391),
            new google.maps.LatLng(9.818953, 80.211182),
            new google.maps.LatLng(5.912756, 80.584717));


        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input-3');
        var searchBox = new google.maps.places.SearchBox(input, {bounds: bounds});
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function () {
            searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            // Clear out the old markers.
            markers.forEach(function (marker) {
                marker.setMap(null);
            });
            markers = [];

            // For each place, get the icon, name and location.

            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };

                // Create a marker for each place.
                markers.push(new google.maps.Marker({
                    map: map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location
                }));

                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
                document.getElementById("school_lat").value = place.geometry.location.lat();
                document.getElementById("school_lng").value = place.geometry.location.lng();
            });
            map.fitBounds(bounds);
        });
    });
});