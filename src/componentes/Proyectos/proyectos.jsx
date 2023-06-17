import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './proyectos.scss'
import Modal from 'react-modal'
import laberinto2 from './Imagenes/laberinto2.png'
import laberinto3 from './Imagenes/laberinto3.png'
import laberinto4 from './Imagenes/laberinto4.png'
import laberinto5 from './Imagenes/laberinto5.png'
import laberinto1 from './Imagenes/laberinto1.png'
import calculadora1 from './Imagenes/calculadora1.png'
import calculadora2 from './Imagenes/calculadora2.png'
import calculadora4 from './Imagenes/calculadora4.png'
import crunchyroll1 from './Imagenes/crunchyroll1.png'
import crunchyroll2 from './Imagenes/crunchyroll2.png'
import crunchyroll3 from './Imagenes/crunchyroll3.png'
import crunchyroll4 from './Imagenes/crunchyroll4.png'
import luna1 from './Imagenes/moonquakechallenge1.png'
import luna2 from './Imagenes/moonquakechallenge2.png'
import luna3 from './Imagenes/moonquakechallenge3.png'
import luna4 from './Imagenes/moonquakechallenge4.png'
import RickandMorty1 from './Imagenes/rickandmorty1.png'
import RickandMorty2 from './Imagenes/rickandmorty2.png'
import RickandMorty3 from './Imagenes/rickandmorty3.png'
import RickandMorty4 from './Imagenes/rickandmorty4.png'

