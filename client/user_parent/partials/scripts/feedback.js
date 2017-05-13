Template.feedback.helpers({
    parent: () => {
        return Meteor.users.findOne({_id: Template.instance().data.parent_id});
    },
    feedback:()=>{
        return Template.instance().data.feedback;
    }
});