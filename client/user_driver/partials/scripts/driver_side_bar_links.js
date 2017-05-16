Template.driver_side_bar_links.helpers({

});

Template.driver_side_bar_links.events({
    'click #parents_list_link':()=>{
        return Router.go('parents-list');
    }
});