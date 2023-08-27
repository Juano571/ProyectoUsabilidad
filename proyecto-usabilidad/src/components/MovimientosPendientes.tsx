import React from 'react'
import BannerDetalles from './BannerDetalles'
import TableMovimientosPendientes from './TableMovimientosPendientes2'
import { useTranslation } from 'react-i18next';

const MovimientosPendientes = () => {
    const { t } = useTranslation();
    return (

        <div>
            {/*<BannerDetalles closeModal={closeModal}/>*/}
            <div className='relative flex justify-center top-5'>
                <TableMovimientosPendientes />
            </div>
            {
             <div className='relative w-2/3 grid place-items-center grid-cols-4 p-3 top-10 rounded-xl bg-gray-300 text-sm  mx-auto'>
                <div className='font-bold text-left'>
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
                        <li className='p-2 text-xl'>
                            {t("footerTablaMovPendientes.totalPendiente")}
                        </li>
                    </ul>
                </div>
                <div className='text-left'>
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
                <div className='font-bold text-left'>
                    <ul>
                        <li className='p-2'>
                            {t("footerTablaMovPendientes.otrasPendiente")}
                        </li>
                        <li className='p-2'>
                            {t("footerTablaMovPendientes.totalPensioIntereses")}
                        </li>
                    </ul>
                </div>
                <div className='text-left'>
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
        }    

        </div>


    )
}

export default MovimientosPendientes