document.addEventListener('DOMContentLoaded', () => {
    const produtorForm = document.getElementById('produtor-form');
    const produtoForm = document.getElementById('produto-form');
    const oportunidadeForm = document.getElementById('oportunidade-form');

    const produtoresLista = document.getElementById('produtores-lista');
    const produtosLista = document.getElementById('produtos-lista');
    const oportunidadesLista = document.getElementById('oportunidades-lista');

    let produtores = [];
    let produtos = [];
    let oportunidades = [];

    produtorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = e.target.nome.value;
        const localizacao = e.target.localizacao.value;
        const contato = e.target.contato.value;
        const id = produtores.length + 1;

        produtores.push({ id, nome, localizacao, contato });
        listarProdutores();
        e.target.reset();
    });

    produtoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = e.target['nome-produto'].value;
        const preco = e.target.preco.value;
        const produtorId = e.target['produtor-id'].value;
        const imagem = e.target['imagem-produto'].value;

        if (!produtores.some(produtor => produtor.id == produtorId)) {
            alert('Produtor ID inválido.');
            return;
        }

        const id = produtos.length + 1;
        produtos.push({ id, nome, preco, produtorId, imagem });
        listarProdutos();
        e.target.reset();
    });

    oportunidadeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const descricao = e.target.descricao.value;
        const data = e.target.data.value;
        const produtoId = e.target['produto-id'].value;

        if (!produtos.some(produto => produto.id == produtoId)) {
            alert('Produto ID inválido.');
            return;
        }

        const id = oportunidades.length + 1;
        oportunidades.push({ id, descricao, data, produtoId });
        listarOportunidades();
        e.target.reset();
    });

    function listarProdutores() {
        produtoresLista.innerHTML = '';
        produtores.forEach(produtor => {
            const li = document.createElement('li');
            li.textContent = `ID: ${produtor.id}, Nome: ${produtor.nome}, Localização: ${produtor.localizacao}, Contato: ${produtor.contato}`;
            produtoresLista.appendChild(li);
        });
    }

    function listarProdutos() {
        produtosLista.innerHTML = '';
        produtos.forEach(produto => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = produto.imagem;
            img.alt = produto.nome;
            li.appendChild(img);
            li.appendChild(document.createTextNode(`ID: ${produto.id}, Nome: ${produto.nome}, Preço: R$${produto.preco}, Produtor ID: ${produto.produtorId}`));
            produtosLista.appendChild(li);
        });
    }

    function listarOportunidades() {
        oportunidadesLista.innerHTML = '';
        oportunidades.forEach(oportunidade => {
            const li = document.createElement('li');
            li.textContent = `ID: ${oportunidade.id}, Descrição: ${oportunidade.descricao}, Data: ${oportunidade.data}, Produto ID: ${oportunidade.produtoId}`;
            oportunidadesLista.appendChild(li);
        });
    }
});
