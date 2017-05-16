Template.driver_payment_details.helpers({
   related_parents:()=>{
       return SchoolServices.findOne({driver_id:Meteor.userId()}).related_parents;
   },
    isAccepted:(parent_id)=>{
       return SchoolServices.findOne({driver_id:Meteor.userId(),'related_parents.parent_id':parent_id, 'related_parents.status':"Accepted"});
    }
});

Template.register_driver.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('school_services');
        self.subscribe('users');
    });
});