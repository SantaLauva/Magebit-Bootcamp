function openMenu(event) {
    const element = event.target.parentElement.childNodes[2];
    element.classList.toggle('hidden');
    element.classList.toggle('bounce');
    setTimeout(function () {
        element.classList.toggle('bounce');
    }, 455);
    

}