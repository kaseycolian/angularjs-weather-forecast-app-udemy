// CONTROLLERS
weatherApp.controller('mainController', ['$scope', 'cityService', '$location', function ($scope, cityService, $location) {
    $scope.city = 'Salem, OH';

    $scope.$watch('city', function () {
        cityService.city = $scope.city
    })

    $scope.submit = () => {
        $location.path('/forecast');
    };
 }]);

weatherApp.controller('forecastController', ['$scope', 'cityService', '$filter', '$routeParams', '$templateCache', 'weatherService', function ($scope, cityService, $filter, $routeParams, $templateCache, weatherService) {
    $scope.city = cityService.city;
    $scope.resultsToReturn = parseInt($routeParams.count || 10);
    $scope.apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + $scope.formattedCity + '&mode=json&units=imperial&APPID=' + $scope.apiKey;

    $scope.formattedCity = $scope.city.split(',')[0];

    $scope.formatTemperature = (temp) => {
        $scope.formattedTemp = temp.toFixed(0)
        return $scope.formattedTemp;
    }

    $scope.formatDate = (date) => {
        const dateAndTimeFormatted = new Date(date)
        $scope.formattedDate = $filter('date')(dateAndTimeFormatted, "MMM d, y 'at' hh:mma");
        return $scope.formattedDate;
    }

    $scope.weatherResult = weatherService.getWeather($scope.formattedCity, $scope.resultsToReturn)
        .$promise.then(function (res) {
            $scope.weatherList = res.list;
            return $scope.weatherList
        })


}])
