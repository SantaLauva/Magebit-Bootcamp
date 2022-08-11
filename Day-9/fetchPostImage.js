async function fetchAPI(url, callback) {
    const response = await fetch(url);
    const response_json = await response.json();
    if (response.status == 200) {
        callback(response_json);
    }
}

document.querySelector('.post-image').onclick = function () {
    fetchAPI('https://dog.ceo/api/breeds/image/random', function (response) {
        showPostImage(response.message);
    });
};