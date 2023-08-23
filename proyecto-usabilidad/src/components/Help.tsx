import { faBook, faCirclePlay, faIdCard, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Help = () => {
    return (
        <div>
            <div>
                <FontAwesomeIcon icon={faQuestionCircle} className="w-5 h-5 mr-2 bg-white text-[#245383] rounded-full text-center" />
                <span> Ayuda </span>
            </div>
            <div>
                <div>
                    <h1>Servicio</h1>

                    <FontAwesomeIcon icon={faIdCard } className="w-5 h-5 mr-2 bg-white text-[#245383] rounded-full text-center" />
                </div>
                <div>
                    <p>
                        En nuestra plataforma puedes realizar consultas sobre pensiones alimenticias
                        con el numero de identificacion del principal obligado al pago o del representante legal
                        del beneficiario
                    </p>
                </div>
            </div>

            <div>
                <div>
                    <h1>Guia de uso</h1>
                    <a href="link al video"><FontAwesomeIcon icon={faCirclePlay} className="w-5 h-5 mr-2 bg-white text-[#245383] rounded-full" /></a>

                </div>
                <div>
                    <p>
                        Si tienes dudas sobre como realizar
                        el proceso de busqueda ingresa al video
                    </p>
                </div>
            </div>

        </div>

    )
}

export default Help