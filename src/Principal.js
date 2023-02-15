import React from 'react';
import ReactDOM from 'react-dom/client';
import listaLivros from './listaLivros.json';
import BotaoExcluir from './BotaoExcluir';

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


function Principal() {
    return (
        <table>
            <tr style={divStyle}>
                <td>Título</td>
                <td>Resumo</td>
                <td>Editora</td>
                <td>Autores</td>
            </tr>
            <tr className="linhaLivro">
                <td><p>{listaLivros.livros[0].titulo}</p><button id={listaLivros.livros[0].id} style={styleButton} onClick={BotaoExcluir}>Excluir</button></td>
                <td><p>{listaLivros.livros[0].resumo}</p></td>
                <td><p>{listaLivros.livros[0].editora}</p></td>
                <td><ul>{listaLivros.livros[0].autores}</ul></td>
            </tr>
            <tr className="linhaLivro">
                <td><p>{listaLivros.livros[1].titulo}</p><button style={styleButton}>Excluir</button></td>
                <td><p>{listaLivros.livros[1].resumo}</p></td>
                <td><p>{listaLivros.livros[1].editora}</p></td>
                <td><ul>{listaLivros.livros[1].autores}</ul></td>
            </tr>
            <tr className="linhaLivro">
                <td><p>{listaLivros.livros[2].titulo}</p><button style={styleButton}>Excluir</button></td>
                <td><p>{listaLivros.livros[2].resumo}</p></td>
                <td><p>{listaLivros.livros[2].editora}</p></td>
                <td><ul>{listaLivros.livros[2].autores}</ul></td>
            </tr>
        </table>
    )
}


//função não usada ainda mas servirá para deixar a lista dinâmica
function Auxiliar() {
    let i = 0;
    while (i < listaLivros.livros.length){
        return (
        <tr className="linhaLivro">
            <td><p>{listaLivros.livros[i].titulo}</p><button style={styleButton} onClick={BotaoExcluir}>Excluir</button></td>
            <td><p>{listaLivros.livros[i].resumo}</p></td>
            <td><p>{listaLivros.livros[i].editora}</p></td>
            <td><ul>{listaLivros.livros[i].autores}</ul></td>
        </tr>
    )
    }
    
}


export default Principal;