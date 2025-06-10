/*
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
*/

// Inicializa os dados padrão no localStorage, caso ainda não existam
function inicializarDadosPadrao() {
    // Tipos de sabores (categorias)
    if (!localStorage.getItem("tiposSabores")) {
        const tiposSaboresPadrao = [
            { 
                id: 1, 
                nome: "Frutos do Cerrado" 
            },
            { 
                id: 2, 
                nome: "Artificiais" 
            }
        ];
        localStorage.setItem("tiposSabores", JSON.stringify(tiposSaboresPadrao));
    }
    // Nomes dos sabores (apenas nome e id)
    if (!localStorage.getItem("nomesSabores")) {
        const nomesSaboresPadrao = [
            { 
                id: 1, 
                nome: "Cajá" 
            },
            { 
                id: 2, 
                nome: "Murici" 
            },
            { 
                id: 3, 
                nome: "Caju" 
            },
            { 
                id: 4, 
                nome: "Bacaba" 
            },
            { 
                id: 5, 
                nome: "Buriti" 
            },
            { 
                id: 6, 
                nome: "Leite Condensado" 
            },
            { 
                id: 7, 
                nome: "Brigadeiro" 
            },
            { 
                id: 8, 
                nome: "Nutella" 
            },
            { 
                id: 9, 
                nome: "Ninho com Nutella" 
            },
            { 
                id: 10, 
                nome: "Chocomenta"
            }
        ];
        localStorage.setItem("nomesSabores", JSON.stringify(nomesSaboresPadrao));
    }
    // Produtos, cada um com saborId e tipoId
    if (!localStorage.getItem("listaProdutos")) {
        const listaProdutosPadrao = [
            { 
                saborId: 1, 
                tipoId: 1, 
                preco: 5, 
                img: "caja_150.jpg", 
                promocao: true 
            },
            { 
                saborId: 2, 
                tipoId: 1, 
                preco: 5, 
                img: "murici_150.jpg", 
                promocao: true 
            },
            { 
                saborId: 8, 
                tipoId: 2, 
                preco: 12,
                img: "nutella_150.png", 
                promocao: true 
            },
            { 
                saborId: 7, 
                tipoId: 2, 
                preco: 12,
                img: "brigadeiro_150.png", 
                promocao: true 
            },
            { 
                saborId: 1, 
                tipoId: 1, 
                preco: 8, 
                img: "caja_150.jpg" 
            },
            { 
                saborId: 2, 
                tipoId: 1, 
                preco: 8, 
                img: "murici_150.jpg" 
            },
            { 
                saborId: 3, 
                tipoId: 1, 
                preco: 8, 
                img: "caju_150.png" 
            },
            { 
                saborId: 4, 
                tipoId: 1, 
                preco: 8, 
                img: "bacaba_150.jpg" 
            },
            { 
                saborId: 5, 
                tipoId: 1, 
                preco: 8, 
                img: "buriti_150.jpg" 
            },
            { 
                saborId: 7, 
                tipoId: 2, 
                preco: 15,
                 img: "brigadeiro_150.png" 
                },
            { 
                saborId: 8, 
                tipoId: 2, 
                preco: 15,
                 img: "nutella_150.png" 
                },
            { 
                saborId: 6, 
                tipoId: 2, 
                preco: 15,
                img: "leite-condensado_150.png" 
            },
            { 
                saborId: 10,
                tipoId: 2,
                preco: 15,
                img: "chocomenta_150.png" 
            },
            { 
                saborId: 9, 
                tipoId: 2, 
                preco: 15,
                img: "ninho-nutella_150.jpg" 
            }
        ];
        localStorage.setItem("listaProdutos", JSON.stringify(listaProdutosPadrao));
    }
}

// Função utilitária para recuperar dados do localStorage
function obterDoStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
}

// Busca um tipo pelo id
function buscarTipoPorId(tipos, id) {
    return tipos.find(tipo => tipo.id === id);
}

// Busca um sabor pelo id
function buscarSaborPorId(sabores, id) {
    return sabores.find(sabor => sabor.id === id);
}

/**
 * Renderiza o menu lateral de sabores, agrupando por tipo.
 * Mostra apenas sabores que existem em produtos.
 */
