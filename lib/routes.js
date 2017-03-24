Router.route('/', {
    onBeforeAction:function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },
    onStop:function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        BlazeLayout.render('master_layout');
    }
});

Router.route('/sign-in', {
    onBeforeAction:function () {
        $('body').addClass('hold-transition login-page');
        this.next();
    },
    onStop:function () {
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
    onBeforeAction:function () {
        $('body').addClass('hold-transition register-page');
        this.next();
    },
    onStop:function () {
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

Router.route('/map', {
    onBeforeAction:function () {
        $('body').addClass('hold-transition login-page');
        this.next();
    },
    onStop:function () {
        $('body').removeClass('hold-transition login-page');
    },
    action: function () {
        if (Roles.subscription.ready()) {
            BlazeLayout.render('search_school_service');
            // } else {
            //     BlazeLayout.render('loading');
        }
    }
});
