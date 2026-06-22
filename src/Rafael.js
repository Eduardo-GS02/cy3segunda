import React from "react";
import "./Rafael.css";

function Rafael() {
  const produtos = [
    {
      id: 1,
      nome: "Pacotinho com 5 Figurinhas",
      preco: "R$ 5,00",
      imagem: "/assets/pacotinho1.png", // Imagem arrumada (coloque o arquivo na pasta public/assets)
    },
    {
      id: 2,
      nome: "Pacotinho MC",
      preco: "R$ 25,00",
      imagem: "/assets/pacotinho2.png", // Imagem arrumada (coloque o arquivo na pasta public/assets)
    },
    {
      id: 3,
      nome: "Álbum da Copa",
      preco: "R$ 49,90",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqQt7ty9vSz0N3rB66BNIbHwg-c57qNRBcvX-hnnwoA&s",
    },
    {
      id: 4,
      nome: "Álbum da Copa capa mole",
      preco: "R$ 49,90",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOuG50XSm5rV2LRBXtO8nZSsCbmnWNFzBbw6fgyrmoaQ&s"
    },
  ];

  const comprar = (produto) => {
    alert(`Você adicionou "${produto.nome}" ao carrinho!`);
  };

  return (
    <>
      {/* Cabeçalho */}
      <header className="header">
        <h1>Loja do Rafael</h1>
      </header>

      {/* Container Principal */}
      <div className="container">
        <div className="products">
          {produtos.map((produto) => (
            <div className="card" key={produto.id}>
              {/* Imagem do Produto */}
              {produto.imagem && (
                <img src={produto.imagem} alt={`Imagem de ${produto.nome}`} />
              )}
              
              {/* Informações do Produto */}
              <div className="card-content">
                <h2>{produto.nome}</h2>
                <p className="price">{produto.preco}</p>
                <button 
                  className="buy-btn" 
                  onClick={() => comprar(produto)}
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rodapé */}
      <footer className="footer">
        <p>&copy; 2026 Loja do Rafael. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default Rafael;