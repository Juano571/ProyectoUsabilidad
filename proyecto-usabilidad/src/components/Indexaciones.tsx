import React from 'react'
import BannerDetalles from './BannerDetalles'
import TableIndexaciones from './TableIndexaciones'
import Glosario from './Glosario'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const Indexaciones = () => {
    return (
        <div>
            {/*<BannerDetalles closeModal={closeModal}/>*/}
            <p className='flex ml-10 mt-4 mb-4 textc text-[#245383] text-xl underline'><FontAwesomeIcon icon={faQuestionCircle} className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mr-2 text-[#245383]" /> Glosario de terminos</p>
            <div className='flex justify-center'>
                <TableIndexaciones />
                {/*<Glosario closeModal={closeModal}/>*/}
            </div>
            <div className='relative top-14 ml-10 mt-12'>
                {/* <TableIndexaciones/> */}
            </div>
        </div>

    )
}

export default Indexaciones