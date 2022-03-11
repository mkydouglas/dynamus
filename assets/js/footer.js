const footer = document.querySelector('#footer');
footer.innerHTML = `
<div class="subirTopo">
<img src="assets/images/seta-para-cima.png" alt="">
</div>
<div class="wppFixed">
<img src="assets/images/whatsapp.svg" alt="">
</div>
<div class="footer__informacoes">
<div class="footer__links">
    <h3 class="footer__subtitulo">Institucional</h3>
    <a class="footer__link" href="quem-somos.html">Sobre a Dynamus</a>
    <a class="footer__link" href="contato.html">Fale Conosco</a>
    <a class="footer__link" href="duvidas-frequentes.html">FAQ</a>
</div>
<div class="contato">
    <p>Av. Faria Pereira, 3356 - São Cristóvão, Patrocínio - MG, 38742-218</p>
    <p>contato@dynamusenergia.com.br</p>
    <p>(34) 3199-0087 - (34) 98833-4687</p>
    <div>
        <a href="https://www.facebook.com/dynamusenergia" target="_blank">
            <img class="contato__social" src="assets/images/redes-sociais/facebook.png" alt="Ícone do Facebook">
        </a>
        <a href="https://www.instagram.com/dynamusenergia" target="_blank">
            <img class="contato__social" src="assets/images/redes-sociais/instagram.png" alt="Ícone do Instagram">
        </a>
    </div>
    <span>© 2021 Dynamus Energia Sustentável. Feito por dois malucos</span>
</div>
<img class="footer__logo" src="assets/images/logo-dynamus-branca.png" alt="Dynamus Energia Sustentável">
</div>
`;