Template.register_driver.events({
    'submit form': function (event) {
        event.preventDefault();

        $('#submit').attr('disabled', true);
        const driverFirstName = event.target.driverFirstName.value;
        const driverLastName = event.target.driverLastName.value;
        const driverContactNo = event.target.driverContactNo.value;
        const driverEmail = event.target.driverEmail.value;

        if (event.target.optionsRadios1.checked) {
            vehicleType = "Van";
        }
        if(event.target.optionsRadios2.checked) {
            vehicleType = "Bus";
        }

        const seatCount = event.target.seatCount.value;
        const plateNo = event.target.plateNo.value;

        Meteor.call('create_driver', driverFirstName, driverLastName, driverContactNo, driverEmail, vehicleType, seatCount, plateNo, function (error) {
            if (error !== undefined) {
                console.log(error);
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
