Template.payment_details.helpers({
    payment_drivers: () => {
        return Meteor.users.find({_id: {$in: Meteor.user().driver_ids}});
    }
});

Template.payment_details.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('school_services');
        self.subscribe('users');
    });
});