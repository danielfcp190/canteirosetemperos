import React from 'react'
import './QuemSomos.css'



export default function QuemSomos() {
    return (
        <div id="quemSomos" className="quemSomos">
            <h1>QUEM SOMOS?</h1>
            <div className="row quemSomos-container">
                <div className="col-md-5 col-xs-12">
                    <iframe className="videoInstitucional" src="https://www.youtube.com/embed/ffcFq1Kf_1s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="col-md-7 col-xs-12">
                    <p className="texto-quemsomos">Chegar a Canteiros e Temperos nem sempre é muito fácil. O local é escondidinho, o caminho é de pedra. Ao chegar aqui nós o convidamos a fazer-de-conta que está no sítio da vovó.<br />
                        <br />
                        Huuum! O aroma do campo, do alecrim, do hortelã... A casinha simples e bem rústica, cheia de aconchego. A comida é caseira feita, especialmente, para você. Tudo fresquinho com ervas colhidas na hora.<br />
                        <br />
                        Nós, da Canteiros e Temperos esperamos que cada um que entrar aqui desperte dentro de si o sítio da vovó e compartilhe conosco as suas melhores sensações, pois para nós, você é o cumpadre ou cumadre que veio nos fazer uma visitinha.
                    </p>
                </div>
            </div>

        </div>
    )
}
