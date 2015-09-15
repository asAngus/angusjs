(function (angular) {
    var ItemFactory = function ($resource) {
        return $resource('http://192.168.1.4:8080/reset/:id', {
            id: '@id'
        }, {
            update: {
                method: "PUT"
            },
            remove: {
                method: "DELETE"
            }
        });
    };

    ItemFactory.$inject = ['$resource'];
    angular.module("myApp.services").factory("Item", ItemFactory);
}(angular));
