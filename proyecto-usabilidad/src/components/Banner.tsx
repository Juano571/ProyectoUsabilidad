import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();


  return (
    <div className='bg-[#245383] bg-[url("/images/shiny-overlay.svg")] bg-cover h-fit'>
      <div className='flex items-center justify-around'>
        <div className='flex items-start my-4 w-auto' tabIndex={1}>
          <img src="/images/cdjlogo.svg" alt="Logo del Consejo de la Judicatura" />
        </div>
        <div className='flex text-white w-10/12 justify-center' tabIndex={2}>
          <h1 className='text-4xl uppercase text-center'>{t("header.titulo")}</h1>
        </div>
      </div>
    </div>
  )
}

export default Banner