Router.route('/register-driver', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },
    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        BlazeLayout.render('master_layout', {
            content: 'register_driver',
            side_bar_links: 'admin_side_bar_links',
            map_element_1: 'way_point1',
            map_element_2: 'way_point2',
        });
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
            side_bar_links: 'admin_side_bar_links'
        });
    }
});