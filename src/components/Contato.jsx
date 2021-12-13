import React from 'react'
import './Contato.css'
import { useState } from 'react'
import { send } from 'emailjs-com'




export default function Contato() {

    const [toSend, setToSend] = useState({
        fname: '',
        email: '',
        cel: '',
        assunto: '',
        mensagem: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_dtr8g0d',
            'template_v1y958j',
            toSend,
            'user_wgv9r7VkkEifnvehEQCCf'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.id]: e.target.value });
      };

      const msgEnviada = () => {
                
        alert('Mensagem Enviada!');
            
      }


    return (
    
        <div id="contato" className="row contato-container">
            <h1>Contato:</h1>
            <div className="endereco col-md-6 col-xs-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.1032351724316!2d-45.90268638476237!3d-23.202908084861935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a76a29ff9ff%3A0xfe8ded50fafb0ce3!2sCanteiros%20e%20Temperos!5e0!3m2!1spt-BR!2sbr!4v1638821939996!5m2!1spt-BR!2sbr" width="500" height="400" allowFullScreen="" loading="lazy" />
                <p>Rua Madre Paula de São José, 305<br />
                    Vila Ema - São José dos Campos<br />
                    Telefone/ Whatsapp: (12) 3943-5386</p>

            </div>
            <div className="col-md-6 col-xs-12">
                <form className="formulario" onSubmit={onSubmit}>
                    <div className="itensFormulario form-row">
                        <div class="form-group">
                            <label for="fname">Nome:</label><br />
                            <input type="text" class="form-control" id="fname" value={toSend.fname} onChange={handleChange} />
                        </div><br />
                        <div class="form-group">
                            <label for="email">E-mail:</label><br />
                            <input type="text" class="form-control" id="email" value={toSend.email} onChange={handleChange} />
                        </div><br />
                        <div class="form-group">
                            <label for="cel">Telefone/Whatsapp:</label><br />
                            <input type="text" class="form-control" id="cel" value={toSend.cel} onChange={handleChange}/>
                        </div><br />
                        <div class="form-group">
                            <label for="assunto">Assunto:</label><br />
                            <input type="text" class="form-control" id="assunto"  value={toSend.assunto} onChange={handleChange}/><br />
                        </div>
                        <div class="form-group">
                            <textarea id="mensagem" class="form-control" rows="10" cols="30"  placeholder="Escreva sua mensagem aqui" value={toSend.mensagem} onChange={handleChange}/>
                        </div><br />
                        <input type="submit" value="Enviar" class="enviar btn btn-warning btn-lg" onClick={msgEnviada}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

