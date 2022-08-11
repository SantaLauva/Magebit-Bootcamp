async function fetchAPI(url, callback) {
    const response = await fetch(url);
    const response_json = await response.json();
    if (response.status == 200) {
        callback(response_json);
    }
}

document.querySelector('.profile-picture').onclick = function () {
    fetchAPI('https://randomuser.me/api/', function (response) {
        let name = response.results[0].name.first + " " + response.results[0].name.last;
        showOtherInfo(response.results[0].picture.thumbnail, name);
    });
};