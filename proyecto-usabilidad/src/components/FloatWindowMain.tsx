import BannerDetalles from './BannerDetalles';
import Indexaciones from './Indexaciones'
import InformacionGeneral from './InformacionGeneral';
import MovimientosPendientes from './MovimientosPendientes';

const FloatWindow = ({ closeModal }) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
      <></>
      <div className='bg-white rounded-xl' onClick={stopPropagation}>
        <BannerDetalles closeModal={closeModal}/>       
      </div>
      
    </div>
  )
}

export default FloatWindow