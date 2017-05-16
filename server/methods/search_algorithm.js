Meteor.methods({
    search_school_service: function (start_lat, start_lng, school_lat, school_lng) {
        const cursor = SchoolServices.find({'schools.coordinate.lat': {$eq: school_lat}}, {'schools.coordinate.lng': {$eq: school_lng}});

        var distanceObj = {};
        cursor.forEach(function (row) {
            var minValue = Number.MAX_SAFE_INTEGER;

            for (var i = 0; i < row.way_points.length; i++) {
                const x = row.way_points[i];

                const point_lat = x.coordinate.lat;
                const point_lng = x.coordinate.lng;
                Meteor.call('get_distance', start_lat, start_lng, point_lat, point_lng, function (error, result) {
                    if (result < minValue) {
                        minValue = result;
                    }
                });
            }
            distanceObj[row._id] = minValue;

        });

        var sortable = [];
        for (var obj in distanceObj) {
            if (distanceObj[obj] < 2000) {
                sortable.push([obj, distanceObj[obj]]);
            }
        }

        sortable.sort(function (a, b) {
            return a[1] - b[1];
        });

        var result_array = [];
        for (var x = 0; x < sortable.length; x++) {
            result_array.push(sortable[x][0]);
        }

        return result_array;
    },

    get_distance: function (start_lat, start_lng, point_lat, point_lng) {
        const R = 6378137; // Earth’s mean radius in meter
        const rad_start_lat = Meteor.call('rad', start_lat);
        const rad_start_lng = Meteor.call('rad', start_lng);
        const rad_point_lat = Meteor.call('rad', point_lat);
        const rad_point_lng = Meteor.call('rad', point_lng);

        const dLat = rad_point_lat - rad_start_lat;
        const dLong = rad_point_lng - rad_start_lng;

        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(rad_point_lat) * Math.cos(rad_point_lat) *
            Math.sin(dLong / 2) * Math.sin(dLong / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;
        return d; // returns the distance in meter
    },
    rad: function (x) {
        return x * Math.PI / 180;
    }


});