import listaLivros from "./listaLivros.json";

function BotaoIncluir() {
    const botao = document.getElementById("botao-incluir");
    botao.addEventListener("click", () => {
        let titulo = document.getElementById("titulo").value;
        let resumo = document.getElementById("resumo").value;
        let editora = document.getElementById("editora").value;
        let autor = document.getElementById("autor").value;
        let passaLista = [];

        passaLista.push(titulo, resumo, editora, autor)

        listaLivros.push(passaLista)

    })
}

export default BotaoIncluir;