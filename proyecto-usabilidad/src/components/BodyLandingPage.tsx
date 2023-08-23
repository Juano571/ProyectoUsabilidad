import React, { useState } from 'react';
import TableNoResults from './TableNoResults'
import Footer from './Footer'
import Banner from './Banner'

const BodyLandingPage = () => {
    const [value, setValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        // Validar que sea un número y no supere 10 dígitos
        if (/^\d*$/.test(inputValue) && inputValue.length <= 10) {
            setValue(inputValue);
        }
    };

    return (
        <body className='flex flex-col min-h-screen'>
            <Banner></Banner>
            <div className='p-8 flex-grow'>
                <h1 className='text-3xl text-[#245383] font-normal uppercase'>Consulta de Tarjetas de Pensión Alimentaria</h1>
                <div className='flex py-10'>
                    <form action="POST">
                        <div>
                            <label className='text-lg font-medium'>Criterio de Búsqueda:</label>
                            <select className='mx-8 px-4 py-1 p-2 border focus:border-blue-500 focus:bg-blue-50 border-gray-500 rounded-3xl w-80 bg-gray-100 text-gray-800'>
                                <option value="cedula">Cédula</option>
                                <option value="codigo_tarjeta">Código de Tarjeta</option>
                                <option value="proceso_judicial">Número de Proceso Judicial</option>
                                <option value="codigo_imbabura">Código Anterior Imbabura</option>
                                <option value="representante_legal">Datos del Representante Legal</option>
                                <option value="deudor_principal">Datos del Deudor Principal</option>
                                <option value="identificador_aprobacion">Identificador de Aprobación</option>
                            </select>
                            <button id="buscar" className='w-32 rounded-3xl py-1 border bg-[#245383] hover:bg-blue-600 focus:bg-blue-500 text-white font-medium focus:outline-none focus:ring focus:ring-blue-200'>Buscar</button>
                        </div>
                        <div className='mx-0 my-5'>
                            <label className='text-lg font-medium'>Número de Cédula:</label>
                            <input type="text"
                                pattern="\d*"
                                inputMode="numeric"
                                value={value}
                                onChange={handleInputChange}
                                placeholder="Ingrese su número de cédula"
                                className="w-80 mx-8 py-1 px-4 border focus:bg-blue-50 border-gray-500 rounded-3xl focus:outline-none focus:border-blue-500"
                                required />
                        </div>
                    </form>
                </div>
                <TableNoResults />
            </div>
            <Footer></Footer>
        </body>
    )
}

export default BodyLandingPage