import React, { useRef, useState } from 'react';
import TableNoResults from './TableNoResults'
import Footer from './Footer'
import Banner from './Banner'
import TableSearchResults from './TableSearchResults';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
import Help from './Help';


const BodyLandingPage = () => {
    const [value, setValue] = useState<string>('');
    const [showResult, setShowResult] = useState<boolean>(false);
    const [verifyShowResult, setVerifyShowResults] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [isParagraphVisible, setIsParagraphVisible] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleSearchClick = (event: React.FormEvent) => {
        event.preventDefault();
        setVerifyShowResults(true);

        if (value === '1710087683') {
            setShowResult(true); // Mostrar el resultado
        } else if (value == '') {
            setVerifyShowResults(false);
            setErrorMessage(t("labelComboBox.obligatorio"));
        } else if (value === '1723427348') {
            setShowResult(false);
        } else {
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

        const selectedValue = event.target.value;
        setSelectedValue(selectedValue);
        setIsParagraphVisible(true);
    };

    const handleToggleParagraph = () => {
        setIsParagraphVisible(true); // Cambiar la visibilidad del párrafo
    };

    //Lenguaje Selector
    const { t, i18n } = useTranslation();
    const [isLanguageSelectorOpen, setLanguageSelectorOpen] = useState(false);

    const onClickLanguageChange = (e: any) => {
        const language = e.target.value;
        i18n.changeLanguage(language); //change the language
        setLanguageSelectorOpen(false);

    }

    //Ejemplos
    const renderExample = () => {
        switch (selectedValue) {
            case 'representante_legal':
                return '1789456123';
            case 'deudor_principal':
                return '1789456321';
            case 'codigo_tarjeta':
                return '0101-1234';
            case 'proceso_judicial':
                return '01204-2015-1234';
            case 'codigo_imbabura':
                return 'A123, 10950, OTA020A';
            case 'identificador_aprobacion':
                return 'A00023';
            default:
                return '';
        }
    };

    //Traducir combobox
    const inputValue = () => {
        switch (selectedValue) {
            case 'df':
                return t("comboBox.seleccionarCriterio");
            case 'representante_legal':
                return t("comboBox.cedulaRepresentante");
            case 'deudor_principal':
                return t("comboBox.cedulaDeudor");
            case 'codigo_tarjeta':
                return t("comboBox.codigoTarjeta");
            case 'proceso_judicial':
                return t("comboBox.numero");
            case 'codigo_imbabura':
                return t("comboBox.codigoImbabura");
            case 'identificador_aprobacion':
                return t("comboBox.identificador");
            default:
                return '';
        }
    };
    const helpRef = useRef<HTMLDivElement | null>(null);
    const handleComponentChange = () => {
        helpRef.current?.focus();
    };

    return (
        <body className='flex flex-col h-screen'>
            <Banner></Banner>
            <div className='py-8 pl-10 flex-grow justify-around'>
                <div className='flex'
                    style={{ minHeight: '100%' }}>
                    <div className='flex-col w-11/12 mr-[4%]'>
                        <h1 className='text-3xl text-[#245383] font-medium uppercase' tabIndex={3}>{t("header.tituloAlimentaria")}</h1>
                        <div className='flex py-10'>
                            <form>
                                <div className='flex'>
                                    <label className='pt-1 text-lg font-medium w-96' tabIndex={6} >{t("mainBody.criterio")}:</label>
                                    <div>
                                        <select onChange={handleComboBoxChange} defaultValue='df' className='sm:text-lg px-4 py-[6px] border focus:border-blue-500 focus:bg-blue-50 border-gray-500 rounded-3xl w-80 text-gray-800' aria-label="Menú para seleccionar el criterio de búsqueda" tabIndex={6}>
                                            <option value='df' hidden>{t("comboBox.seleccionarCriterio")}</option>
                                            <option value="representante_legal">{t("comboBox.cedulaRepresentante")}</option>
                                            <option value="deudor_principal">{t("comboBox.cedulaDeudor")}</option>
                                            <option value="codigo_tarjeta">{t("comboBox.codigoTarjeta")}</option>
                                            <option value="proceso_judicial">{t("comboBox.numero")}</option>
                                            <option value="codigo_imbabura">{t("comboBox.codigoImbabura")}</option>
                                            <option value="identificador_aprobacion">{t("comboBox.identificador")}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='mt-5 flex sm:flex-row sm:items-center'>
                                    {selectedOption && <label className='sm:text-lg pb-8 font-medium sm:w-96 sm:mb-0' tabIndex={6}>{t("labelComboBox.ingrese")} {inputValue()}*:</label>}
                                    <div className="w-full sm:w-80" tabIndex={7}>

                                        <input type="text"
                                            required
                                            pattern="\d*"
                                            inputMode="numeric"
                                            id="Dato"
                                            aria-label="Ingrese los datos de manera obligatoria"
                                            value={value}
                                            onChange={handleInputChange}
                                            placeholder={inputValue()}
                                            tabIndex={8}
                                            className="w-full py-1 px-4 border sm:text-lg focus:bg-blue-50 border-gray-500 rounded-3xl focus:outline-none focus:border-blue-500"
                                            style={{ display: isParagraphVisible ? 'block' : 'none' }}
                                        />

                                        <div className='text-gray-400 mt-3' style={{ display: isParagraphVisible ? 'block' : 'none' }}>
                                            <span className='capitalize ml-5 text-lg'>{t("labelComboBox.ejemplo")}: </span>
                                            <span>{renderExample()}</span>
                                        </div>
                                    </div>
                                    <div className='pl-4 pb-9'>
                                        <button onClick={handleSearchClick}
                                            style={{ display: isParagraphVisible ? 'block' : 'none' }}
                                            className='w-full sm:w-32 sm:mt-0 rounded-3xl py-2 bg-[#245383] hover:bg-blue-600 focus:bg-blue-500 text-white font-medium focus:outline-none focus:ring focus:ring-blue-200'
                                            tabIndex={8}
                                        >{t("mainBody.btnBuscar")}
                                        </button>
                                    </div>
                                </div>
                                {errorMessage && <p className="text-red-500 ml-56 text-center mt-2" role="alert">{t("labelComboBox.obligatorio")}</p>}


                            </form>
                        </div>

                        {verifyShowResult ? (showResult ? <TableSearchResults /> : <TableNoResults />) : <div></div>}
                    </div>
                    <div className='col-span-1 flex flex-col justify-between mr-8'>
                        <div className="relative inline-block">
                            <div onClick={() => setLanguageSelectorOpen(!isLanguageSelectorOpen)} tabIndex={4} aria-label="Botón para seleccionar el idioma">
                                <FontAwesomeIcon
                                    icon={faGlobe}
                                    className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mr-2 text-[#245383]"
                                />
                            </div>
                            {isLanguageSelectorOpen && (
                                <div
                                    className="absolute bottom-[-2.5rem] right-2 z-10"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <select className="w-56 custom-select sm:text-lg px-4 py-1 border focus:border-blue-500 focus:bg-blue-50 border-gray-500 rounded-3xl text-gray-800" onChange={onClickLanguageChange} tabIndex={5}>
                                        <option value='df' hidden>{t("ayuda.idiomaSelec")}</option>
                                        <option value="es" >Español</option>
                                        <option value="qu" >Quechua</option>
                                        <option value="sh" >Shuar</option>
                                    </select>
                                </div>
                            )}
                        </div>
                        <div onClick={openModal} >
                            <nav>
                                <button onClick={() => handleComponentChange()} tabIndex={9}>
                                    <FontAwesomeIcon icon={faQuestionCircle} className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mr-2 text-[#245383]" />
                                </button>
                            </nav>
                            {/* 
                             <a target="_blank" ><FontAwesomeIcon icon={faQuestionCircle} className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mr-2 text-[#245383]" /></a>
                            */}
                           

                        </div>


                        {isModalOpen && (
                            <Help closeModal={closeModal} />
                        )}
                    </div>
                </div>
            </div>
            <Footer ></Footer>
        </body>
    )
}

export default BodyLandingPage