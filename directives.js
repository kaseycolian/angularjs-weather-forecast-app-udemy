// DIRECTIVES
weatherApp.directive('forecastDisplay', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/forecast-display.html',
        replace: true,
        scope: {
            weatherList: '=',
            formatDate: '&',
            formatTemperature: '&'
        }
    }
})
