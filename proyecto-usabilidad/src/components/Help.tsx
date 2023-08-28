import React, { useState } from 'react';
import { faBook, faIdCard, faGlobe,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Banner from './Banner'
import Footer from './Footer'
import { useTranslation } from "react-i18next";
import HelpGlossary from './HelpGlossary';



const Help = ({ closeModal }) => {
    //Lenguaje Selector
    const { t, i18n } = useTranslation();
    const [isLanguageSelectorOpen, setLanguageSelectorOpen] = useState(false);
    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    const onClickLanguageChange = (e: any) => {
        const language = e.target.value;
        i18n.changeLanguage(language); //change the language
        setLanguageSelectorOpen(false);
    }


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
            <div onClick={stopPropagation} className='flex flex-col h-screen bg-white overflow-y-auto' >
            <Banner />
            <div onClick={closeModal}>
                    <FontAwesomeIcon icon={faArrowLeft} className="hover:text-blue-500 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mr-2 text-[#245383]" />
            </div>
            <div className='py-8 pl-10 flex-grow justify-around'>
                <div className='flex'
                    style={{ minHeight: '100%' }}>
                    <div className='flex-col w-11/12 mr-[4%]'>
                        <h1 className='text-3xl text-[#245383] font-medium uppercase'>{t("ayuda.titulo")}</h1>
                        <div className='flex-col text-center items-center justify-center pt-8 ml-10'>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faIdCard} className="w-8 h-8 mr-6 bg-white text-[#245383] rounded-full" />
                                <h1 className='text-2xl font-semibold uppercase'>{t("ayuda.servicio")}</h1>
                            </div>
                            <div className='flex my-4'>
                                <p className='w-[100%] text-justify ml-14'>
                                    {t("ayuda.serviciotxt")}
                                </p>
                            </div>
                        </div>

                        <div className='flex-col text-center items-center justify-center pt-8 ml-10'>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faBook} className="w-8 h-8 mr-6 bg-white text-[#245383] rounded-full" />
                                <h1 className='text-2xl font-semibold uppercase'>{t("ayuda.glosario")}</h1>
                            </div>
                            <div className='ml-20'>
                                <HelpGlossary />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col justify-between'>
                        <div className="relative inline-block">
                            <div onClick={() => setLanguageSelectorOpen(!isLanguageSelectorOpen)}>
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
                                    <select className="w-56 custom-select sm:text-lg px-4 py-1 border focus:border-blue-500 focus:bg-blue-50 border-gray-500 rounded-3xl text-gray-800" onChange={onClickLanguageChange}>
                                        <option value='df' hidden>{t("ayuda.idiomaSelec")}</option>
                                        <option value="es" >Español</option>
                                        <option value="qu" >Quechua</option>
                                        <option value="sh" >Shuar</option>
                                    </select>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </div>
        

    )
}

export default Help