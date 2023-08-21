import './App.css'
import Footer from './components/Footer'
import Banner from './components/Banner'
import BodyLandingPage from './components/BodyLandingPage'
import Help from './components/Help'
import DetallesPensionAlimenticia from './components/DetallesPensionAlimenticia'
import HelpGlossary from './components/HelpGlossary'
import BannerDetalles from './components/BannerDetalles'

function App() {

  return (

    <>
      <Banner />
      <BannerDetalles />
      <DetallesPensionAlimenticia />
      <BodyLandingPage/>
      <Footer />
      <Help />
      <HelpGlossary />
    </>
  )
}

export default App
