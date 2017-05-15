Router.route('/', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue');
        this.next();
    },
    onStop: function () {
        $('body').removeClass('hold-transition skin-blue');
    },
    action: function () {
        if (Roles.subscription.ready()) {
            const user_id = Meteor.userId();

            if (!user_id) {
                return Router.go('sign-in');
            }

            if (Roles.userIsInRole(user_id, 'active')) {
                if (Roles.userIsInRole(user_id, 'driver')) {
                    return Router.go('parents-list');
                }

                if (Roles.userIsInRole(user_id, 'parent')) {
                    BlazeLayout.render('common_layout', {
                        auth_element: 'search_school_service',
                        map_element_1: 'map2',
                        map_element_2: 'map3'
                    });
                }
            }
            return Router.go('account-deactivated');

        } else {
            BlazeLayout.render('loading');
        }
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
        } else {
            BlazeLayout.render('loading');
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
        }

        else {
            BlazeLayout.render('loading');
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
        } else {
            BlazeLayout.render('loading');
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
        } else {
            BlazeLayout.render('loading');
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
        } else {
            BlazeLayout.render('loading');
        }
    }
});

Router.route('/driver-mobile-login/id/:id/lat/:lat/lng/:lng', {where: "server"})
    .get(function () {
        const id = this.params.id;
        const lat = parseFloat(this.params.lat);
        const lng = parseFloat(this.params.lng);
        console.log(lat);
        Meteor.call('update_location', id, lat, lng);

    });