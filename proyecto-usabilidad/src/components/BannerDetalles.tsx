import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const BannerDetalles = ({closeModal}) => {
    return (
        <div className='w-full bg-[#245383] bg-[url("/images/shiny-overlay.svg")] bg-cover'>
            <div className='w-full flex-col items-center justify-around'>
                <div className='flex justify-between mx-8 py-4'>
                    <div className='text-4xl text-white'>
                        <h1>DETALLE DE TARJETA DE PENSIÓN ALIMENTICIA</h1>
                    </div>
                    <div  onClick={closeModal} className="flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-red-600 cursor-pointer">
                        <FontAwesomeIcon icon={faTimes} className="text-gray-600" />
                    </div>
                </div>
            </div>
            <div className='flex mx-8 pu-4 items-center text-white text-xl justify-center'>
                <div className="py-4 cursor-pointer transition duration-300 hover:bg-slate-600 w-80 text-center">
                    <h2>INFORMACIÓN GENERAL</h2>
                </div>
                <div className='p-4 cursor-pointer transition duration-300 hover:bg-slate-600 w-80 text-center'>
                    <h2>MOVIMIENTOS PENDIENTES</h2>
                </div>
                <div className='p-4 cursor-pointer transition duration-300 hover:bg-slate-600 w-80 text-center'>
                    <h2>INDEXACIONES</h2>
                </div>
            </div>
        </div>
    )
}

export default BannerDetalles