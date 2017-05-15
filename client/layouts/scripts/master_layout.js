Template.master_layout.onRendered(function () {
    $.getScript(Meteor.absoluteUrl("dist/js/app.min.js"));
});