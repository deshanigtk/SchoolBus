Meteor.publish('users', function () {
    return Meteor.users.find({});
});

Meteor.publish('school_services', function () {
    return SchoolServices.find({});
});