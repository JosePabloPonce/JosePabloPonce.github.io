import React from 'react'
import './acercademi.scss'
import foto from './Imagenes/foto.png'

const AcercaDeMi = () => (
  <div className="contenedorAcercaDeMi" id="acercademi">
    <div className="contenedortituloacercademi">
      <h1>About Me</h1>
    </div>
    <div className="contenedorinformacion">
      <img src={foto} alt="Imagen de perfil" className="estiloimagenperfil" />
      <p className="acercademitexto">
        I am a Computer Science Engineering student interested in specializing in cybersecurity,
        I like learning and working with web development technologies and databases.
        In the same way, I like to always be updated with the latest technologies of the moment.
      </p>
    </div>
  </div>
)
export default AcercaDeMi
