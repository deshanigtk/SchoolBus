Template.parent_payment_record.helpers({
    parent: () => {
        Meteor.users.findOne({_id: Template.instance().data.parent_id});
    }
});
Template.register_driver.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('school_services');
        self.subscribe('users');
    });
});