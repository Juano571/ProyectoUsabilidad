import React from 'react'
import BannerDetalles from './BannerDetalles'
import TableMovimientosPendientes from './TableMovimientosPendientes2'
import { useTranslation } from 'react-i18next';

const MovimientosPendientes = () => {
    const { t } = useTranslation();
    return (
        <div className='m-10'>
            {/*<BannerDetalles closeModal={closeModal}/>*/}
            <div className='flex justify-center m-5'>
                <TableMovimientosPendientes />
            </div>
            <div className="border-t border-spacing-4 my-5"></div>
            {
                <div className='flex w-10/12 justify-between rounded-xl bg-gray-300 mx-auto py-5'>
                    <div className='flex'>
                        <div className='font-semibold text-left ml-5'>
                            <ul>
                                <li className='p-2'>
                                    {t("footerTablaMovPendientes.numPensPendiente")}
                                </li>
                                <li className='p-2'>
                                    {t("footerTablaMovPendientes.subtotalPens")}
                                </li>
                                <li className='p-2'>
                                    {t("footerTablaMovPendientes.subtotalInter")}
                                </li>
                                <li className='p-2 pb-6'>
                                    {t("footerTablaMovPendientes.totalPensioIntereses")}
                                </li>
                                <li className='p-2 text-xl uppercase'>
                                    {t("footerTablaMovPendientes.totalPendiente")}
                                </li>
                            </ul>
                        </div>
                        <div className='text-left mr-5'>
                            <ul>
                                <li className='p-2'>
                                    19
                                </li>
                                <li className='p-2'>
                                    $ 5,409.15
                                </li>
                                <li className='p-2'>
                                    $ 318.97
                                </li>
                                <li className='p-2 pb-6'>
                                    $ 5,728.12
                                </li>
                                <li className='p-2'>
                                    $ 5,728.12
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='font-semibold text-left ml-5'>
                            <ul>
                                <li className='p-2'>
                                    {t("footerTablaMovPendientes.otrasPendiente")}
                                </li>
                                <li className='p-2'>
                                    {t("footerTablaMovPendientes.totalPensioIntereses")}
                                </li>
                            </ul>
                        </div>
                        <div className='text-left mr-5'>
                            <ul>
                                <li className='p-2'>
                                    0
                                </li>
                                <li className='p-2'>
                                    $ 0.00
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }

        </div>


    )
}

export default MovimientosPendientes