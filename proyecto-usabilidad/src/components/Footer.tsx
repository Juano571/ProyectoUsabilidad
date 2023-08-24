import { useEffect, useState } from 'react'

const Footer: React.FC = () => {

    // const [dataEs, setDataEs] = useState([])

    // useEffect(() => {
    //     fetch('proyecto-usabilidad\src\languages\es.json')
    //         .then(response => response.json())
    //         .then(data => {
    //             setDataEs(data);
    //         })
    //         .catch(error => {
    //             console.error("Error al leer el archivo JSON:", error);
    //         });

    // }, [])

    // console.log(dataEs)

    return (
        <footer className="h-fit px-8 py-4  flex justify-between text-white bg-[#245383] bg-cover bg-[url('/images/shiny-overlay.svg')]">
            <div className='flex items-center justify-around'>
                <div className='text-xl'>
                    <p>
                        Construyendo un servicio de justicia para la paz social
                    </p>
                </div>
            </div>

            <div className="w-2/3 text-center my-3 text-lg">
                <ul>
                    <li>
                        CONTÁCTANOS
                    </li>
                    <li>
                        02 3953600 / 02 3999800
                    </li>
                    <li>
                        EXT: 25821
                    </li>
                    <li>
                        escuela.juducial@funcionjudicial.gob.ec
                    </li>
                </ul>
            </div>

            <div className="flex w-1/3 my-4 justify-end">
                <img src="/images/gobierno.svg" alt="Logo del gobierno del Ecuador" />
            </div>
        </footer >
    )
}

export default Footer