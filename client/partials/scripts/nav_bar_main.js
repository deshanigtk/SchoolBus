Template.nav_bar_main.helpers({
    user: () => {
        return Meteor.user();
    },
});

Template.nav_bar_main.events({
    'click #profile': () => {
        Router.go('related-drivers');
    },
    'click #sign_out': () => {
        Meteor.logout();
    }
});