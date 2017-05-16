Template.nav_bar_main.helpers({
    user: () => {
        return Meteor.user();
    },
});

Template.nav_bar_main.events({
    'click #profile': (event) => {
        event.preventDefault();
        Router.go('related-drivers');
    },
    'click #sign_out': () => {
        Meteor.logout();
    }
});