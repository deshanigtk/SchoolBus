Meteor.methods({
    add_driver: function (parent_id, driver_id, status) {
        Meteor.users.update({_id: parent_id}, {$addToSet: {driver_ids: driver_id}});
    },
    add_roles:(user_id)=>{
        Roles.addUsersToRoles(user_id, ['parent','active']);
        Accounts.sendEnrollmentEmail(user_id);
    }

});
Meteor.users.allow({
    insert: () => true,
    update: () => true
});

Meteor.roles.allow({
    insert: () => true,
    update: () => true
});

