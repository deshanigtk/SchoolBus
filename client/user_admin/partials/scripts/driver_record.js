Template.driver_record.helpers({
    isUserActive: function (userId) {
        return Roles.userIsInRole(userId, 'active');
    },
    school_service: function () {
        return SchoolServices.findOne({driver_id:Template.instance().data._id});
    }
});

Template.driver_record.events({
    'click #single_driver_record': function (event) {
        event.preventDefault();

        BlazeLayout.render('master_layout', {
            content: 'edit_driver',
            side_bar_links: 'admin_side_bar_links',
            user_data: {
                user_id: Template.instance().data._id,
            }
        });
    }
});