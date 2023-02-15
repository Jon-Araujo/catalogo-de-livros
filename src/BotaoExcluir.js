function BotaoExcluir() {
    const linhaLivro = document.querySelector(".linhaLivro");
    const botao = document.getElementById(1);

    botao.addEventListener("click", () => {
        linhaLivro.remove();
    })
}

export default BotaoExcluir;
