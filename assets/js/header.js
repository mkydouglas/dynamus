var header = document.querySelector('#header');
header.innerHTML = `
    <a href="index.html" id="logo-mobile-vermelho" class="img-menu-mobile">
        <img src="assets/images/vermelho.png" alt="Dynamus Energia" class="mobile__menu-img">
    </a>

    <a href="index.html" id="logo-mobile-amarela" class="img-menu-mobile">
        <img src="assets/images/amarela.png" alt="Dynamus Energia" class="mobile__menu-img">
    </a>

    <div class="menu-toggle">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
    </div>

    <nav class="barra-nav">

        <ul class="menu-itens">
            <li><a class="menu-item" href="vantagens.html">Vantagens</a></li>
            <li><a class="menu-item" href="projetos.html">Projetos</a></li>
            <li class="logo-vermelha" id="logo-vermelha">
                <a class="menu-item" href="index.html">
                    <img src="assets/images/vermelho.png" alt="Dynamus Energia" class="menu-img">
                </a>
            </li>
            <li class="logo-amarela" id="logo-amarela">
                <a class="menu-item" href="index.html">
                    <img src="assets/images/amarela.png" alt="Dynamus Energia" class="menu-img">
                </a>
            </li>
            <li><a class="menu-item" href="contato.html">Contato</a></li>
            <li><a class="menu-item" href="quem-somos.html">Quem Somos</a></li>
            <!-- <li class="redes-sociais-mobile">
                <a href=""><img src="assets/images/redes-sociais/facebook.png" alt="Nosso Facebook"></a>
                <a href=""><img src="assets/images/redes-sociais/instagram.png" alt="Nosso Instagram"></a>
            </li> -->
        </ul>
    </nav>
`;