Template.way_point6.helpers({
    wayPointMap6Options: function () {
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

Template.way_point6.onCreated(function () {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('wayPointMap6', function (way_point6) {
        var map = way_point6.instance;
        var bounds = new google.maps.LatLngBounds();
        start = new google.maps.LatLng(8.1, 80.6);
        end = new google.maps.LatLng(8.1, 80.7);
        bounds.extend(start);
        bounds.extend(end);

        map.fitBounds(bounds);
        map.panToBounds(bounds);


        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input-w6');
        var searchBox = new google.maps.places.SearchBox(input);
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
                document.getElementById("lat6").value = place.geometry.location.lat();
                document.getElementById("lng6").value = place.geometry.location.lng();
            });
            map.fitBounds(bounds);
        });
    });
});