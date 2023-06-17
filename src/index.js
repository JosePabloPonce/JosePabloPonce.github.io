import React from 'react'
import ReactDOM from 'react-dom'
import Presentacion from './componentes/Presentacion/presentacion'
import NavigationBar from './componentes/NavigationBar/navigationbar'
import AcercaDeMi from './componentes/AcercaDeMi/acercademi'
import Conocimientos from './componentes/Conocimientos/conocimientos'
import Proyectos from './componentes/Proyectos/proyectos'
import Contacto from './componentes/Contacto/contacto'

document.body.style.margin = '0'
document.body.style.paddding = '0'

const Contenedor = () => {
  const estilogeneral = {
    width: '100%',
    height: 'auto',
  }

  return (
    <div style={estilogeneral}>
      <Presentacion />
      <NavigationBar />
      <AcercaDeMi />
      <Conocimientos />
      <Proyectos />
      <Contacto />
    </div>
  )
}
ReactDOM.render(
  <Contenedor />,
  document.getElementById('root'),
)
