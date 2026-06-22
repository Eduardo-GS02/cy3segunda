import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Importando os projetos dos alunos
import Davi from './Davi';
import Gabriel from './Gabriel';
import Rafael from './Rafael';
import Gabrielg from './Gabrielg'; // Referente ao Gabriel Garbin

// ==========================================
// COMPONENTE DA REVISTA
// ==========================================
function Revista() {
  const materias = [
    {
      id: 1,
      tema: "Esportes",
      titulo: "Final da Supercopa 2026",
      subtitulo: "Acompanhe os detalhes e a análise completa do grande jogo que decidiu o título.",
      imagem: "/assets/supercopa.png",
      autor: "Davi",
      data: "01 Jun",
      spanClass: "card-grande",
      linkProjeto: "/davi" 
    },
    {
      id: 2,
      tema: "Games",
      titulo: "Simulador de Copa do Mundo",
      subtitulo: "Monte suas apostas e simule os resultados da competição mais aguardada do planeta.",
      imagem: "/assets/simulador.png",
      autor: "Gabriel",
      data: "28 Mai",
      spanClass: "card-pequeno",
      linkProjeto: "/gabriel" 
    },
    {
      id: 3,
      tema: "Esportes",
      titulo: "O Pacotinho da Copa",
      subtitulo: "Entenda a estratégia e o fenômeno por trás desse movimento entre os torcedores.",
      imagem: "/assets/pactinho.png",
      autor: "Rafael",
      data: "25 Mai",
      spanClass: "card-pequeno",
      linkProjeto: "/rafael" 
    },
    {
      id: 4,
      tema: "Games",
      titulo: "Lançamento GTA VI",
      subtitulo: "Tudo o que sabemos sobre o jogo mais esperado da história até agora.",
      imagem: "/assets/gta6.png",
      autor: "Gabriel Garbin",
      data: "20 Mai",
      spanClass: "card-grande",
      linkProjeto: "/gabrielg" 
    }
  ];

  const abrirProjeto = (link) => {
    if (link && link !== "#") {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="app-container">
      {/* CABEÇALHO */}
      <header className="cabecalho">
        <div className="cabecalho-conteudo">
          <h1 className="logo">Revista Variedades</h1>
          
          <nav className="menu-navegacao">
            <a href="#esportes">Esportes</a>
            <a href="#games">Games</a>
            <a href="#tecnologia">Tecnologia</a>
          </nav>

          <div className="busca-container">
            <input type="text" className="input-busca" placeholder="Buscar matérias..." />
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="conteudo-principal">
        <section className="grid-view">
          
          <div className="editorial-header">
            <h2>Edição Especial</h2>
            <div className="editorial-info">
              <span>Junho 2026</span>
              <div className="ponto-separador"></div>
              <span>Volume 42</span>
              <div className="ponto-separador"></div>
              <span>Projetos em Destaque</span>
            </div>
          </div>

          <div className="grid-materias">
            {materias.map((materia) => (
              <div 
                key={materia.id} 
                className={`card-materia ${materia.spanClass}`}
                onClick={() => abrirProjeto(materia.linkProjeto)}
              >
                {/* A div abaixo foi adicionada para o CSS de proporção (aspect-ratio) funcionar */}
                <div className="card-imagem-container">
                  <img src={materia.imagem} alt={materia.titulo} className="card-imagem" />
                </div>
                
                <div className="card-conteudo">
                  <span className="card-tema">{materia.tema}</span>
                  <h3 className="card-titulo">{materia.titulo}</h3>
                  <p className="card-subtitulo">{materia.subtitulo}</p>
                  
                  <div className="card-meta">
                    <span className="card-autor">Por {materia.autor}</span>
                    <span className="card-data">{materia.data}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="rodape">
        <h2 className="logo-rodape">Revista Variedades</h2>
        <p>&copy; 2026 Projetos Acadêmicos. Desenvolvido com dedicação pelos alunos.</p>
      </footer>
    </div>
  );
}

// ==========================================
// APLICATIVO PRINCIPAL (ROTAS)
// ==========================================
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Revista />} />
        <Route path="/davi" element={<Davi />} />
        <Route path="/gabriel" element={<Gabriel />} />
        <Route path="/rafael" element={<Rafael />} />
        <Route path="/gabrielg" element={<Gabrielg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;