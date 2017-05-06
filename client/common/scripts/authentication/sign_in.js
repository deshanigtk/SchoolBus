Template.sign_in.events({
    'submit form': function (event) {
        event.preventDefault();

        $('#submit').attr("disabled", true);

        const emailVal = event.target.signInEmail.value;
        const passwordVal = event.target.signInPassword.value;

        Meteor.loginWithPassword(emailVal, passwordVal, function (err) {
            if (err !== undefined) {
                $('#email_div').addClass('has-error');
                $('#password_div').addClass('has-error');
                $('#helper_text').html(error.reason + '.Sign In Again!');
                $('#signInEmail').focus();

                event.target.signInEmail.value = "";
                event.target.signInPassword.value = "";

                $('#submit').removeAttr("disabled");
            } else {
                if (!Roles.userIsInRole(Meteor.userId(), 'active')) {
                    return Router.go('account-deactivated');
                }
                if (Roles.userIsInRole(Meteor.userId(), 'parent')) {
                    window.location.href = Meteor.absoluteUrl('parent-dashboard')
                }
                if (Roles.userIsInRole(Meteor.userId(), 'driver')) {
                    window.location.href = Meteor.absoluteUrl('driver-dashboard');
                }
            }
        });
    },
    'click #forgot_password': function (event) {
        event.preventDefault();

        return Router.go('forgot-password');
    }
});