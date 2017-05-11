Template.parents_list.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('school_services');
        self.subscribe('users');
    });
});

Template.parents_list.helpers({
    related_parents: () => {
        const school_service = SchoolServices.findOne({driver_id: Meteor.userId()});
        return school_service.related_parents;
    },
    isRequestedParent: function (status) {
        return (status === "Pending");
    },

    isAcceptedParent: function (status) {
        return (status === "Accepted");
    },

    // accepted_parents: () => {
    //     return Meteor.users.find({_id:Meteor.userId(),related_parents:{status:"Accepted"}});
    // },
    // school_service: () => {
    //     return SchoolServices.findOne({driver_id:Meteor.userId()});
    // }
});

Template.parents_list.onRendered(function () {
    $.getScript(Meteor.absoluteUrl("plugins/slimScroll/jquery.slimscroll.min.js"));
    $.getScript(Meteor.absoluteUrl("plugins/fastclick/fastclick.js"));
});