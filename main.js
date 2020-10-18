const menucito = document.querySelector('#menu-icon');
const menu = document.querySelector('.navigation');

console.log(menucito)
console.log(menu)

menucito.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
})
window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')&& e.target != menu && e.target !=menucito){
        menu.classList.toggle("spread");
    }
})