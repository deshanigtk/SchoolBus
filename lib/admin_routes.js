Router.route('/register-driver', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },
    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        // const user_id = Meteor.userId();
        //
        // if (!user_id) {
        //     return Router.go('sign-in');
        // }
        // if (Roles.userIsInRole(user_id, 'active')) {
        //     if (Roles.userIsInRole(user_id, 'driver')) {
        //         return Router.go('parents-list');
        //     }
        //     if (Roles.userIsInRole(user_id, 'parent')) {
        //         return Router.go('related_drivers');
        //     }
        BlazeLayout.render('master_layout', {
            content: 'register_driver',
            side_bar_links: 'admin_side_bar_links',
        });
        //     }
    }
});

Router.route('/drivers-list', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },
    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        BlazeLayout.render('master_layout', {
            content: 'drivers_list',
            side_bar_links: 'admin_side_bar_links',
            page: {
                link: 'drivers-list'
            }
        });
    }
});