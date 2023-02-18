import listaLivros from "./listaLivros.json";


function BotaoIncluir() {
    let id = document.getElementById("id").value
    let titulo = document.getElementById("titulo").value;
    let resumo = document.getElementById("resumo").value;
    let editora = document.getElementById("editora").value;
    let autor = document.getElementById("autor").value;

    listaLivros.livros.push({ id, titulo, resumo, editora, autor });
    // fs.writeFile('listaLivros.json', JSON.stringify(listaLivros))

    console.log(listaLivros.livros);
}

export default BotaoIncluir;