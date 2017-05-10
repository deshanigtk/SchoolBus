Meteor.methods({
    create_school_service: function (driver, school_service) {

        const user_id = Accounts.createUser({
            email: driver.driverEmail,

            profile: {
                nic:driver.driverNic,
                first_name: driver.driverFirstName,
                last_name: driver.driverLastName,
                contact_no: driver.driverContactNo,
                image: driver.driverImageVar
            }
        });
        Roles.addUsersToRoles(user_id, ['driver', 'active']);
        Accounts.sendEnrollmentEmail(user_id);

        const school_service_id = SchoolServices.insert({
            driver_id: user_id,
            vehicle_type: school_service.vehicleType,
            seat_count: school_service.seatCount,
            plate_no: school_service.plateNo,
            way_points: school_service.wayPoints,
            schools:school_service.schools,
            image:school_service.schoolServiceImageVar
        })
    },
    update_school_service:function (school_service_id, parent_id) {
        SchoolServices.update({_id:school_service_id},{$addToSet:{parent_ids:parent_id}});
    }

});

