Template.driver_profile.onRendered(function() {
    GoogleMaps.load({key:'AIzaSyDz4OqXSPfYD-AvW1SopPLMBoW9n1c90Qg'});
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
        return Meteor.users.findOne({_id:"qLenhPK2ashdmkH8A"});
    },
    school_service: function () {
        return SchoolServices.findOne({driver_id:"qLenhPK2ashdmkH8A"});
    }
});

Template.driver_profile.events({
   'click #send_request':function (event) {
       event.preventDefault();

       const parent_id=Meteor.userId();
       Meteor.call('update_school_service',document.getElementById("school_service_id").value,parent_id);
   }
});
