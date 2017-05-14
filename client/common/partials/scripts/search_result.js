Template.search_result.helpers({
    school_service: function () {
        return SchoolServices.findOne({_id: Template.instance().data.id});
    },
    driver: function () {
        return Meteor.users.findOne({_id: SchoolServices.findOne({_id: Template.instance().data.id}).driver_id});
    }
});

Template.search_result.events({
   'click #single_search_result':function (event) {
       event.preventDefault();

       if(Meteor.user) {
           BlazeLayout.render('master_layout', {
               content: 'driver_profile',
               side_bar_links: 'parent_side_bar_links',
               master_data: {
                   school_service_id: Template.instance().data.id,
                   start_lat: Template.instance().data.lat1,
                   start_lng: Template.instance().data.lng1,
                   school_lat: Template.instance().data.lat2,
                   school_lng: Template.instance().data.lng2
               }
           });
       }else{
           Router.go('sign-in');
       }
   }
});
