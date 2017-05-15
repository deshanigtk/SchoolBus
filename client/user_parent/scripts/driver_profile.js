Template.driver_profile.onRendered(function () {
    GoogleMaps.load({key: 'AIzaSyDz4OqXSPfYD-AvW1SopPLMBoW9n1c90Qg'});
});

Template.driver_profile.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('school_services');
        self.subscribe('users');
    });
});

Template.driver_profile.helpers({

    school_service: function () {
        return SchoolServices.findOne({_id: Template.instance().data.school_service_id});
    },
    driver: () => {
        return Meteor.users.findOne({_id: SchoolServices.findOne({_id: Template.instance().data.school_service_id}).driver_id});
    },
    related_parents: () => {
        return SchoolServices.findOne({_id: Template.instance().data.school_service_id}).related_parents;
    },
        followers: () => {
        return SchoolServices.findOne({_id: Template.instance().data.school_service_id}).related_parents.length;
    },
    isAcceptedUser: () => {
        return SchoolServices.findOne({_id: Template.instance().data.school_service_id,'related_parents.parent_id': Meteor.userId(),'related_parents.status':"Accepted"});
    },
    isNewUser: () => {
        return !SchoolServices.findOne({_id: Template.instance().data.school_service_id, 'related_parents.parent_id': {$in: [Meteor.userId()]}});
    },
    isPendingUser: () => {
        return SchoolServices.findOne({_id: Template.instance().data.school_service_id, 'related_parents.parent_id': Meteor.userId(),'related_parents.status':"Pending"});
    }
});

Template.driver_profile.events({
    'click #send_request': function (event) {
        event.preventDefault();

        let parent = {};
        const school_service_id = document.getElementById("school_service_id").value;
        const driver_id = document.getElementById("driver_id").value;
        const parent_id = Meteor.userId();
        const status = "Pending";
        const start_lat = Template.instance().data.start_lat;
        const start_lng = Template.instance().data.start_lng;
        const school_lat = Template.instance().data.school_lat;
        const school_lng = Template.instance().data.school_lng;

        parent.parent_id = parent_id;
        parent.status = status;
        parent.start_location = {coordinate: {lat: start_lat, lng: start_lng}};
        parent.end_location = {coordinate: {lat: school_lat, lng: school_lng}};

        Meteor.call('send_request', school_service_id, parent);
        Meteor.call('add_driver', parent_id, driver_id, status);
    },
    'click #add_feedback': function (event) {
        event.preventDefault();
        Meteor.call('send_feedback', document.getElementById("school_service_id").value, Meteor.userId(), document.getElementById("feedback_content").value);
    }
});