Modal.setAppElement('#root')
const Proyectos = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [modalIsOpen2, setIsOpen2] = React.useState(false)
  const [modalIsOpen3, setIsOpen3] = React.useState(false)
  const [modalIsOpen4, setIsOpen4] = React.useState(false)
  const [modalIsOpen5, setIsOpen5] = React.useState(false)

  return (
    <div className="ContenedorGeneralProyectos" id="proyectos">
      <div className="contenedortituloproyectos">
        <h1> Selected Projects</h1>
      </div>
      <div className="contenedorproyectos">
        <div className="contenedorgeneralfotos">
          <div className="contenedorcalculadora">
            <h2> Calculator</h2>
            <button type="button" className="botonoculto" onClick={() => setIsOpen(true)}> See More </button>
            <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
              <div className="contenedorsliders">
                <div className="contenedorunico">
                  <Carousel>
                    <Carousel.Item>
                      <img src={calculadora1} alt="calculadora" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={calculadora2} alt="calculadora" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={calculadora4} alt="calculadora" className="imagenenslider" />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className="contenedorcontenidomodal">
                <h2>
                  Calculator
                </h2>
                <h3> ESlint / React / Babel / Jest</h3>
                <p>
                  Project in which a calculator with a limit of numbers
                  on the screen was created, as well as with support for
                  decimal points, divisions, etc.
                </p>
              </div>
              <div className="contenedorcerar"><button type="button" className="botoncerrar" onClick={() => setIsOpen(false)}> &#x2716; </button></div>
            </Modal>
          </div>
        </div>
        <div className="contenedorgeneralfotos">
          <div className="contenedorcrunchyroll">
            <h2> Crunchyroll</h2>
            <button type="button" className="botonoculto" onClick={() => setIsOpen2(true)}> See More </button>
            <Modal className="modal" isOpen={modalIsOpen2} onRequestClose={() => setIsOpen2(false)}>
              <div className="contenedorsliders">
                <div className="contenedorunico">
                  <Carousel>
                    <Carousel.Item>
                      <img src={crunchyroll1} alt="crunchyroll" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={crunchyroll2} alt="crunchyroll" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={crunchyroll3} alt="crunchyroll" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={crunchyroll4} alt="crunchyroll" className="imagenenslider" />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className="contenedorcontenidomodal">
                <h2>
                  Crunchyroll
                </h2>
                <h3> ESlint / React </h3>
                <p>
                  Project in which the Crunchyroll Games page was created from 0,
                  as well as the various interactions offered by the original page.
                </p>
              </div>
              <div className="contenedorcerar"><button type="button" className="botoncerrar" onClick={() => setIsOpen2(false)}> &#x2716; </button></div>
            </Modal>
          </div>
        </div>
        <div className="contenedorgeneralfotos">
          <div className="contenedorlaberinto">
            <h2> Maze</h2>
            <button type="button" className="botonoculto" onClick={() => setIsOpen3(true)}> See More </button>
            <Modal className="modal" isOpen={modalIsOpen3} onRequestClose={() => setIsOpen3(false)}>
              <div className="contenedorsliders">
                <div className="contenedorunico">
                  <Carousel>
                    <Carousel.Item>
                      <img src={laberinto2} alt="laberinto" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={laberinto1} alt="laberinto" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={laberinto4} alt="laberinto" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={laberinto5} alt="laberinto" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={laberinto3} alt="laberinto" className="imagenenslider" />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className="contenedorcontenidomodal">
                <h2>
                  Maze
                </h2>
                <h3> ESlint / React / Babel</h3>
                <p>
                  Project in which a maze was generated depending on the selected level,
                  in addition, at the moment of finishing the maze, the number of steps needed to
                  to complete the level was displayed on the screen
                </p>
              </div>
              <div className="contenedorcerar"><button type="button" className="botoncerrar" onClick={() => setIsOpen3(false)}> &#x2716; </button></div>
            </Modal>
          </div>
        </div>
        <div className="contenedorgeneralfotos">
          <div className="contenedorluna">
            <h2> MoonQuake Map</h2>
            <button type="button" className="botonoculto" onClick={() => setIsOpen4(true)}> See More </button>
            <Modal className="modal" isOpen={modalIsOpen4} onRequestClose={() => setIsOpen4(false)}>
              <div className="contenedorsliders">
                <div className="contenedorunico">
                  <Carousel>
                    <Carousel.Item>
                      <img src={luna1} alt="luna" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={luna2} alt="luna" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={luna3} alt="luna" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={luna4} alt="luna" className="imagenenslider" />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className="contenedorcontenidomodal">
                <h2>
                  MoonQuake Map
                </h2>
                <h3> React / React Three Fiber </h3>
                <p className="description">
                  Project that was carried out as a solution to the Make a MoonQuake Map
                  challenge by NASA Space Apps Challenge 2022. A 3D model of the moon was made
                  that showed locations where there were moonquakes
                </p>
                <p className="weight-font">
                  Link:
                  <a href="https://josepabloponce.github.io/MoonQuake-Map/"> MoonQuake Map </a>
                </p>
              </div>
              <div className="contenedorcerar"><button type="button" className="botoncerrar" onClick={() => setIsOpen4(false)}> &#x2716; </button></div>
            </Modal>
          </div>
        </div>
        <div className="contenedorgeneralfotos">
          <div className="contenedorRickandMorty">
            <h2>Rick and Morty Wiki</h2>
            <button type="button" className="botonoculto" onClick={() => setIsOpen5(true)}> See More </button>
            <Modal className="modal" isOpen={modalIsOpen5} onRequestClose={() => setIsOpen5(false)}>
              <div className="contenedorsliders">
                <div className="contenedorunico">
                  <Carousel>
                    <Carousel.Item>
                      <img src={RickandMorty1} alt="RickandMorty" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={RickandMorty2} alt="RickandMorty" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={RickandMorty3} alt="RickandMorty" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={RickandMorty4} alt="RickandMorty" className="imagenenslider" />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className="contenedorcontenidomodal">
                <h2>
                  Rick and Morty Wiki
                </h2>
                <h3> Angular / Bootstrap </h3>
                <p className="description">
                  This project fetches data from the Rick and Morty API, demonstrating my
                  frontend skills in API validation, modularization, services, responsive design
                  with Bootstrap, absolute routing using aliases, and clean, scalable code.
                </p>
                <p className="weight-font">
                  Link:
                  <a href="https://josepabloponce.github.io/Rick-And-Morty-Wiki/home"> Rick and Morty Wiki </a>
                </p>
              </div>
              <div className="contenedorcerar"><button type="button" className="botoncerrar" onClick={() => setIsOpen5(false)}> &#x2716; </button></div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Proyectos
