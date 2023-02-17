function Novo() {
    return (
        <form className="formulario">
            <label for="id">Id:</label>
            <input id="id" type="text"></input>

            <label for="titulo">Título:</label>
            <input id="titulo" type="text"></input>

            <label for="resumo">Resmo:</label>
            <input id="resumo" type="text"></input>

            <label for="editora">Editora:</label>
            <input id="editora" type="text"></input>

            <label for="autor">Autor</label>
            <input id="autor" type="text"></input>
        </form>
    )
};

export default Novo;