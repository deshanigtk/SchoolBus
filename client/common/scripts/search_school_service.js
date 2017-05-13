Template.search_school_service.onRendered(function () {
    GoogleMaps.load({key: 'AIzaSyDz4OqXSPfYD-AvW1SopPLMBoW9n1c90Qg', libraries: 'places'});
});

Template.search_school_service.onCreated(function () {
    const self = this;
    self.autorun(function () {
        self.subscribe('school_services');
        self.subscribe('users');
    });

    self.results = new ReactiveDict();

    self.results.set("suggested_list", false);
});

Template.search_school_service.events({
    'click #find_button': function (event, template) {
        event.preventDefault();
        const start_lat = document.getElementById("start_lat").value;
        const start_lng = document.getElementById("start_lng").value;
        const school_lat = document.getElementById("school_lat").value;
        const school_lng = document.getElementById("school_lng").value;

        Meteor.call('search_school_service', parseFloat(start_lat), parseFloat(start_lng), parseFloat(school_lat), parseFloat(school_lng), function (error, result) {
            template.results.set("suggested_list", result);
            console.log(result);
        });
    }
});

Template.search_school_service.helpers({
    search_results: () => {
        console.log(Template.instance().results.get("suggested_list"));
        if (Template.instance().results.get('suggested_list')) {
            return SchoolServices.find({_id: {$in: Template.instance().results.get('suggested_list')}});
        }
        return null;
    }
})
;