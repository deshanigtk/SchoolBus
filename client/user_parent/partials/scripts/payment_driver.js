Template.payment_driver.helpers({
    fee: () => {
       return SchoolServices.findOne({driver_id:Template.instance().data._id,'related_parents.parent_id':Meteor.userId()}).fee;
    }
});