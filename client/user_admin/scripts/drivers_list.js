Template.drivers_list.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('school_services');
    });
    self.autorun(function () {
        self.subscribe('users');
    });
});

Template.drivers_list.helpers({
    users: () => {
        return Meteor.users.find({roles:["driver","active"]});
    },
    school_services:()=>{
        return SchoolServices.find({});
    }
});

Template.drivers_list.onRendered(function () {
    $.getScript(Meteor.absoluteUrl("plugins/slimScroll/jquery.slimscroll.min.js"));
    $.getScript(Meteor.absoluteUrl("plugins/fastclick/fastclick.js"));
});