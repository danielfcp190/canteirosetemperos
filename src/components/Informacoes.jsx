import React from 'react'
import './Informacoes.css'
import ImagemContato from './images/image-contato.png'

export default function Informacoes() {
    return (
        <>
            <div id="informacoes" class="informacoes-container row">
                <div class="informacoes col-md-6 col-xs-12">
                    <h1>Informações:</h1>
                    <h2><span class="material-icons">
                        filter_vintage
                    </span> Horário de Funcionamento:</h2>
                    <p>Terça a Domingo | 18h às 22h30<br />
                    Não abrimos no último domingo de cada mês.</p>
                    <h2><span class="material-icons">
                        filter_vintage
                    </span> Delivery e Retirada:</h2>
                    <p>Whatsapp: (12)3943-5386<br />
                    Ifood</p>
                    <h2><span class="material-icons">
                        filter_vintage
                    </span> Eventos:</h2>
                    <p>Faça o seu evento na Canteiros e Temperos. Um ambiente acolhedor para receber os seus convidados. Entre em contato e solicite o seu orçamento, se preferir venha nos visitar e conversarmos pessoalmente.</p>
                </div>
                <div class="informacoesImagem col-md-6 col-xs-12">
                    <img src={ImagemContato} alt="imagem contato" class="imgInformacoes" />
                </div>
            </div>
        </>
    )
}
