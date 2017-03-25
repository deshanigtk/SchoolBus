Meteor.methods({
    create_driver: function (driverFirstName, driverLastName, driverContactNo, driverEmail, vehicleType, seatCount, plateNo) {

        const user_id = Accounts.createUser({
            email: driverEmail,

            profile: {
                first_name: driverFirstName,
                last_name: driverLastName,
                contact_no: driverContactNo,
                email_address: driverEmail,
                vehicle_type: vehicleType,
                seat_count: seatCount,
                plate_no: plateNo
            }
        });

        Roles.addUsersToRoles(user_id, ['driver', 'active']);
        Accounts.sendEnrollmentEmail(user_id);
    }
});
