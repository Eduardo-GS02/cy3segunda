import React, { useState } from 'react';
import './Gabrielg.css'; 

function Gabrielg() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gabrielg-container">
      {/* Cabeçalho */}
      <header className='header'>
        <h1 className='h1header'>O QUE ESPERAR DE GTA 6?</h1>
        <p className='pheader'>Explore as funcionalidades e mecânicas já confirmadas do novo capítulo da franquia</p>
      </header>

      {/* Conteúdo Principal */}
      <div className='content'>
        <h2 className='newtopic'> GTA 6 chega com a missão de redefinir os jogos de mundo aberto </h2>
        <p>
          Depois de anos de rumores e expectativas gigantescas, <strong>Grand Theft Auto VI</strong> finalmente 
          foi revelado oficialmente pela Rockstar Games. O novo título promete levar a franquia para um nível 
          completamente diferente de imersão e escala.
        </p>

        <p>
          O game será ambientado em <strong>Leonida</strong>, um estado inspirado na Flórida, com destaque para a nova 
          <strong> Vice City</strong>, agora muito mais viva, moderna e detalhada.
        </p>

        <img className='image1' src="/assets/gta6logo.png" alt="logo do gta 6" />

        <h2 className='newtopic'> Lucia e Jason serão o centro da história </h2>
        <p>
          GTA 6 será protagonizado por <strong>Lucia Caminos</strong> e <strong>Jason Duval</strong>. 
          Pela primeira vez na franquia moderna, a Rockstar coloca uma protagonista feminina no centro da campanha.
        </p>

        <h2 className='newtopic'> O mundo de GTA 6 será mais vivo do que nunca </h2>
        <p>
          Os NPCs reagirão de forma natural, gravando acontecimentos com celulares e publicando vídeos nas redes sociais 
          do próprio jogo, criando uma sensação de cidade realmente viva.
        </p>

        <h2 className='newtopic'> Mecânicas confirmadas </h2>
        <ul className='feature-list'>
          <li>Clima dinâmico com tempestades e mudanças naturais;</li>
          <li>Animais espalhados pelas regiões rurais;</li>
          <li>Redes sociais integradas ao universo do jogo;</li>
          <li>Novos sistemas de assaltos e roubos;</li>
          <li>Gráficos desenvolvidos exclusivamente para a nova geração.</li>
        </ul>

        <h2 className='newtopic'> Galeria de Imagens </h2>
        <div className='screenshot-gallery'>
          {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((letra) => (
            <div key={letra} className='shot' onClick={() => setSelectedImage(`/assets/${letra}.jpg`)}>
              <img src={`/assets/${letra}.jpg`} alt={`GTA 6 screenshot ${letra}`} />
            </div>
          ))}
        </div>

        <p> Veja mais no site da <a href='https://www.rockstargames.com/VI' target='_blank' rel="noreferrer" className='RockstarSite'>Rockstar Games</a></p>
      </div>

      {/* Modal de Imagem Fullscreen */}
      {selectedImage && (
        <div className='fullscreen-overlay' onClick={() => setSelectedImage(null)}>
          <button className='close-btn' onClick={() => setSelectedImage(null)}>×</button>
          <img className='fullscreen-image' src={selectedImage} alt="ampliada" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* Rodapé */}
      <footer className="footer">
        <p>© 2026 - Todos os direitos reservados. </p>
      </footer>
    </div>
  );
}

export default Gabrielg;