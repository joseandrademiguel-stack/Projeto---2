// Seleciona todos os botões da página
const botoes = document.querySelectorAll(".botao-reacao");


// Percorre todos os botões
botoes.forEach(function (botao) {

    // Cada botão começa como "não curtido"
    let curtiu = false;


    // Escuta o clique no botão
    botao.addEventListener("click", botaoClicado);


    // Função executada quando o botão é clicado
    function botaoClicado() {

        // Encontra o número dentro do botão
        const texto = botao.querySelector("span");


        // Se ainda não curtiu
        if (curtiu === false) {

            // Aumenta o contador
            texto.textContent++;

            // Marca como curtido
            curtiu = true;

        }

        // Se já tinha curtido
        else {

            // Diminui o contador
            texto.textContent--;

            // Volta para não curtido
            curtiu = false;

        }

    }

});
