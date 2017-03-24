Template.register_parent.events({
    'submit form': function (event) {
        event.preventDefault();

        $('#submit').attr("disabled", true);

        const firstNameVal = event.target.firstName.value;
        const lastNameVal = event.target.lastName.value;
        const nicVal = event.target.parentNic.value;
        const contactVal = event.target.parentContact.value;
        const emailVal = event.target.parentEmail.value;
        const passwordVal = event.target.parentPassword.value;
        const confirmVal = event.target.rePassword.value;

        if (passwordVal == confirmVal) {

            const user_id = Accounts.createUser({
                email: emailVal,
                password: passwordVal,

                profile: {
                    parent_first_name: firstNameVal,
                    parent_last_name: lastNameVal,
                    parent_nic: nicVal,
                    parent_contact: contactVal,
                }
            });

            Roles.addUsersToRoles(user_id, ['parent', 'active']);
            Accounts.sendEnrollmentEmail(user_id);

            $('#helper_text').html('You have successfully registered to the system');
            event.target.firstName.value="";
            event.target.lastName.value="";
            event.target.parentNic.value="";
            event.target.parentContact.value="";
            event.target.parentEmail.value="";
            event.target.parentPassword.value="";
            event.target.rePassword.value="";
        }
        else{
            $('#helper_text').html('Entered passwords are not matching!');
            event.target.parentPassword.value="";
            event.target.rePassword.value="";

            $('#submit').removeAttr("disabled");

        }
    }
});