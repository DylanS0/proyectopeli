import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Tendencias from './pages/Tendencias'
import Categorias from './pages/Categorias'
import Detalle from './pages/Detalle'
import Peliculas from './pages/Peliculas'
import Error404 from './pages/Error404'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/inicio" element={<Inicio/>} />
      <Route path="/tendencias" element={<Tendencias/> } />
      <Route path="/categorias" element={<Categorias/>} />
      <Route path="/detalle" element={<Detalle/>} />
      <Route path="/peliculas" element={<Peliculas/>} />
      <Route path="/error404" element={<Error404/>} />
      <Route path="/*" element={<Inicio/>} />
    </Routes>

    <Footer/>
    </BrowserRouter>


    

  )
}

export default App