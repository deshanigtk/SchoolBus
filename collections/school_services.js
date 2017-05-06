SchoolServices = new Mongo.Collection("school_services");

GeocoordsSchema = new SimpleSchema({
    lng: {
        type : Number,
        decimal: true,
        min: -180,
        max: 180
    },
    lat: {
        type : Number,
        decimal: true,
        min: -90,
        max: 90
    }
});

LocationSchema = new SimpleSchema({
    type : {
        type : String,
        autoValue: function() {
            return "Point";
        }
    },
    coordinate: {
        type: GeocoordsSchema
    }
});

SchoolServicesSchema = new SimpleSchema({
    driver_id: {
        type: String,
        label: "Driver ID"
    },
    vehicle_type: {
        type: String,
        label: "Vehicle Type"
    },
    plate_no: {
        type: String,
        label: "Plate No"
    },
    seat_count: {
        type: Number,
        label: "Seat Count"
    },
    way_points: {
        type: [LocationSchema],
        label: "Way Points"
    },
    schools: {
        type: [LocationSchema],
        label: "Schools"
    },
    parent_ids: {
        type: [String],
        label: "parent_ids",
        optional: true
    },
});

SchoolServices.attachSchema(SchoolServicesSchema);

// SchoolServices.insert(
//     {driver_id:7789,vehicle_type:"Bus",plate_no:"oiuyt",seat_count:45, way_points:[{coordinate:{lat:2.24,lng:2.58}},{coordinate:{lat:2.1424,lng:7.58}}]}
// );