Template.parent_record.helpers({
    parent: function () {
        return Meteor.users.findOne({_id: Template.instance().data.parent_id});
    },
    isRequestedParent: function () {
        return Template.instance().data.status === "Pending";
    },
    isAcceptedParent: function () {
        return Template.instance().data.status === "Accepted";
    }
});
Template.parent_record.events({

    'click #accept': function () {
        const school_service_id = SchoolServices.findOne({driver_id: Meteor.userId()})._id;
        const parent_id = Template.instance().data.parent_id;
        console.log(school_service_id);
        console.log(parent_id);

        Meteor.call('accept_parent', school_service_id, parent_id, "Accepted");
    }
});