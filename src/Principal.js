import React from 'react';
import ReactDOM from 'react-dom/client';

const divStyle = {
    backgroundColor: 'black',
    color: 'white',
};

const styleButton = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '0.5em',
    borderRadius: '8px'
};

const livros = [];
async function getListaLivros() {
    const listaLivros = await(await fetch("listaLivros.json")).json().livros;
    for (let i in listaLivros) {
        livros.push(listaLivros[i]);
    }
}

function Tabela(props) {
    return (
        <table>
            <tr style={divStyle}>
                <td>Título</td>
                <td>Resumo</td>
                <td>Editora</td>
                <td>Autores</td>
            </tr>
            <tr className="linhaLivro">
                <td><p>{props.titulo}</p><button style={styleButton}>Excluir</button></td>
                <td><p>{props.resumo}</p></td>
                <td><p>{props.editora}</p></td>
                <td><ul>{props.autores}</ul></td>
            </tr>
        </table>
    )
}

function Principal() {
    return (
        <div>
            <Tabela titulo={livros[0].titulo} resumo="eader familiar with Horstmann's original, two-volume 'Core Java' books" editora="Addison Wesley" autores="Cay Horstmann" />
        </div>
    )
}


export default Principal;