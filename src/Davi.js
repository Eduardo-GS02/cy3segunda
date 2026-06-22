import React from 'react';
import './Davi.css';

function Davi() {
  return (
    <div className="davi-container">
      {/* Cabeçalho */}
      <header className="header">
        <h1>FINAL DA SUPERCOPA REI 2026</h1>
        <h2>Sport Club Corinthians Paulista se sagra campeão da Supercopa Rei 2026</h2>
      </header>

      {/* Conteúdo Principal */}
      <main className="content">
        <article className="noticia">
          <img
            src="/assets/Supercopa_2026.png"
            alt="Troféu da Supercopa Rei 2026"
            className="imagem"
          />
          <p>
            O Sport Club Corinthians Paulista conquistou o bicampeonato da Supercopa Rei Superbet 2026 após vencer o Flamengo pelo placar de 2 a 0. O confronto, realizado no dia 1º de fevereiro na Arena BRB Mané Garrincha, marcou a abertura oficial do calendário de competições nacionais.
          </p>
          <p>
            O zagueiro Gabriel Paulista abriu o marcador aos 25 minutos do primeiro tempo. Com a expulsão do meio-campista Jorge Carrascal (Flamengo), o clube paulista controlou o ritmo e selou o resultado nos acréscimos com Yuri Alberto.
          </p>
          <p>
            O evento registrou o recorde histórico de 71.244 torcedores. O Corinthians arrecadou <span className="destaque">R$ 11,35 milhões</span> e mais um bônus extra de <span className="destaque">US$ 1 milhão</span>.
          </p>
        </article>

        {/* Galeria */}
        <div className="galeria">
          <img src="/assets/cori.png" alt="Torcida Corinthians" className="fotoCanto" />
          <img src="/assets/fla.png" alt="Jogadores Flamengo" className="fotoCanto" />
        </div>

        {/* Ficha Técnica */}
        <section className="informacoes">
          <h3>Detalhes da Partida</h3>
          <ul>
            <li><strong>Data:</strong> 1º de fevereiro de 2026</li>
            <li><strong>Local:</strong> Arena BRB Mané Garrincha</li>
            <li><strong>Público:</strong> 71.244 presentes</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Davi;