import listaLivros from "./listaLivros.json";

var List = []
function BotaoIncluir() {
    if (localStorage.bookList) {
        List = JSON.parse(localStorage.getItem('bookList'))
    }


    let id = document.getElementById("id").value
    let titulo = document.getElementById("titulo").value;
    let resumo = document.getElementById("resumo").value;
    let editora = document.getElementById("editora").value;
    let autor = document.getElementById("autor").value;

    List.push({ id, titulo, resumo, editora, autor });

    document.getElementById("id").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("resumo").value = "";
    document.getElementById("editora").value = "";
    document.getElementById("autor").value = "";

    localStorage.bookList = JSON.stringify(List);

}


export default BotaoIncluir;