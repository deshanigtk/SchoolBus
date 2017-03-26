Router.route('/parents-list', {
    onBeforeAction: function () {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
        this.next();
    },
    onStop: function () {
        $('body').removeClass('hold-transition skin-blue sidebar-mini');
    },
    action: function () {
        BlazeLayout.render('master_layout', {
            content: 'parents_list'
        });
    }
});