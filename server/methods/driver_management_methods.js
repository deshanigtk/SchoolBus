Meteor.methods({
    create_driver: function (driver) {

        const user_id = Accounts.createUser({
            email: driver.driverEmail,

            profile: {
                first_name: driver.driverFirstName,
                last_name: driver.driverLastName,
                contact_no: driver.driverContactNo,
                vehicle_type: driver.vehicleType,
                seat_count: driver.seatCount,
                plate_no: driver.plateNo
            }
        });

        Roles.addUsersToRoles(user_id, ['driver', 'active']);
        Accounts.sendEnrollmentEmail(user_id);
    }
});
