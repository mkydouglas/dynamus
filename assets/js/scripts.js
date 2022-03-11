var subirTopo = document.querySelector('.subirTopo');
var header = document.querySelector('#header');
const sectionVantagens = document.querySelector('#vantagens');
const seta = document.querySelector('#seta');
var logoMobileVermelho = document.querySelector('#logo-mobile-vermelho');
var logoMobileAmarela = document.querySelector('#logo-mobile-amarela');

if(window.innerWidth <= 768) {
    logoMobileVermelho.classList.toggle('img-menu-mobile');
}

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 400) {
        subirTopo.classList.add('subirTopo__mostrar');
    }else {
        subirTopo.classList.remove('subirTopo__mostrar');
    }

    header.classList.remove('bg-branco', window.scrollY > 0);
    header.classList.toggle('sticky', window.scrollY > 0);

    if(window.innerWidth <= 768) {
        logoMobileAmarela.classList.toggle('sticky-logo', window.scrollY > 0);
        logoMobileVermelho.classList.toggle('img-menu-mobile', window.scrollY > 0);
        menuToggle.classList.toggle('sticky__menu-toggle', window.scrollY > 0);
        
    }
});

subirTopo.addEventListener('click', ()=>{
    scrollTo({ top: 0, behavior: 'smooth'});
});

if(sectionVantagens){
    const val = sectionVantagens.getBoundingClientRect()['y'] + window.scrollY - 120;
    seta.addEventListener('click', () => {
        scroll(0, val);
    });
}

