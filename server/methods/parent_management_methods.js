Meteor.methods({
    add_driver: function (parent_id, driver_id, status) {
        Meteor.users.update({_id: parent_id}, {$addToSet: {driver_ids: driver_id}});
    },
    add_roles: (user_id) => {
        Roles.addUsersToRoles(user_id, ['parent', 'active']);
        Accounts.sendEnrollmentEmail(user_id);
    },
    pay_fee: ( school_service_id,parent_id, year, month,amount) => {
        Payments.insert({
            school_service_id:school_service_id,
            parent_id:parent_id,
            year:year,
            month:month,
            amount:amount,
            status:"Paid"});
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

