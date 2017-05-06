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