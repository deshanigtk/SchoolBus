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
            map_element_2: 'way_point2'
            // map_element_3: 'way_point3',
            // map_element_4: 'way_point4',
            // map_element_5: 'way_point5',
            // map_element_6: 'way_point6',
            // map_element_7: 'way_point7',
            // map_element_8: 'way_point8',
            // map_element_9: 'way_point9',
            // map_element_10: 'way_point10'
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
    action: function(){
        BlazeLayout.render('master_layout',{
            content: 'drivers_list',
            side_bar_links: 'admin_side_bar_links'
        });
    }
});