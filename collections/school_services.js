SchoolServices = new Mongo.Collection("school_services");

GeocoordsSchema = new SimpleSchema({
    lng: {
        type: Number,
        decimal: true,
        min: -180,
        max: 180
    },
    lat: {
        type: Number,
        decimal: true,
        min: -90,
        max: 90
    }
});

LocationSchema = new SimpleSchema({
    type: {
        type: String,
        autoValue: function () {
            return "Point";
        }
    },
    coordinate: {
        type: GeocoordsSchema
    }
});

RelatedParentsSchema = new SimpleSchema({
    parent_id: {
        type: String,
        label: "Parent ID"
    },
    status: {
        type: String,
        label: "Status"
    },
    start_location: {
        type: LocationSchema,
        label: "Start location",
        optional:true
    },
    end_location: {
        type: LocationSchema,
        label: "End Location",
        optional:true
    },
    feedback: {
        type: String,
        label: "Feedback",
        optional:true
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
    // image: {
    //     type: String,
    //     label: "School Service Image"
    // },
    way_points: {
        type: [LocationSchema],
        label: "Way Points"
    },
    schools: {
        type: [LocationSchema],
        label: "Schools"
    },
    related_parents: {
        type: [RelatedParentsSchema],
        label: "Related Parents",
        optional: true
    },
    current_location:{
        type:LocationSchema,
        label:"Current Location",
        optional:true
    }
});

SchoolServices.attachSchema(SchoolServicesSchema);