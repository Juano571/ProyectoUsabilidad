import { faBook, faCirclePlay, faIdCard, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Banner from './Banner'
import Footer from './Footer'

const Help = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Banner />
            <div className='flex-col flex-1'>
                <div className='relative flex pl-8 pt-8'>
                <FontAwesomeIcon icon={faQuestionCircle} className="w-6 h-6 mr-2 mt-2 bg-white text-[#245383] rounded-full text-center" />

                    <h1 className='text-3xl text-[#245383] font-medium uppercase'>Ayuda</h1>
                </div>
                <div className='flex-col text-center items-center justify-center mb-10'>
                    <div>
                        <h1 className='text-2xl m-4 font-semibold'>Servicio</h1>
                        <FontAwesomeIcon icon={faIdCard} className="w-10 h-10 mr-2 bg-white text-[#245383] rounded-full text-center" />
                    </div>
                    <div className='flex justify-center m-4'>
                        <p className='w-[25%]'>
                            En nuestra plataforma puedes realizar consultas sobre pensiones alimenticias
                            con el numero de identificacion del principal obligado al pago o del representante legal
                            del beneficiario
                        </p>
                    </div>
                </div>

                <div className='flex-col text-center items-center justify-center'>
                    <div>
                        <h1 className='text-2xl m-4 font-semibold'>Guia de uso</h1>
                        <a href="link al video"><FontAwesomeIcon icon={faCirclePlay} className="w-10 h-10 mr-2 bg-white text-[#245383] rounded-full" /></a>
                    </div>
                    <div  className='flex justify-center m-4'>
                        <p className='w-[25%]'>
                            Si tienes dudas sobre como realizar
                            el proceso de busqueda ingresa al video
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default Help