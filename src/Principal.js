import React from 'react';
import ReactDOM from 'react-dom/client';
import listaLivros from './listaLivros.json';
import BotaoExcluir from './BotaoExcluir';

const divStyle = {
    backgroundColor: 'black',
    color: 'white'
};

const styleButton = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '0.5em',
    borderRadius: '8px'
};

const styleWidth = {
    minWidth: '100%'
}


function Principal() {
    return (
        <table style={styleWidth}>
            <tr style={divStyle}>
                <td>Título</td>
                <td>Resumo</td>
                <td>Editora</td>
                <td>Autores</td>
            </tr>
            <Auxiliar />
        </table>
    )
}

function Auxiliar() {
    let passaLista = [];
    for (let i = 0; i < listaLivros.livros.length; i++) {
        passaLista.push(
            <tr id={listaLivros.livros[i].id}>
                <td><p className='m-1'>{listaLivros.livros[i].titulo}</p><button id={"botao" + i} className="mb-2" style={styleButton} onClick={BotaoExcluir}>Excluir</button></td>
                <td><p>{listaLivros.livros[i].resumo}</p></td>
                <td><p>{listaLivros.livros[i].editora}</p></td>
                <td><ul><li>{listaLivros.livros[i].autores}</li></ul></td>
            </tr>
        )
    }
    return (
        passaLista
    )

}

export default Principal;
