import React from 'react'
import Foto1 from './images/slideshow/foto1.jpg';
import Foto2 from './images/slideshow/foto2.jpg';
import Foto3 from './images/slideshow/foto3.jpg';
import Foto4 from './images/slideshow/foto4.jpg';
import Foto5 from './images/slideshow/foto5.jpg';
import Foto6 from './images/slideshow/foto6.jpg';
import Foto7 from './images/slideshow/foto7.jpg';
import Foto8 from './images/slideshow/foto8.jpg';
import Foto9 from './images/slideshow/foto9.jpg';
import BgHeader from './images/bg-header.png';
import Logo from './images/logo.png';
import './Nav.css'

function Scroll(link) {
    const scrollContato = document.querySelector(link)
    scrollContato.scrollIntoView({ behavior: 'smooth', block: 'center' })

}

export default function Nav() {
    return (
        <div className="nav-container container-fluid">

            <img src={BgHeader} className="carouselMask" alt="máscara carroussel" />

            <img src={Logo} className="logo" alt="logo Canteiros" />

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div className="overlay" />
                    <div class="carousel-item active">
                        <img src={Foto1} class="d-block w-100 img-responsive" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Foto2} class="d-block w-100 img-responsive" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Foto3} class="d-block w-100 img-responsive" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Foto4} class="d-block w-100 img-responsive" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Foto5} class="d-block w-100 img-responsive" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Foto6} class="d-block w-100 img-responsive" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Foto7} class="d-block w-100 img-responsive" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Foto8} class="d-block w-100 img-responsive" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Foto9} class="d-block w-100 img-responsive" alt="..." />
                    </div>

                </div>
            </div>

            <nav class="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" onClick={() => Scroll('#quemSomos')}>Quem Somos</a>
                    <span>|</span>
                    <a class="navbar-brand" onClick={() => Scroll('#informacoes')}>Informações</a>
                    <span>|</span>
                    <a class="navbar-brand" onClick={() => Scroll('#cardapio')}>Cardápio</a>
                    <span>|</span>
                    <a class="navbar-brand" onClick={() => Scroll('#contato')}>Contato</a>
                </div>
            </nav>

            <div className="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Canteiros e Temperos
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" onClick={() => Scroll('#quemSomos')}>Quem Somos</a></li>
                    <li><a class="dropdown-item" onClick={() => Scroll('#informacoes')}>Informações</a></li>
                    <li><a class="dropdown-item" onClick={() => Scroll('#cardapio')}>Cardápio</a></li>
                    <li><a class="dropdown-item" onClick={() => Scroll('#contato')}>Contato</a></li>
                </ul>
            </div>

        </div>
    )
}

