Template.parent_drivers_list.helpers({
    related_drivers:()=>{
        return Meteor.users.find({_id:{$in:Meteor.users.findOne({_id:Meteor.userId()}).driver_ids}});
    }

});

Template.driver_profile.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('school_services');
        self.subscribe('users');
    });
});