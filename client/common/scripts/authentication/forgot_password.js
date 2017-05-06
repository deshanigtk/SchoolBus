Template.forgot_password.events({
    'submit form': function (event) {
        event.preventDefault();

        $('#submit').attr("disabled", true);

        const emailVar = event.target.signInEmail.value;

        Accounts.forgotPassword({email: emailVar}, function (error) {

            if (error !== undefined) {

                $('#email_div').addClass('has-error');
                $('#helper_text').html(error.reason + '. Enter email again!');

                event.target.signInEmail.value = "";
                $('#submit').removeAttr("disabled");

                $('#signInEmail').focus();

            } else {

                return Router.go('sign-in');

            }

        });
    },

    'click #back_to_sign_in': function (event) {
        event.preventDefault();

        return Router.go('sign-in');
    }
});