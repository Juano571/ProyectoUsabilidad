import React from 'react'
import {useTranslation} from "react-i18next";
const Banner = () => {
  const { t, i18n } = useTranslation();

    const onClickLanguageChange = (e: any) => {
        const language = e.target.value;
        i18n.changeLanguage(language); //change the language
    }
  return (
    <div className='bg-[#245383] bg-[url("/images/shiny-overlay.svg")] bg-cover h-fit'>
      <div className='flex items-center justify-around'>
        <div className='flex ml-8 my-4 w-1/3' tabIndex={1}>
          <img src="/images/cdjlogo.svg" alt="Logo del Consejo de la Judicatura" />
        </div>
        <div className='flex text-white w-2/3' tabIndex={2}>
          <h1 className='text-4xl'>{t("Header.titulo")}</h1>
        </div>
      </div>
      <select className="custom-select" style={{width: 200}} onChange={onClickLanguageChange}>
        <option value="es" >Spanish</option>
        <option value="qu" >Quechua</option>
        <option value="sh" >Shuar</option>

      </select>
    </div>
  )
}

export default Banner