Router.route('/payment-details', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },
    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        const user_id = Meteor.userId();

        if (!user_id) {
            return Router.go('sign-in');
        }
        if (Roles.userIsInRole(user_id, 'active')) {

            if (Roles.userIsInRole(user_id, 'driver')) {
                return Router.go('parents-list');
            }
            BlazeLayout.render('master_layout', {
                content: 'payment_details',
                side_bar_links: 'parent_side_bar_links',
                master_data: {
                    page: {
                        link: 'payment-details'
                    }
                }
            });
        }
    }
});

Router.route('/related-drivers', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },
    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        const user_id = Meteor.userId();

        if (!user_id) {
            return Router.go('sign-in');
        }
        if (Roles.userIsInRole(user_id, 'active')) {

            if (Roles.userIsInRole(user_id, 'driver')) {
                return Router.go('parents-list');
            }
            if (Roles.userIsInRole(user_id, 'admin')) {
                return Router.go('register-driver');
            }
            BlazeLayout.render('master_layout', {
                content: 'parent_drivers_list',
                side_bar_links: 'parent_side_bar_links',
                master_data: {
                    page: {
                        link: 'related-drivers'
                    }
                }
            });
        }
    }
});