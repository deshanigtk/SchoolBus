Template.driver_profile.onRendered(function () {
    GoogleMaps.load({key: 'AIzaSyDz4OqXSPfYD-AvW1SopPLMBoW9n1c90Qg'});
});

Template.driver_profile.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('school_services');
    });
    self.autorun(function () {
        self.subscribe('users');
    });
});

Template.driver_profile.helpers({
    driver: () => {
        return Meteor.users.findOne({_id: "D9HBFraq4Bw6ZzMLn"});
    },
    school_service: function () {
        return SchoolServices.findOne({driver_id: "D9HBFraq4Bw6ZzMLn"});
    },
    parentStatus: function () {
        const parent = Meteor.users.findOne({_id: Meteor.userId(), driver_ids: ["D9HBFraq4Bw6ZzMLn"]});
        if (parent === null) {
            return "New";
        } else {
            return parent.status;
        }
    }
});

Template.driver_profile.events({
    'click #send_request': function (event) {
        event.preventDefault();

        let parent = {};
        const school_service_id = document.getElementById("school_service_id").value;
        const driver_id = document.getElementById("driver_id").value;
        const parent_id = Meteor.userId();
        const status="Pending";

        parent.parent_id = parent_id;
        parent.status = status;
        parent.start_location = {coordinate: {lat: 2.0147, lng: 2.04786}};
        parent.end_location = {coordinate: {lat: 6.2587, lng: 1.0254}};

        Meteor.call('send_request', school_service_id, parent);
        Meteor.call('add_driver', parent_id, driver_id,status);
    }
});
