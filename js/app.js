let totalGeral;
limpar();

function adicionar() {
    
    let produtoInput = document.getElementById('produto');
    let produto = produtoInput.value;
    let nomeProduto = produto.split('-')[0].trim();
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    let quantidadeInput = document.getElementById('quantidade');
    let quantidade = parseInt(quantidadeInput.value);


    if (!produtoInput.classList.contains('produto-input') || isNaN(quantidade) || quantidade <= 0) {
        alert('Verifique se o produto selecionado ou a quantidade selecionada é válida.');
        
        quantidadeInput.value = '';

        return;
    }


    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML += 
        `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`;

        totalGeral += preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`
        
        document.getElementById('quantidade').value = '';
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0.00';  
}