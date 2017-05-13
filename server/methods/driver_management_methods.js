Meteor.methods({
    create_school_service: function (driver, school_service) {

        const user_id = Accounts.createUser({
            email: driver.driverEmail,

            profile: {
                nic: driver.driverNic,
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
            schools: school_service.schools,
            // image: school_service.schoolServiceImageVar
        });
    },
    send_request: function (school_service_id, parent) {
        SchoolServices.update({
                _id: school_service_id
            },
            {
                $addToSet: {
                    related_parents: {
                        parent_id: parent.parent_id,
                        status: parent.status,
                        start_location: parent.start_location,
                        end_location: parent.end_location
                    }
                }
            });
    },
    accept_parent: function (school_service_id, parent_id, status) {
        SchoolServices.update({
                _id: school_service_id, "related_parents.parent_id": parent_id
            },
            {
                $set: {"related_parents.$.status": status}

            });
    },
    send_feedback: function (school_service_id, parent_id, feedback) {
        SchoolServices.update({
            _id: school_service_id, "related_parents.parent_id": parent_id
        }, {
            $set: {"related_parents.$.feedback": feedback}
        });
    }
});

