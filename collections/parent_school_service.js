import {Mongo} from 'meteor/mongo'

ParentSchoolServices = new Mongo.Collection("parent_school_services");

ParentSchoolServicesSchema = new SimpleSchema({
    parent_id: {
        type: Number,
        label: "Parent ID"
    },
    school_service_id: {
        type: Number,
        label: "School Service ID"
    },
    start_location:{
        type: LocationSchema,
        label:"Start Location"
    },
    status:{
        type: String,
        label:"Status"
    }
});

