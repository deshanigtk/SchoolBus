import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
    Accounts.urls.resetPassword = function (token) {
        return Meteor.absoluteUrl('reset-password?token=' + token);
    };
});