Template.nav_bar_main.helpers({
    user: () => {
        return Meteor.user();
    },
});

Template.nav_bar_main.events({
   'click #profile':()=>{
        BlazeLayout.render('Master_layout',{
            content:'related_drivers'
        });
   },
    'click #sign_out':()=>{
       Meteor.logout();
    }
});