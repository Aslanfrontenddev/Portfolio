
const burger = document.querySelector('.burger__btn');
const menu = document.querySelector('.navbar');
const body = document.querySelector('body');
const links = document.querySelectorAll('.link');

burger.addEventListener('click', responsive);

function responsive (e) {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('block')
};

links.forEach(function(link) {
    link.addEventListener('click', responsive);
});

responsive(e);