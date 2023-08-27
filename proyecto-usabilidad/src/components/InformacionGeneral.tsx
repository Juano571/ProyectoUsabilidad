import React from 'react'
import BannerDetalles from './BannerDetalles'
import TableInformacionGeneral from './TableInformacionGeneral'
import { useTranslation } from 'react-i18next';

const InformacionGeneral = () => {
    const {t} = useTranslation();
    return (
        <>
        {/*<BannerDetalles closeModal={closeModal}/>*/}
            <div className='flex justify-center'>
                <div className='relative top-1 p-5'>
                    <ul>
                        <li className='text-white bg-[#245383] w-64 text-left font-semibold rounded-xl p-1 pl-3 m-2'>
                            {t("tablaResultadoEncontrado.titulo5")}
                        </li>
                        <li className='font-semibold m-2'>
                            {t("tablaResultadoEncontrado.titulo5txt1")}
                        </li>
                        <li className='bg-[#fcfcfc] w-64 text-left rounded-xl p-1 pl-3 text-xs m-2'>
                            MARIA CONCEPCIÓN REASCOS FIALLOS
                        </li>
                        <li className='font-semibold'>
                            {t("infoGeneral.obligado")}
                        </li >
                        <li className='bg-[#fcfcfc] w-64 text-left rounded-xl p-1 pl-3 text-xs m-2'>
                            MATEO SEBASTIAN GARCES ZAMBRANO
                        </li>
                        <li className='text-white bg-[#245383] w-64 text-left font-semibold rounded-xl p-1 pl-3 m-2'>
                            {t("infoGeneral.infotitulo")}
                        </li>
                        <li className='font-semibold m-2'>
                            {t("infoGeneral.numTarjeta")}
                        </li>
                        <li className='bg-[#fcfcfc] w-64 text-left rounded-xl p-1 pl-3 text-xs m-2'>
                            2201-636
                        </li>
                        <li className='font-semibold m-2'>
                            {t("infoGeneral.provincia")}
                        </li>
                        <li className='bg-[#fcfcfc] w-64 text-left rounded-xl p-1 pl-3 text-xs m-2'>
                            PICHINCHA / QUITO
                        </li>
                        <li className='font-semibold m-2'>
                            {t("infoGeneral.tipoDepension")}
                        </li>
                        <li className='bg-[#fcfcfc] w-64 text-left rounded-xl p-1 pl-3 text-xs m-2'>
                            {t("infoGeneral.tipopen")}
                        </li>
                        <li className='font-semibold'>
                            {t("infoGeneral.pensactual")}
                        </li>
                        <li className='bg-[#fcfcfc] w-64 text-left rounded-xl p-1 pl-3 text-xs m-2'>
                            $577.89
                        </li>
                    </ul>
                </div >
                <div className='relative mt-5'>
                    <TableInformacionGeneral/>
                </div>
            </div>
        </>
    )
}

export default InformacionGeneral