Template.register_driver.onRendered(function () {
    GoogleMaps.load({key: 'AIzaSyDz4OqXSPfYD-AvW1SopPLMBoW9n1c90Qg', libraries: 'places'});
});

Template.register_driver.events({
    'submit form': function (event) {
        event.preventDefault();

        $('#submit').attr('disabled', true);

        let driver = {};
        let school_service = {};
        let vehicleType;

        driver.driverNic = event.target.driverNic.value;
        driver.driverFirstName = event.target.driverFirstName.value;
        driver.driverLastName = event.target.driverLastName.value;
        driver.driverContactNo = event.target.driverContactNo.value;
        driver.driverEmail = event.target.driverEmail.value;


        if (event.target.optionsRadios1.checked) {
            vehicleType = "Van";
        }
        if (event.target.optionsRadios2.checked) {
            vehicleType = "Bus";
        }

        school_service.vehicleType = vehicleType;

        school_service.seatCount = event.target.seatCount.value;
        school_service.plateNo = event.target.plateNo.value;

        school_service.wayPoints = [{
            coordinate: {
                lat: document.getElementById("lat1").value,
                lng: document.getElementById("lng1").value
            }
        },
            {coordinate: {lat: document.getElementById("lat2").value, lng: document.getElementById("lng2").value}},
            {coordinate: {lat: document.getElementById("lat3").value, lng: document.getElementById("lng3").value}}];

        school_service.schools = [{
            coordinate: {
                lat: document.getElementById("lat6").value,
                lng: document.getElementById("lng6").value
            }
        },
            {coordinate: {lat: document.getElementById("lat7").value, lng: document.getElementById("lng7").value}},
            {coordinate: {lat: document.getElementById("lat8").value, lng: document.getElementById("lng8").value}}];

        const driverImageVar = document.getElementById('driverImage').files[0];
        const schoolServiceImageVar=document.getElementById('schoolServiceImage').files[0];

        const reader = new FileReader();

        reader.onload = function (event) {

            driver.driverImageVar = reader.result;
            school_service.schoolServiceImageVar=reader.result;

            Meteor.call('create_school_service', driver, school_service, function (error) {
                if (error !== undefined) {
                    alert(error.reason);
                } else {
                    window.location.href = Meteor.absoluteUrl("register-driver");
                }
                $('#submit').removeAttr("disabled");
            });
        };

        reader.readAsDataURL(driverImageVar);
        reader.readAsDataURL(schoolServiceImageVar);
    }
});
Template.register_driver.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('school_services');
        self.subscribe('users');
        self.subscribe('roles');
    });
});

Template.register_driver.helpers({
    users: () => {
        return Meteor.users.find({roles: ["driver", "active"]});
    }
});


