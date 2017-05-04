Template.register_driver.events({
    'submit form': function (event) {
        event.preventDefault();

        $('#submit').attr('disabled', true);

        let driver = {};

        driver.driverFirstName = event.target.driverFirstName.value;
        driver.driverLastName = event.target.driverLastName.value;
        driver.driverContactNo = event.target.driverContactNo.value;
        driver.driverEmail = event.target.driverEmail.value;
        let vehicleType;

        if (event.target.optionsRadios1.checked) {
            vehicleType = "Van";
        }
        if(event.target.optionsRadios2.checked) {
            vehicleType = "Bus";
        }

        driver.vehicleType = vehicleType;

        driver.seatCount = event.target.seatCount.value;
        driver.plateNo = event.target.plateNo.value;

        Meteor.call('create_driver',driver, function (error) {
            if (error !== undefined) {
                alert(error.reason);
            } else {
                $('#submit').removeAttr("disabled");
                window.location.href = Meteor.absoluteUrl("register-driver");
            }
        });
    }
});
Template.register_driver.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('users');
    });
});

Template.register_driver.helpers({
    users: () => {
        return Meteor.users.find({});
    }
});
