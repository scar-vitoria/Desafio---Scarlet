class CaixaDaLanchonete {

    constructor() {
        this.cardapio = [
            { cod: 'cafe', descricao: 'Café', valor: 3.00 },
            { cod: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
            { cod: 'suco', descricao: 'Suco Natural', valor: 6.20 },
            { cod: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
            { cod: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
            { cod: 'salgado', descricao: 'Salgado', valor: 7.25 },
            { cod: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
            { cod: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
        ];
    }

    calcularValorDaCompra(formaDePagamento, itens) {

        if (!['debito', 'credito', 'dinheiro'].includes(formaDePagamento)) {
            return "Forma de pagamento inválida!";
        }
        if (itens.length == 0) {
            return "Não há itens no carrinho de compra!";
        }

        let total = 0;

        const parametros = [];
       
        for (const itemInfo of itens) {
            const [cod, quantidade] = itemInfo.split(',');

           
            const item = this.cardapio.find(item => item.cod == cod);
            if (!item) {
                return "Item inválido!";
            }

            if (parseInt(quantidade) === 0) {
                return "Quantidade inválida!";
            }

            if(cod == 'cafe')
                parametros.push('cafe')
            if(cod == 'sanduiche')
                parametros.push('sanduiche')
            
            if(cod === 'chantily' && parametros.includes('cafe')) 
                console.log('Passou por aqui sim')
            else if (cod === 'chantily' && !parametros.includes('cafe'))
                return "Item extra não pode ser pedido sem o principal";
            
            if(cod === 'queijo' && parametros.includes('sanduiche'))
                console.log('Passou por aqui sim')
            else if (cod === 'queijo' && !parametros.includes('queijo'))
                return "Item extra não pode ser pedido sem o principal";
            
            total += item.valor * parseInt(quantidade);
        }

        if (formaDePagamento == 'dinheiro') {
            total *= 0.95;
        } else if (formaDePagamento == 'credito') {
            total *= 1.03; 
        } else if (formaDePagamento == 'debito') {
            total = total;
        }

        const resultado = `R$ ${total.toFixed(2).replace('.', ',')}`;
        return resultado;
        
    }
}

export { CaixaDaLanchonete };
