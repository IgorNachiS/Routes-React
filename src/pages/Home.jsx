import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Bem-vindo à Home!</h2>
      <p>Esta é a página inicial do meu site. Aqui você encontrará informações interessantes!</p>
      
      <img 
        src="https://via.placeholder.com/600x300" 
        alt="Exemplo" 
        style={{ width: '100%', borderRadius: '5px', marginBottom: '20px' }} 
      />
      
      <h3>O que você encontrará aqui:</h3>
      <ul>
        <li>Artigos interessantes sobre tecnologia</li>
        <li>Dicas de programação</li>
        <li>Notícias sobre desenvolvimento web</li>
        <li>Contatos para colaborar</li>
      </ul>

      <button onClick={() => alert("Você clicou no botão!")}>Saiba mais</button>
    </div>
  );
};

export default Home;
