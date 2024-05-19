var nav = document.getElementById('main-nav');
window.addEventListener('scroll',()=>{
    if(window.scrollY >= 800){
        nav.classList.add('nav-scroll');
        nav.classList.add('fixed-top');
        nav.classList.remove('pt-4');
    }
    else{
        nav.classList.remove('nav-scroll');
        nav.classList.remove('fixed-top');
        nav.classList.add('pt-4');
    }
});