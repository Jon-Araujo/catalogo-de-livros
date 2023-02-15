import listaLivros from "./listaLivros.json"

function BotaoExcluir() {
    for (let i = 0; i < listaLivros.livros.length; i++) {
        let linhaLivro = document.getElementById(`${listaLivros.livros[i].id}`);
        let botao = document.getElementById(`botao${i}`);
        botao.addEventListener("click", () => {
            linhaLivro.remove();
        })
    }
}

export default BotaoExcluir;