function renderizarMenuSabores() {
    const tiposSabores = obterDoStorage("tiposSabores");
    const nomesSabores = obterDoStorage("nomesSabores");
    const listaProdutos = obterDoStorage("listaProdutos");
    let htmlMenu = `<h2>Sabores</h2>`;
    // Para cada tipo de sabor (categoria)
    for (const tipo of tiposSabores) {
        htmlMenu += `<h4>${tipo.nome}</h4><ul>`;
        // Cria um Set para evitar repetição de sabores
        const idsListados = new Set();
        // Filtra produtos desse tipo
        for (const produto of listaProdutos.filter(p => p.tipoId === tipo.id)) {
            const sabor = buscarSaborPorId(nomesSabores, produto.saborId);
            if (sabor && !idsListados.has(sabor.id)) {
                htmlMenu += `<li data-id="${sabor.id}">${sabor.nome}</li>`;
                idsListados.add(sabor.id);
            }
        }
        htmlMenu += `</ul>`;
    }
    document.querySelector("aside").innerHTML = htmlMenu;
}

/**
 * Gera o HTML dos cards de produtos a partir de uma lista.
 * @param {Array} listaProdutos - Array de objetos produto.
 * @returns {string} HTML dos cards de produtos.
 */
function gerarCardsProdutos(listaProdutos) {
    const nomesSabores = obterDoStorage("nomesSabores");
    const tiposSabores = obterDoStorage("tiposSabores");
    let htmlProdutos = "";
    // Para cada produto, busca o sabor e o tipo pelo id
    for (const produto of listaProdutos) {
        const sabor = nomesSabores.find(s => s.id === produto.saborId);
        const tipo = tiposSabores.find(t => t.id === produto.tipoId);
        if (sabor && tipo) {
            htmlProdutos += `
                <div class="produto" data-id="${produto.saborId}">
                    <img src="imagens/${produto.img}" alt="Picolé de ${sabor.nome}">
                    <p class="label">${tipo.nome}</p>
                    <h3>${sabor.nome}</h3>
                    <p class="price">R$ ${produto.preco},00</p>
                </div>
            `;
        }
    }
    return htmlProdutos;
}

/**
 * Renderiza o conteúdo principal da página, incluindo promoções e produtos.
 * Separa produtos em promoção e produtos comuns.
 */
function renderizarConteudoPrincipal() {
    const listaProdutos = obterDoStorage("listaProdutos");
    // Separa produtos em promoção e produtos comuns
    const produtosPromocao = listaProdutos.filter(produto => produto.promocao);
    const produtosComuns = listaProdutos.filter(produto => !produto.promocao);

    document.querySelector("main").innerHTML = `
        <div class="container">
            <div id="promocoes">
                <div class="titulo">Promoções</div>
                <div class="produtos">
                    ${gerarCardsProdutos(produtosPromocao)}
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
                    ${gerarCardsProdutos(produtosComuns)}
                </div>
            </div>
        </div>
    `;
}

/**
 * Renderiza o layout principal da página (header, main, aside, footer).
 * Após criar o layout, chama as funções para renderizar o menu e o conteúdo.
 */
function renderizarLayout() {
    let corpo = document.getElementById("corpo");
    corpo.innerHTML = `
        <header>
            <h1>Picolé & Cia</h1>
            <nav>
                <ul>
                    <li>Sobre Nós</li>
                    <li>Fale Conosco</li>
                </ul>
            </nav>
        </header>
        <div id="pagina">
            <main></main>
            <aside></aside>
        </div>
        <footer>
            <p>&copy; Picolé & Cia - Todos os direitos reservados.</p>
            <address>
                <p>Avenida Teotônio Segurado, Nº 125, Centro</p>
                <p>CEP 77000-000</p>
                <p>Palmas, Tocantins</p>
            </address>
        </footer>
    `;
    // Agora que o layout existe, renderize os conteúdos dinâmicos:
    renderizarMenuSabores();
    renderizarConteudoPrincipal();
}

/**
 * Função principal: inicializa dados e renderiza conteúdo.
 * Deve ser chamada no onload do body.
 */
function carregar() {
    inicializarDadosPadrao();
    renderizarLayout();
}