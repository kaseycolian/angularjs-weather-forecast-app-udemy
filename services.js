// SERVICES
weatherApp.service('cityService', function () {
    this.city = '';
})

weatherApp.config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self', 'http://api.openweathermap.org/**'])
});

weatherApp.service('weatherService', ['$resource', '$log', function ($resource, $log) {
    const apiKey = '85187832a4fa9ac1d925c2259355a493';
    const apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?APPID='

    this.getWeather = function (formattedCity, count, unitType = 'imperial') {
        const weatherAPI = $resource(apiUrl + apiKey, {
            get: {
                method: "JSONP"
            }
        });

        return results = weatherAPI.get({
            q: formattedCity,
            cnt: count,
            units: unitType
        })
    }

}])
