Router.route('/', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue');
        this.next();
    },
    onStop: function () {
        $('body').removeClass('hold-transition skin-blue');
    },
    action: function () {
        BlazeLayout.render('common_layout', {
            auth_element: 'search_school_service',
            map_element_1: 'map2',
            map_element_2: 'map3'
        });
    }
});

Router.route('/sign-in', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition login-page');
        this.next();
    },
    onStop: function () {
        $('body').removeClass('hold-transition login-page');
    },
    action: function () {
        if (Roles.subscription.ready()) {
            if (Meteor.userId()) {
                return Router.go('/');
            }

            BlazeLayout.render('common_layout', {
                auth_element: 'sign_in'
            });
            // } else {
            //     BlazeLayout.render('loading');
        }
    }
});

Router.route('/register', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition register-page');
        this.next();
    },
    onStop: function () {
        $('body').removeClass('hold-transition register-page');
    },
    action: function () {
        if (Roles.subscription.ready()) {
            if (Meteor.userId()) {
                return Router.go('/');
            }

            BlazeLayout.render('common_layout', {
                auth_element: 'register_parent'
            });
            // } else {
            //     BlazeLayout.render('loading');
        }
    }
});

Router.route('/forgot-password', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition login-page');
        this.next();
    },
    onStop: function () {
        $('body').removeClass('hold-transition login-page');
    },
    action: function () {
        if (Roles.subscription.ready()) {
            if (Meteor.userId()) {
                return Router.go('/');
            }

            BlazeLayout.render('common_layout', {
                auth_element: 'forgot_password'
            });
            // } else {
            //     BlazeLayout.render('loading');
            // }
        }
    }
});
Router.route('/reset-password', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition login-page');
        this.next();
    },
    onStop: function () {
        $('body').removeClass('hold-transition login-page');
    },
    action: function () {
        if (Roles.subscription.ready()) {
            if (Meteor.userId()) {
                return Router.go('/');
            }

            BlazeLayout.render('common_layout', {
                auth_element: 'reset_password'
            });
            // } else {
            //     BlazeLayout.render('loading');
            // }
        }
    }
});


Router.route('/enroll-account', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition login-page');
        this.next();
    },

    onStop: function () {
        $('body').removeClass('hold-transition login-page');
    },

    action: function () {
        if (Roles.subscription.ready()) {
            if (Meteor.userId()) {
                return Router.go('/');
            }

            BlazeLayout.render('common_layout', {
                auth_element: 'enroll_account'
            });
        // } else {
        //     BlazeLayout.render('loading');
        }
    }
});