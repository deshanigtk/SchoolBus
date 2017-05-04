SchoolServices = new Mongo.Collection("school_services");

// SchoolServicesSchema = new SimpleSchema({
//     driver_id: {
//         type: Number,
//         label: "Driver ID"
//     },
//     vehicle_type: {
//         type: String,
//         label: "Vehicle Type"
//     },
//     plate_no: {
//         type: String,
//         label: "Plate No"
//     },
//     seat_count: {
//         type: Number,
//         label: "Seat Count"
//     },
//     // way_points: {
//     //     type: Array,
//     //     label: "Way Points"
//     // },
//     // "way_points.$": {
//     //     type: LocationSchema
//     // },
//     // schools: {
//     //     type: Array,
//     //     label: "Schools"
//     // },
//     // "schools.$":{
//     //     type:LocationSchema
//     // }
//     // parent_ids: {
//     //     type: Array,
//     //     label: "parent_ids"
//     // },
// });
//
// SchoolServices.attachSchema(SchoolServicesSchema);

// SchoolServices.insert(
//     {driver_id:857},{vehicle_type:"Bus"},{plate_no:"oiuyt"},{seat_count:45},
// );