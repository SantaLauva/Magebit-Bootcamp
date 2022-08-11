async function fetchAPI(url, callback) {
    const response = await fetch(url);
    const response_json = await response.json();
    if (response.status == 200) {
        callback(response_json);
    }
}

document.querySelector('.post-text').onclick = function () {
    fetchAPI('https://uselessfacts.jsph.pl/random.json', function (response) {
        showPostText(response.text);
    });
};