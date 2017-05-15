Template.related_driver.events({
    'click #single_driver_record': function (event) {
        event.preventDefault();

        if (Meteor.user()) {
            BlazeLayout.render('master_layout', {
                content: 'driver_profile',
                side_bar_links: 'parent_side_bar_links',
                master_data: {
                    school_service_id: SchoolServices.findOne({driver_id: Template.instance().data._id})._id,
                    map_element: 'map',
                },
            });
        } else {
            Router.go('sign-in');
        }
    }
});

Template.related_driver.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('school_services');
    });
});