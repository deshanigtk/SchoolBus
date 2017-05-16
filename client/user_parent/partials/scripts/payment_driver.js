Template.payment_driver.helpers({
    fee: () => {
        const cursor = SchoolServices.findOne({
            driver_id: Template.instance().data._id
        }).related_parents;

        console.log(cursor);
        for (var i = 0; i < cursor.length; i++) {
            if (cursor[i].parent_id === Meteor.userId()) {
                return cursor[i].fee;
            }
        }
        return null;

    }
});
Template.payment_driver.events({
    'click #single_payment_driver': (event) => {
        event.preventDefault();

        BlazeLayout.render('master_layout', {
            content: 'payment_details',
            side_bar_links: 'parent_side_bar_links',
            master_data: {
                payment_form: 'paypalCreditCardForm',
                page: {
                    link: 'payment-details'
                }
            }
        });
    },
    'click #pay_button': (event) => {
        event.preventDefault();
        const school_service_id = SchoolServices.findOne({driver_id: Template.instance().data._id})._id;
        const parent_id = Meteor.userId();
        const year = document.getElementById("year").value;
        const month = document.getElementById("month").value;

        let fee = 0;
        const cursor = SchoolServices.findOne({
            driver_id: Template.instance().data._id
        }).related_parents;

        console.log(cursor);
        for (var i = 0; i < cursor.length; i++) {
            if (cursor[i].parent_id === Meteor.userId()) {
                fee = cursor[i].fee;
                break;
            }
        }

        Meteor.call('pay_fee', school_service_id, parent_id, year, month, fee, function (error) {
            if (error !== undefined) {
                alert(error);
            }
        });
    }
});

Template.paypalCreditCardForm.events({
    'submit #paypal-payment-form': function (event, template) {
        event.preventDefault();
        var cardData = Template.paypalCreditCardForm.card_data();
        Meteor.Paypal.purchase(cardData, {total: '10.00', currency: 'USD'}, function (error, result) {
            if (error) {
                console.log(error.reason);
            } else {
                console.log(template.instance.data);

            }
        })
    }
});
Template.payment_driver.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('school_services');
        self.subscribe('users');
    });
});