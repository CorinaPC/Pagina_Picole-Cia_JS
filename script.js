function carregarLayout() {
    let corpo = document.getElementById("corpo");
    console.log(corpo);

    // criar o header
    let header = document.createElement("header");
    corpo.appendChild(header);
    header.innerHTML = `
        <h1>Picolé & Cia</h1>
        <nav>
            <ul>
                <li>Sobre Nós</li>
                <li>Fale Conosco</li>
            </ul>
        </nav>
     `;

    //criar div id="pagina"
    let pagina = document.createElement("div");
    pagina.id = "pagina";
    corpo.appendChild(pagina);

    //criar o main
    let main = document.createElement("main");
    pagina.appendChild(main);

    //criar aside
    let aside = document.createElement("aside");
    pagina.appendChild(aside);

    

    //criar footer
    let footer = document.createElement("footer");
    footer.innerHTML = `
        <p>&copy; Picolé & Cia - Todos os direitos reservados.</p>
        <address>
            <p>Avenida Teotônio Segurado, Nº 125, Centro</p>
            <p>CEP 77000-000</p>
            <p>Palmas, Tocantins</p>
        </address>`;
    corpo.appendChild(footer);

}

function carregarMenu() {
    let menu = document.querySelector("aside");
    menu.innerHTML = `
        <h2>Sabores</h2>
        <h4>Frutos do Cerrado</h4>
        <ul>
            <li>Cajá</li>
            <li>Murici</li>
            <li>Caju</li>
            <li>Bacaba</li>
            <li>Buriti</li>
        </ul>
        <h4>Artificiais</h4>
        <ul>
            <li>Leite Condensado</li>
            <li>Brigadeiro</li>
            <li>Nutella</li>
            <li>Ninho com Nutella</li>
            <li>Chocomenta</li>
        </ul>
    `;
}

function carregarContainer() {
    let conteudo = document.querySelector("main");
    conteudo.innerHTML = `
        <div class="container">
            <div id="promocoes">
                <div class="titulo">Promoções</div>
                <div class="produtos">
                    <div class="produto">
                        <img src="imagens/caja_150.jpg" alt="Picolé de Cajá">
                        <p class="label">Frutos do Cerrado</p>
                        <h3>Cajá</h3>
                        <p class="price">R$ 5,00</p>
                    </div>
                    <div class="produto">
                        <img src="imagens/murici_150.jpg" alt="Picolé de Murici">
                        <p class="label">Frutos do Cerrado</p>
                        <h3>Murici</h3>
                        <p>R$ 5,00</p>
                    </div>
                     <div class="produto">
                        <img src="imagens/nutella_150.png" alt="Picolé de Nutella">
                        <p class="label">Artificiais</p>
                        <h3>Nutella</h3>
                        <p>R$ 12,00</p>
                    </div>
                    <div class="produto">
                        <img src="imagens/brigadeiro_150.png" alt="Picolé de Brigadeiro">
                        <p class="label">Artificiais</p>
                        <h3>Brigadeiro</h3>
                        <p>R$ 12,00</p>
                    </div>
                </div>
            </div>
            <div id="anuncios">
                <h3>Anuncie Aqui</h3>
                <p>Entre em contato conosco para saber mais sobre como anunciar seus produtos aqui.</p>
            </div>
        </div>
        <div class="container">
            <div id="produtos">
                <div class="titulo">Produtos</div>
                <div class="produtos">
                    <div class="produto">
                        <img src="imagens/caja_150.jpg" alt="Picolé de Cajá">
                        <p class="label">Frutos do Cerrado</p>
                        <h3>Cajá</h3>
                        <p>R$ 8,00</p>
                    </div>
                    <div class="produto">
                        <img src="imagens/murici_150.jpg" alt="Picolé de Murici">
                        <p class="label">Frutos do Cerrado</p>
                        <h3>Murici</h3>
                        <p>R$ 8,00</p>
                    </div>
                    <div class="produto">
                        <img src="imagens/caju_150.png" alt="Picolé de Caju">
                        <p class="label">Frutos do Cerrado</p>
                        <h3>Caju</h3>
                        <p>R$ 8,00</p>
                    </div>
                    <div class="produto">
                        <img src="imagens/bacaba_150.jpg" alt="Picolé de Bacaba">
                        <p class="label">Frutos do Cerrado</p>
                        <h3>Bacaba</h3>
                        <p>R$ 8,00</p>
                    </div>
                    <div class="produto">
                        <img src="imagens/buriti_150.jpg" alt="Picolé de Buriti">
                        <p class="label">Frutos do Cerrado</p>
                        <h3>Buriti</h3>
                        <p>R$ 8,00</p>
                    </div>
                    <div class="produto">
                        <img src="imagens/brigadeiro_150.png" alt="Picolé de Brigadeiro">
                        <p class="label">Artificiais</p>
                        <h3>Brigadeiro</h3>
                        <p>R$ 15,00</p>
                    </div>
                    <div class="produto">
                        <img src="imagens/nutella_150.png" alt="Picolé de Nutella">
                        <p class="label">Artificiais</p>
                        <h3>Nutella</h3>
                        <p>R$ 15,00</p>
                    </div>
                    <div class="produto">
                        <img src="imagens/leite-condensado_150.png" alt="Picolé de Leite Condensado">
                        <p class="label">Artificiais</p>
                        <h3>Leite Condensado</h3>
                        <p>R$ 15,00</p>
                    </div>
                    <div class="produto">
                        <img src="imagens/chocomenta_150.png" alt="Picolé de Chocomenta">
                        <p class="label">Artificiais</p>
                        <h3>Chocomenta</h3>
                        <p>R$ 15,00</p>
                    </div>
                    <div class="produto">
                        <img src="imagens/ninho-nutella_150.jpg" alt="Picolé de Ninho com Nutella">
                        <p class="label">Artificiais</p>
                        <h3>Ninho com Nutella</h3>
                        <p>R$ 15,00</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function carregar() {

    carregarLayout();
    carregarMenu();
    carregarContainer();
}