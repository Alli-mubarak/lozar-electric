const menu = document.getElementById("menu");
const nav = document.querySelector("nav");
let isNavOpen = false;
menu.onclick =()=>{
if(!isNavOpen){
    nav.style.height="180px";
    isNavOpen = true;
    menu.innerHTML ="&times;"
    menu.style.fontSize="35px";
}else{
    nav.style.height="0";
    isNavOpen = false;
    menu.innerHTML ="&#9776;";
    menu.style.fontSize="25px";
}
}
function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}