Template.parent_side_bar_links.helpers({
   isRelatedDrivers:()=>{
       return (Template.instance().data.link === 'related-drivers');
   },
    isPaymentDetails:()=>{
        return (Template.instance().data.link === 'payment-details');
    }
});

Template.admin_side_bar_links.events({
    'click #related_drivers_link':function (event) {
        event.preventDefault();
        Router.go('related-drivers');
    },
    'click #payment_details_link': function (event) {
        event.preventDefault();
        Router.go('payment-details');
    }
});