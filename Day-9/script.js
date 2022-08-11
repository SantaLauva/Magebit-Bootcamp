let container = document.querySelector('.post-container');
let post = document.querySelector('.post');
let end = document.querySelector('.end');

window.onscroll = addPostIfShould;

function addPostIfShould() {
    if (end.offsetTop < window.pageYOffset + window.innerHeight) { 
        addPosts();
    }
}

addPostIfShould();

function addPosts() {
    for (let i = 0; i < 3; i++) {
        addPost();
    }
}

function addPost() {
    const new_post = post.cloneNode(true);
    new_post.style.display = "block";

    let profile_picture = new_post.querySelector('.profile-picture');
    let profile_name = new_post.querySelector('.profile-name');
    let post_text = new_post.querySelector('.post-text');
    let post_image = new_post.querySelector('.post-image');

    fetchAPI(
        'https://randomuser.me/api/',
        function (response) {
            profile_picture.src = response.results[0].picture.thumbnail;

            let name = response.results[0].name.first + " " + response.results[0].name.last;
            profile_name.innerHTML = name;
        }
    );

    fetchAPI(
        'https://meowfacts.herokuapp.com/',
        function (response) {
            post_text.innerHTML = response.data;
        }
    );

    fetchAPI(
        'https://dog.ceo/api/breeds/image/random',
        function (response) {
            post_image.src = response.message;
        }
    );

    container.append(new_post);
}

addPosts();