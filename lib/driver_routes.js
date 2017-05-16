Router.route('/parents-list', {
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

            if (Roles.userIsInRole(user_id, 'parent')) {
                return Router.go('related-drivers');
            }
            if (Roles.userIsInRole(user_id, 'admin')) {
                return Router.go('register-driver');
            }
            BlazeLayout.render('master_layout', {
                content: 'parents_list',
                side_bar_links: 'driver_side_bar_links',
                master_data:{
                    page:{
                        link:'parents-list'
                    }
                }
            });
        }
    }
});

// Router.route('/driver-payment-details', {
//     onBeforeAction: function () {
//         $('body').addClass('hold-transition skin-blue sidebar-mini');
//         this.next();
//     },
//     onStop: function () {
//         $('body').removeClass('hold-transition skin-blue sidebar-mini');
//     },
//     action: function () {
//         BlazeLayout.render('master_layout', {
//             content: 'driver_payment_details',
//             side_bar_links: 'driver_side_bar_links',
//             master_data:{
//                 page:{
//                     link:'driver-payment-details'
//                 }
//             }
//         });
//     }
// });