Template.register_parent.events({
    'submit form': function (event) {
        event.preventDefault();

        $('#submit').attr("disabled", true);

        const firstNameVal = event.target.parentFirstName.value;
        const lastNameVal = event.target.parentLastName.value;
        const nicVal = event.target.parentNic.value;
        const contactVal = event.target.parentContact.value;
        const emailVal = event.target.parentEmail.value;
        const passwordVal = event.target.parentPassword.value;
        const confirmVal = event.target.rePassword.value;

        if (passwordVal === confirmVal) {


            const parentImageVar = document.getElementById('parentImage').files[0];

            const reader = new FileReader();

            reader.onload = function () {

                Accounts.createUser({
                    email: emailVal,
                    password: passwordVal,

                    profile: {
                        first_name: firstNameVal,
                        last_name: lastNameVal,
                        nic: nicVal,
                        contact: contactVal,
                        image: reader.result
                    },
                    driver_ids: [String]
                }, function (error) {
                    $('#submit').attr("disabled", false);
                    if (error !== undefined) {
                        alert(error.reason);
                    } else {
                        const user_id = Meteor.userId();
                        Meteor.call('add_roles', user_id);

                        $('#helper_text').html('You have successfully registered to the system');
                        event.target.parentFirstName.value = "";
                        event.target.parentLastName.value = "";
                        event.target.parentNic.value = "";
                        event.target.parentContact.value = "";
                        event.target.parentEmail.value = "";
                        event.target.parentPassword.value = "";
                        event.target.rePassword.value = "";
                    }
                });
            };

            reader.readAsDataURL(parentImageVar);
        }
        else {
            $('#helper_text').html('Entered passwords are not matching!');
            event.target.parentPassword.value = "";
            event.target.rePassword.value = "";

            $('#submit').removeAttr("disabled");

        }
    },
    'click #already_registered': function (event) {
        event.preventDefault();

        return Router.go('sign-in');
    }
});