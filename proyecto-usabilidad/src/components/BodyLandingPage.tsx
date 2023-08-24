import React, { useState } from 'react';
import TableNoResults from './TableNoResults'
import Footer from './Footer'
import Banner from './Banner'
import TableSearchResults from './TableSearchResults';

const BodyLandingPage = () => {
    const [value, setValue] = useState<string>('');
    const [showResult, setShowResult] = useState<boolean>(false);
    const [verifyShowResult, setVerifyShowResults] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [isParagraphVisible, setIsParagraphVisible] = useState<boolean>(false); 


    const handleSearchClick = (event: React.FormEvent) => {
        event.preventDefault();
        setVerifyShowResults(true);
        if (value === '1710087683') {
            setShowResult(true); // Mostrar el resultado
        } else if (value=='') {
            setVerifyShowResults(false);
        } else if (value==='1723427348') {
            setShowResult(false);
        }else{
            setShowResult(false); // Mostrar el resultado
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        // Validar que sea un número y no supere 10 dígitos
        if (/^\d*$/.test(inputValue) && inputValue.length <= 10) {
            setValue(inputValue);
        }
    };

    const handleComboBoxChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedText = event.target.selectedOptions[0].text; // Obtener el texto seleccionado del combobox
        setSelectedOption(selectedText);
        handleToggleParagraph();
    };

    const handleToggleParagraph = () => {
        setIsParagraphVisible(true); // Cambiar la visibilidad del párrafo
    };

    return (
        <body className='flex flex-col min-h-screen'>
            <Banner></Banner>
            <div className='p-8 flex-grow'>
                <h1 className='text-3xl text-[#245383] font-normal uppercase'>Consulta de Tarjetas de Pensión Alimentaria</h1>
                <div className='flex py-10'>
                    <form>
                        <div>
                            <label className='text-lg font-medium'>Criterio de Búsqueda:</label>
                            <select onChange={handleComboBoxChange} className='mx-8 px-4 py-1 p-2 border focus:border-blue-500 focus:bg-blue-50 border-gray-500 rounded-3xl w-80 text-gray-800'>
                                <option value="cedula">Número de cédula</option>
                                <option value="codigo_tarjeta">Código de Tarjeta</option>
                                <option value="proceso_judicial">Número de Proceso Judicial</option>
                                <option value="codigo_imbabura">Código Anterior Imbabura</option>
                                <option value="representante_legal">Datos del Representante Legal</option>
                                <option value="deudor_principal">Datos del Deudor Principal</option>
                                <option value="identificador_aprobacion">Identificador de Aprobación</option>
                            </select>
                            <button onClick={handleSearchClick}  className='w-32 rounded-3xl py-1 border bg-[#245383] hover:bg-blue-600 focus:bg-blue-500 text-white font-medium focus:outline-none focus:ring focus:ring-blue-200'>Buscar</button>
                        </div>
                        <div className='my-5'>
                            {selectedOption &&  <label className='text-lg font-medium' >Ingrese {selectedOption} :</label>}
                            <input type="text"
                                pattern="\d*"
                                inputMode="numeric"
                                value={value}
                                onChange={handleInputChange}
                                placeholder={selectedOption}//"Ingrese su número de cédula"
                                className="w-80 mx-12 py-1 px-4 border focus:bg-blue-50 border-gray-500 rounded-3xl focus:outline-none focus:border-blue-500"
                                style={{ display: isParagraphVisible ? 'inline' : 'none' }}
                                required />
                        </div>
                    </form>
                </div>
                {verifyShowResult?  (showResult ? <TableSearchResults/> : <TableNoResults/>) : <div></div>}
            </div>
            <Footer></Footer>
        </body>
    )
}

export default BodyLandingPage