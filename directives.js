// DIRECTIVES
weatherApp.directive('forecastDisplay', () => {
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
