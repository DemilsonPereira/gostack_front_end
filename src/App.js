import React, { useState } from "react";
import api from './services/api.js'

import './App.css';

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "Front-end web",
  ]);

  // useState retorna um array com 2 posições
  //
  // 1. Variável com o seu valor inicial ["Desenvolvimento de app", "Front-end web"]
  // 2. Função para atualizarmos esse valor

  function handleAddProject() {
    //   projects.push(`Novo projeto ${Date.now()}`);

    // IMUTABILIDADE
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
