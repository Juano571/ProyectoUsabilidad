import React from 'react'
import BannerDetalles from './BannerDetalles'
import TableIndexaciones from './TableIndexaciones'
import Glosario from './Glosario'

const Indexaciones = ({ closeModal}) => {
    return (
        <div>
            <BannerDetalles closeModal={closeModal}/>
            <div className='relative ml-64 mt-16'>
                <Glosario />
            </div>
            <div className='relative top-14 ml-10 mt-12'>
                {/* <TableIndexaciones/> */}
            </div>
        </div>

    )
}

export default Indexaciones