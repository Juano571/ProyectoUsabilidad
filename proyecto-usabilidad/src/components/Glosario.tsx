import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

const Glosario = ({ closeModal }) => {
    const { t } = useTranslation();
    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
            <div className="w-7/12 mx-auto bg-white  shadow my-10 rounded-xl" onClick={stopPropagation}>
                <div className='w-full bg-[#245383] bg-[url("/images/shiny-overlay.svg")] bg-cover rounded-t-xl'>
                    <div className='flex-col items-center justify-around'>
                        <div className='flex justify-between pl-5 pr-10 py-4'>
                            <div className='flex'>
                                <div>
                                    <FontAwesomeIcon icon={faBook} className="w-20 h-9 mr-2 text-white" />
                                </div>
                                <div className='text-4xl text-white'>
                                    <h1>{t("bannerGlosario.titulo")}</h1>
                                </div>
                            </div>
                            <div onClick={closeModal} className="flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-red-600 cursor-pointer">
                                <FontAwesomeIcon icon={faTimes} className="text-gray-600" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-10 my-5'>
                    <div className='flex-col text-center items-center justify-center'>
                        <div className='my-4 ml-3'>
                            <summary className='text-lg text-left font-medium'>{t("bodyGlosario.indexa")}</summary>
                            <p className='justify-start text-justify  my-3'>{t("bodyGlosario.defIndexa")}</p>
                        </div>
                    </div>

                    <div className='flex-col text-center items-center justify-center'>
                        <div className='flex mb-4 ml-3'>
                            <summary className='font-semibold text-lg mr-2'>{t("bodyGlosario.tipos")}</summary>
                        </div>
                        <div className='flex my-4 ml-3'>
                            <span className='font-semibold mr-2 w-auto'>{t("bodyGlosario.definitiva")}</span>
                            <p className='w-[100%] text-justify'>{t("bodyGlosario.defDefinitiva")}</p>
                        </div>
                        <div className='flex my-4 ml-3'>
                            <span className='font-semibold mr-2'>{t("bodyGlosario.provisional")}</span>
                            <p className='w-[100%] text-justify'>{t("bodyGlosario.defProvisional")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Glosario