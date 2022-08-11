async function fetchAPI(url, callback) {
    const response = await fetch(url);
    const response_json = await response.json();
    if (response.status == 200) {
        callback(response_json);
    }
}

document.querySelector('body').onclick = function () {
    fetchAPI(
        'https://api.open-meteo.com/v1/forecast?latitude=57.00&longitude=24.15&hourly=temperature_2m&timezone=auto', 
        function (response) {

            let weather = [];

            for (let i =0; i< 24; i++) {
                const date = new Date(response.hourly.time[i]);
                const temp = response.hourly.temperature_2m[i];
                weather.push([date, temp]);
            }

            showData(weather);
    });
};