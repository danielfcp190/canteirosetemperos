import React from 'react'
import LinkCardapio from './images/link-cardapio.png'
import Salada from './images/salada.JPG'
import CrepeSalgado from './images/crepe1.png'
import CrepeDoce from './images/crepe-doce1.jpg'
import Suco from './images/vermelhas.jpg'
import Sobremesa from './images/bolo.jpg'
import Cha from './images/cha-quadrado.jpg'
import Waffle from './images/waffle.jpg'
import Vinho from './images/vinho.jpg'
import Entrada from './images/entradas.jpg'
import './Cardapio.css'


function clique(img) {
    var modalJ = document.getElementById("janelaModal");
    var modalI = document.getElementById("fotoAmpliada");
    var modalB = document.getElementById("btnFechar");

    modalJ.style.display = "block";
    modalI.src = img;
    modalB.onclick = function () {
        modalJ.style.display = "none";
    }

}


export default function Cardapio() {
    return (
        <>
            <div id='cardapio' className="row cardapio-container">
                <div className="col-md-4 col-xs-12">
                    <a href="https://canteirosetemperos.com.br/image/Cardapio.pdf" target="_blank"> <img src={LinkCardapio} alt="link cardápio" className="imgCardapio" /></a>
                    <figcaption className="legendaCardapio">Clique acima e acesse o nosso cardápio.</figcaption>
                </div>
                <div className="col-md-8 col-xs-12">
                    <div className="fotos-container">
                        <img className="grid-item" onClick={() => clique(Entrada)} src={Entrada} alt="foto entrada" />
                        <img className="grid-item" onClick={() => clique(CrepeSalgado)} src={CrepeSalgado} alt="foto crepe salgado" />
                        <img className="grid-item" onClick={() => clique(Salada)} src={Salada} alt="foto salada" />
                        <img className="grid-item" onClick={() => clique(CrepeDoce)} src={CrepeDoce} alt="foto crepe doce" />
                        <img className="grid-item" onClick={() => clique(Waffle)} src={Waffle} alt="foto waffle" />
                        <img className="grid-item" onClick={() => clique(Sobremesa)} src={Sobremesa} alt="foto sobremesa" />
                        <img className="grid-item" onClick={() => clique(Suco)} src={Suco} alt="foto suco" />
                        <img className="grid-item" onClick={() => clique(Cha)} src={Cha} alt="foto chá" />
                        <img className="grid-item" onClick={() => clique(Vinho)} src={Vinho} alt="foto vinho" />
                    </div>
                </div>
            </div>

            <div id="janelaModal">
                <span id="btnFechar">X</span>
                <img id="fotoAmpliada" alt="imagem ampliada" />
            </div>
        </>
    )
}
