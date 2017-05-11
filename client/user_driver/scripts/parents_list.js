Template.parents_list.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('school_services');
        self.subscribe('users');
    });
});

Template.parents_list.helpers({
    user: () => {
        return Meteor.users.findOne({_id:Meteor.userId()});
    },
    school_service: () => {
        return SchoolServices.findOne({driver_id:Meteor.userId()});
    }
});

Template.parents_list.onRendered(function () {
    $.getScript(Meteor.absoluteUrl("plugins/slimScroll/jquery.slimscroll.min.js"));
    $.getScript(Meteor.absoluteUrl("plugins/fastclick/fastclick.js"));
});