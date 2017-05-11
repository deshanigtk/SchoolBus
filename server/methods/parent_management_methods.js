Meteor.methods({
    add_driver: function (parent_id,driver_id,status) {
        Meteor.users.update({_id:parent_id},{$addToSet:{driver_ids:driver_id}});
    }
});