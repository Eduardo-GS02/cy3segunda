import React, { useState } from 'react';
import './Gabriel.css';

function Gabriel() {
  const [grupos, setGrupos] = useState([
    { nome: "Grupo A", times: [{ nome: "México", pontos: 0, forca: 75 }, { nome: "África do Sul", pontos: 0, forca: 68 }, { nome: "Coreia do Sul", pontos: 0, forca: 78 }, { nome: "República Tcheca", pontos: 0, forca: 74 }] },
    { nome: "Grupo B", times: [{ nome: "Canadá", pontos: 0, forca: 73 }, { nome: "Bósnia", pontos: 0, forca: 72 }, { nome: "Catar", pontos: 0, forca: 70 }, { nome: "Suíça", pontos: 0, forca: 82 }] },
    { nome: "Grupo C", times: [{ nome: "Brasil", pontos: 0, forca: 90 }, { nome: "Marrocos", pontos: 0, forca: 79 }, { nome: "Haiti", pontos: 0, forca: 65 }, { nome: "Escócia", pontos: 0, forca: 74 }] },
    { nome: "Grupo D", times: [{ nome: "Estados Unidos", pontos: 0, forca: 80 }, { nome: "Paraguai", pontos: 0, forca: 73 }, { nome: "Austrália", pontos: 0, forca: 76 }, { nome: "Turquia", pontos: 0, forca: 77 }] },
    { nome: "Grupo E", times: [{ nome: "Alemanha", pontos: 0, forca: 88 }, { nome: "Curaçao", pontos: 0, forca: 65 }, { nome: "Costa do Marfim", pontos: 0, forca: 78 }, { nome: "Equador", pontos: 0, forca: 79 }] },
    { nome: "Grupo F", times: [{ nome: "Holanda", pontos: 0, forca: 87 }, { nome: "Japão", pontos: 0, forca: 81 }, { nome: "Suécia", pontos: 0, forca: 82 }, { nome: "Tunísia", pontos: 0, forca: 74 }] },
    { nome: "Grupo G", times: [{ nome: "Bélgica", pontos: 0, forca: 86 }, { nome: "Egito", pontos: 0, forca: 78 }, { nome: "Irã", pontos: 0, forca: 77 }, { nome: "Nova Zelândia", pontos: 0, forca: 70 }] },
    { nome: "Grupo H", times: [{ nome: "Espanha", pontos: 0, forca: 88 }, { nome: "Cabo Verde", pontos: 0, forca: 68 }, { nome: "Arábia Saudita", pontos: 0, forca: 72 }, { nome: "Uruguai", pontos: 0, forca: 84 }] },
    { nome: "Grupo I", times: [{ nome: "França", pontos: 0, forca: 89 }, { nome: "Senegal", pontos: 0, forca: 81 }, { nome: "Iraque", pontos: 0, forca: 69 }, { nome: "Noruega", pontos: 0, forca: 83 }] },
    { nome: "Grupo J", times: [{ nome: "Argentina", pontos: 0, forca: 88 }, { nome: "Argélia", pontos: 0, forca: 77 }, { nome: "Áustria", pontos: 0, forca: 80 }, { nome: "Jordânia", pontos: 0, forca: 66 }] },
    { nome: "Grupo K", times: [{ nome: "Portugal", pontos: 0, forca: 89 }, { nome: "RD Congo", pontos: 0, forca: 73 }, { nome: "Uzbequistão", pontos: 0, forca: 70 }, { nome: "Colômbia", pontos: 0, forca: 83 }] },
    { nome: "Grupo L", times: [{ nome: "Inglaterra", pontos: 0, forca: 88 }, { nome: "Croácia", pontos: 0, forca: 84 }, { nome: "Gana", pontos: 0, forca: 75 }, { nome: "Panamá", pontos: 0, forca: 69 }] },
  ]);

  const simular = (A, B) => {
    const diff = A.forca - B.forca + (Math.random() * 10 - 5);
    if (Math.abs(diff) < 3) return "EMPATE";
    return diff > 0 ? "A" : "B";
  };

  const gerarJogos = (times) => {
    const jogos = [];
    for (let i = 0; i < times.length; i++) {
      for (let j = i + 1; j < times.length; j++) {
        jogos.push([times[i].nome, times[j].nome]);
      }
    }
    return jogos;
  };

  const simularGrupos = () => {
    const copia = grupos.map(g => ({
      ...g,
      times: g.times.map(t => ({ ...t, pontos: 0 }))
    }));

    copia.forEach((g) => {
      const jogos = gerarJogos(g.times);
      jogos.forEach(([a, b]) => {
        const A = g.times.find(t => t.nome === a);
        const B = g.times.find(t => t.nome === b);
        const res = simular(A, B);
        if (res === "A") A.pontos += 3;
        if (res === "B") B.pontos += 3;
        if (res === "EMPATE") { A.pontos += 1; B.pontos += 1; }
      });
    });
    setGrupos(copia);
    return copia;
  };

  const getClassificados = (copiaGrupos) => {
    let todos = [];
    copiaGrupos.forEach(g => {
      const ordenado = [...g.times].sort((a, b) => b.pontos - a.pontos);
      todos.push(ordenado[0], ordenado[1], ordenado[2]);
    });
    return todos.sort((a, b) => b.pontos - a.pontos).slice(0, 32);
  };

  const mataMata = (times) => {
    let fase = [...times];
    while (fase.length > 1) {
      let prox = [];
      for (let i = 0; i < fase.length; i += 2) {
        const A = fase[i];
        const B = fase[i + 1] || fase[i]; // Proteção se for ímpar
        const res = simular(A, B);
        prox.push(res === "A" ? A : B);
      }
      fase = prox;
    }
    alert("🏆 CAMPEÃO DA COPA 2026: " + fase[0].nome);
  };

  const simularTudo = () => {
    const gruposAtualizados = simularGrupos();
    setTimeout(() => {
      const classificados = getClassificados(gruposAtualizados);
      mataMata(classificados);
    }, 500);
  };

  const reset = () => {
    setGrupos(grupos.map(g => ({
      ...g,
      times: g.times.map(t => ({ ...t, pontos: 0 }))
    })));
  };

  return (
    <div className="gabriel-container">
      <h1>🏆 Copa do Mundo 2026 - Simulador Oficial</h1>
      <div className="controles">
        <button onClick={simularTudo}>⚽ Simular Copa Completa</button>
        <button onClick={reset} className="btn-reset">🔄 Reset</button>
      </div>
      <div className="grupos">
        {grupos.map((g, i) => {
          const ordenado = [...g.times].sort((a, b) => b.pontos - a.pontos);
          return (
            <div className="card" key={i}>
              <h2>{g.nome}</h2>
              <table>
                <thead>
                  <tr><th>Pos</th><th>Time</th><th>Pts</th></tr>
                </thead>
                <tbody>
                  {ordenado.map((t, idx) => (
                    <tr key={t.nome}>
                      <td>{idx + 1}</td>
                      <td>{t.nome}</td>
                      <td>{t.pontos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gabriel;