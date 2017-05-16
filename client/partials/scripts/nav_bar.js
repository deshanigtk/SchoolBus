Template.nav_bar.helpers({
    user: () => {
        return Meteor.user();
    },
});

Template.nav_bar.events({
    'click #sign_out': () => {
        Meteor.logout();
    },
    'click #school_bus_logo': (event) => {
        event.preventDefault();
        Router.go('/');
    }

});