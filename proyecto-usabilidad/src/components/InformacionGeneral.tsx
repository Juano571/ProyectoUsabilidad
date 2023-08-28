import React from 'react'
import BannerDetalles from './BannerDetalles'
import TableInformacionGeneral from './TableInformacionGeneral'
import { useTranslation } from 'react-i18next';

const InformacionGeneral = () => {
    const { t } = useTranslation();
    return (
        <>
            {/*<BannerDetalles closeModal={closeModal}/>*/}
            <div className='flex justify-center m-5'>
                <div className='m-5'>
                    <div className='w-72 text-justify mb-3'>
                        <div className='text-white bg-[#245383] font-semibold rounded-3xl px-8 py-2 uppercase'>
                            {t("tablaResultadoEncontrado.titulo5")}:
                        </div>
                        <div className='mx-5 py-2'>
                            <div>
                                <summary className='font-semibold m-2'>
                                    {t("tablaResultadoEncontrado.titulo5txt1")}
                                </summary>
                                <p className='ml-2'>
                                OLIMPIA ESMERALDA QUIROZ CARRERA
                                </p>
                            </div>
                            <div>
                                <summary className='font-semibold m-2'>
                                    {t("infoGeneral.obligado")}
                                </summary>
                                <p className='ml-2'>
                                JORGE ENRIQUE REVELO ROSERO
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-72 text-justify '>
                        <div className='text-white bg-[#245383] font-semibold rounded-3xl px-8 py-2 uppercase'>
                            {t("infoGeneral.infotitulo")}
                        </div>
                        <div className='mx-5 py-2'>
                            <div>
                                <summary className='font-semibold m-2'>
                                    {t("infoGeneral.numTarjeta")}
                                </summary>
                                <p className='ml-2'>
                                    2201-636
                                </p>
                            </div>
                            <div>
                                <summary className='font-semibold m-2'>
                                    {t("infoGeneral.provincia")}
                                </summary>
                                <p className='ml-2'>
                                    Pichincha / Quito
                                </p>
                            </div>
                            <div>
                                <summary className='font-semibold m-2'>
                                    {t("infoGeneral.tipoDepension")}
                                </summary>
                                <p className='ml-2'>
                                    {t("infoGeneral.tipopen")}
                                </p>
                            </div>
                            <div>
                                <summary className='font-semibold m-2'>
                                    {t("infoGeneral.pensactual")}
                                </summary>
                                <p className='ml-2'>
                                    $577.89
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="border-l border-spacing-4 h-auto my-5"></div>
                <div className='flex items-start m-5'>
                    <TableInformacionGeneral />
                </div>
            </div>
        </>
    )
}

export default InformacionGeneral