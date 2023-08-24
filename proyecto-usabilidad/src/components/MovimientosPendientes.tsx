import React from 'react'
import BannerDetalles from './BannerDetalles'
import TableMovimientosPendientes from './TableMovimientosPendientes2'

const MovimientosPendientes = () => {
    return (
        <>
            <BannerDetalles />
            <div className='relative flex justify-center top-14'>
                <TableMovimientosPendientes />
            </div>
            <div className='relative w-2/3 grid place-items-center grid-cols-4 p-3 top-24 rounded-xl bg-gray-300 text-sm mr-72 ml-72'>
                <div className='font-bold text-left'>
                    <ul>
                        <li className='p-2'>
                            Número de pensiones pendientes:
                        </li>
                        <li className='p-2'>
                            Subtotal de pensiones:
                        </li>
                        <li className='p-2'>
                            Subtotal intereses:
                        </li>
                        <li className='p-2 pb-6'>
                            Total pensiones más intereses:
                        </li>
                        <li className='p-2 text-xl'>
                            Total pendiente:
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
                            Número de otras pensiones pendientes:
                        </li>
                        <li className='p-2'>
                            Total pensiones más intereses:
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

        </>
    )
}

export default MovimientosPendientes