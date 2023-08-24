import React from 'react'
import BannerDetalles from './BannerDetalles'
import TableInformacionGeneral from './TableInformacionGeneral'

const InformacionGeneral = () => {
    return (
        <>
            <BannerDetalles />
            <div className='flex justify-center'>
                <div className='relative top-14 p-5'>
                    <ul>
                        <li className='text-white bg-[#245383] w-64 text-left font-semibold rounded-xl p-1 pl-3 m-2'>
                            Intervinientes
                        </li>
                        <li className='font-semibold m-2'>
                            Representante legal
                        </li>
                        <li className='bg-[#fcfcfc] w-64 text-left rounded-xl p-1 pl-3 text-xs m-2'>
                            MARIA CONCEPCIÓN REASCOS FIALLOS
                        </li>
                        <li className='font-semibold'>
                            Obligado principal
                        </li >
                        <li className='bg-[#fcfcfc] w-64 text-left rounded-xl p-1 pl-3 text-xs m-2'>
                            MATEO SEBASTIAN GARCES ZAMBRANO
                        </li>
                        <li className='text-white bg-[#245383] w-64 text-left font-semibold rounded-xl p-1 pl-3 m-2'>
                            Información general
                        </li>
                        <li className='font-semibold m-2'>
                            Número de tarjetas
                        </li>
                        <li className='bg-[#fcfcfc] w-64 text-left rounded-xl p-1 pl-3 text-xs m-2'>
                            2201-636
                        </li>
                        <li className='font-semibold m-2'>
                            Provincia / Cantón:
                        </li>
                        <li className='bg-[#fcfcfc] w-64 text-left rounded-xl p-1 pl-3 text-xs m-2'>
                            PICHINCHA / QUITO
                        </li>
                        <li className='font-semibold m-2'>
                            Tipo de pensión
                        </li>
                        <li className='bg-[#fcfcfc] w-64 text-left rounded-xl p-1 pl-3 text-xs m-2'>
                            PENSIÓN ALIMENTICIA
                        </li>
                        <li className='font-semibold'>
                            Pensión actual
                        </li>
                        <li className='bg-[#fcfcfc] w-64 text-left rounded-xl p-1 pl-3 text-xs m-2'>
                            $577.89
                        </li>
                    </ul>
                </div >
                <div className='relative top-14 ml-10 mt-12'>
                    <TableInformacionGeneral/>
                </div>
            </div>
        </>
    )
}

export default InformacionGeneral