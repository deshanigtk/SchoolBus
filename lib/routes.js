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

Router.route('/login', {
    onBeforeAction:function () {
        $('body').addClass('hold-transition login-page');
        this.next();
    },
    onStop:function () {
        $('body').removeClass('hold-transition login-page');
    },
    action: function () {
        BlazeLayout.render('login_layout');
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
        BlazeLayout.render('register_layout');
    }
});