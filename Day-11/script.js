let counter = 0;

document.getElementById('create-to-do').onclick = function (event) {
    let inputField = document.getElementById('to-do-input');
    let task = inputField.value;

    let values = {'id': counter, 'task_text': task, 'done': false};
    event.preventDefault();
    fetchAPI(values);
}

async function fetchAPI(values) {
    const response = await fetch("http://web.local/", {
    method: 'POST',
    body: JSON.stringify(values)
    })
    .then(response => response.json())
 
    .then(json => console.log(json));

    counter++;
}

// fetch('http://example.com/movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));



// class ToDo {
//     constructor(task) {
//         this.id = -1;
//         this.done = false;
//         this.task_text = task;
//     }

//     createToDo() {
//         let toDo = document.querySelector('.to-do-tasks');
//         let template = document.querySelector('.to-do-template');
//         let clone = template.content.cloneNode(true);
//         clone.querySelector('.to-do-text').innerHTML = this.task_text;

//         tasks.push(this);
//         this.id = tasks.length - 1;
//         clone.querySelector('.to-do-checkbox').dataset.id = this.id;

//         toDo.appendChild(clone);
//     }

//     toDoDone() {
//         let toDo = document.querySelector('.done-to-do');
//         let template = document.querySelector('.done-template');
//         let clone = template.content.cloneNode(true);
//         clone.querySelector('.to-do-text').innerHTML = task;

//         toDo.appendChild(clone);
//     }
// }


// let tasks = [];

// document.getElementById('create-to-do').onclick = function (event) {
//     let inputField = document.getElementById('to-do-input');
//     let task = inputField.value;

//     let to_do = new ToDo(task);
//     to_do.createToDo();

//     inputField.value = "";
// }

// document.querySelector('.to-do-container').onclick = function (event) {
//     if (event.target.classList.contains('to-do-checkbox')) {

//         tasks[event.target.dataset.id].done = true;
//         console.log(tasks[event.target.dataset.id].done);
//     }

// }