import React from 'react'; 
import './menuNav.css';

const opcoesTexto = ['Meus Exames', 'Minhas Consultas', 'Resultados'];

function MenuNavegacao() {
  return (
    <div className='menu_nav'>
      <ul className='opcoes'>
        { // Abrir as chaves para inserir JavaScript, nesse script vou criar um loop para exibir os textos que preciso de forma automática
          opcoesTexto.map((texto, index) => (
            <li className='opcaoItem' key={index}><a className='opcaoLink' href="#">{texto}</a></li>
          ))
        }
      </ul>
    </div>
  );
}

export default MenuNavegacao;
