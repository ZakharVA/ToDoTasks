let menu = document.querySelector(".container__menu");

let selectedItem = menu.children[0];

menu.onclick = function(event) {

    let activeItem = event.target;

    active(activeItem);
};

function active(node) {
    selectedItem.classList.remove('container__item--active');
    selectedItem.classList.add('container__item--no-active');

    selectedItem = node;

    selectedItem.classList.remove('container__item--no-active');
    selectedItem.classList.add('container__item--active');
}
