let menu = document.getElementById('menu-icon');
let navlist = document.querySelector('.navlist');
let scrolldown = document.getElementById('i-id')



menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

scrolldown.onclick = () =>{
    scrolldown.classList.toggle('openscroll-down')
}