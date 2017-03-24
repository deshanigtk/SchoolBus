
Template.master_layout.onRendered(function () {
    $.getScript("plugins/jQuery/jquery-2.2.3.min.js");
    $.getScript("bootstrap/js/bootstrap.min.js");
    $.getScript("dist/js/app.min.js");
});

// Template.common_layout.onRendered(function () {
//     $.getScript("plugins/jQuery/jquery-2.2.3.min.js");
//     $.getScript("bootstrap/js/bootstrap.min.js");
//     $.getScript("plugins/iCheck/icheck.min.js", function () {
//         $('input').iCheck({
//             checkboxClass: 'icheckbox_square-blue',
//             radioClass: 'iradio_square-blue',
//             increaseArea: '20%' // optional
//         });
//     });
// });


