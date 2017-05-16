Template.payment_driver.helpers({
    fee: () => {
        return SchoolServices.findOne({
            driver_id: Template.instance().data._id,
            'related_parents.parent_id': Meteor.userId()
        }).related_parents.$.fee;
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
        const school_service_id = SchoolServices.findOne({driver_id: this.data._id})._id;
        const parent_id = Meteor.userId();
        const year = document.getElementById("year").value;
        const month = document.getElementById("month").value;
        console.log(school_service_id);
        console.log(year);
        console.log(month);

        Meteor.call('pay_fee', school_service_id, parent_id, year, month, 2000);
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
Template.driver_profile.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('school_services');
        self.subscribe('users');
    });
});