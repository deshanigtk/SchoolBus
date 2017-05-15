Template.map.helpers({
    exampleMapOptions: function () {
        // Make sure the maps API has loaded
        const cursor = SchoolServices.findOne({_id: Template.instance().data});
        var myLatLng = cursor.current_location.coordinate;

        if (GoogleMaps.loaded()) {
            if (myLatLng) {
                return {
                    zoom: 11,
                    center: new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
                };
            } else {
                return {
                    zoom: 11,
                    center: new google.maps.LatLng(6.927079, 79.861244),
                }
            }
        }
    }
});


Template.map.onCreated(function () {
    GoogleMaps.school_service_id = this.data;
    GoogleMaps.ready('exampleMap', function (map) {
        // Add a marker to the map once it's ready

        const cursor = SchoolServices.findOne({_id: this.school_service_id.value});

        var myLatLng = cursor.current_location.coordinate;
        console.log(myLatLng);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map.instance
        });
    });

});
Template.driver_profile.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('school_services');
    });
});