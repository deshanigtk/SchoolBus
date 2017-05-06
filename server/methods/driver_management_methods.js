Meteor.methods({
    create_school_service: function (driver, school_service) {

        const driver_id = Accounts.createUser({
            email: driver.driverEmail,

            profile: {
                first_name: driver.driverFirstName,
                last_name: driver.driverLastName,
                contact_no: driver.driverContactNo
            }
        });
        Roles.addUsersToRoles(driver_id, ['driver', 'active']);
        Accounts.sendEnrollmentEmail(driver_id);

        const school_service_id = SchoolServices.insert({
            driver_id: driver_id,
            vehicle_type: school_service.vehicleType,
            seat_count: school_service.seatCount,
            plate_no: school_service.plateNo,
            way_points: school_service.wayPoints,
            schools:school_service.schools
        })
    }

});

