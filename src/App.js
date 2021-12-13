import React from 'react'
import Nav from './components/Nav'
import QuemSomos from './components/QuemSomos'
import Informacoes from './components/Informacoes'
import Cardapio from './components/Cardapio'
import Contato from './components/Contato'
import Rodape from './components/Rodape'
import background from "./components/images/reciclato.jpg"
import './components/App.css'

export default function App() {

    return ( <div style = {{ backgroundImage: `url(${background})` }} class = "container-fluid" >
        <Nav />
        <QuemSomos />
        <Informacoes />
        <Cardapio />
        <Contato />
        <Rodape />
        </div>
    )
}