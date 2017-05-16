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
        const amount = document.getElementById("amount").value;

        Meteor.call('accept_parent', school_service_id, parent_id, "Accepted");
        Meteor.call('update_fee', school_service_id, parent_id, amount);
    },
    'click #reject': function () {
        const school_service_id = SchoolServices.findOne({driver_id: Meteor.userId()})._id;
        const parent_id = Template.instance().data.parent_id;

        Meteor.call('reject_parent', school_service_id, parent_id, "Rejected");
    },
    'click #view_payment': function () {
        const school_service_id = SchoolServices.findOne({driver_id: Meteor.userId()})._id;
        const parent_id = Template.instance().data.parent_id;
        BlazeLayout.render('master_layout',{
            content:'driver_payment_details',
            side_bar_links:'driver_side_bar_links',
            master_data:{
                school_service_id:school_service_id,
                parent_id:parent_id
            }
        });
    }
});