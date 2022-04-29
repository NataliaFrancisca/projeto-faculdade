import React from 'react'

import Contato from './components/Contato'
import Configuracao from './components/Configuracao/Configuracao'
import Inicio from './components/Inicio/Inicio'
import Menu from './components/Menu/Menu'
import Resultado from './components/Resultado/Resultado'
import Footer from './components/Footer/Footer'

import "./styles/globalStyle.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <header className='container-header'>
          <Menu />
        </header>

        <main className='container-routes'>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/configuracao" element={<Configuracao />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/resultado" element={<Resultado />} />
          </Routes>   
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
