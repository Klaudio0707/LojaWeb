import React, { useEffect, useState } from "react";
import "./App.css";

// 'https://sujeitoprogramador.com/rn-api/?api=posts'

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let REACT_API_BACKEND =
        "https://sujeitoprogramador.com/rn-api/?api=posts";
      fetch(REACT_API_BACKEND)
        .then((result) => result.json())
        .then((json) => {
          console.log(json);
          setNutri(json);
        });
    }
    loadApi();
  }, []);
  return (
    <div className="container">
      <header>
        <strong>Loja Web</strong>
        </header>
        {/* utilização do map para pecorrer todo o array */}
        {nutri.map((item) => {
          return (
            <article key={item.id} className="post">
              <strong className="titulo">
                {item.titulo}
                </strong>
              <img src={item.capa}
               alt={item.titulo}
                />
              <p className="subtitulo">
                {item.subtitulo}
              </p>
              <h1>Categoria: {item.categoria}</h1>
              <a className="botao" href="a">Acessar</a>
            </article>
          );
        })}
    </div>
  );
}

export default App;
