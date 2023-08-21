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
        <div className="flex">
            <div className="w-1/3 bg-gray-300 p-4">
                Contenido de la primera columna
            </div>

            <div className="w-1/3 bg-gray-400 p-4">
                Contenido de la segunda columna
            </div>

            <div className="w-1/3 bg-gray-500 p-4">
                Contenido de la tercera columna
            </div>
        </div>
    )
}

export default Footer