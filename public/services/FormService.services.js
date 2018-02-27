(function () {
    function FormService($http) {
        //remove item array. going to use server instad.
        
        return {
            postInfo: postInfo,
            getInfo: getInfo,
            removeInfo: removeInfo
        }
        function postInfo(item) {
            // API post method
            return $http({
                method: "POST",
                url: "/tasks",
                data: item
            })
            
        }
        function getInfo() {
            // API get method
            return $http({
                method: "GET",
                url: "/tasks"
            }).then(function(response) {
                return response.data;
            })
        }
        function removeInfo(itemId) {
            // api remove method
            return $http({
                method: "DELETE",
                url: "/tasks/" + itemId
            })
        }
    }
    angular
        .module("app")
        .factory("FormService", FormService);
})();