import React from "react";
import logo from "./assets/js-logo-xs.png"; // ajuste o caminho de acordo com sua estrutura


const content = [
  [
    "React é extremamente popular",
    "Facilita a criação de interfaces de usuário complexas e interativas",
    "É poderoso e flexível",
    "Possui um ecossistema muito ativo e versátil"
  ],
  [
    "Componentes, JSX e Props",
    "Estado",
    "Hooks (ex.: useEffect())",
    "Renderização dinâmica"
  ],
  [
    "Página oficial (react.dev)",
    "Next.js (Framework Fullstack)",
    "React Native (construa aplicativos móveis nativos com React)"
  ]
];

export default function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  function handleTabClick(index) {
    setActiveIndex(index);
  }

  return (
    <div className="container">
      <header>
      <img src={logo} alt="JavaScript logo" />
        <div>
          <h1>React com Vite</h1>
          <p>Interface com Componentes React</p>
        </div>
      </header>
      <div id="tabs">
        <menu>
          <button
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => handleTabClick(0)}
          >
            Por que Utiliza o React?
          </button>
          <button
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            Principais Recursos
          </button>
          <button
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            Recursos Relacionados
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeIndex].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
