import React, { useState } from 'react'
import BannerDetalles from './BannerDetalles'
import TableIndexaciones from './TableIndexaciones'
import Glosario from './Glosario'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";

const Indexaciones = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            {/*<BannerDetalles closeModal={closeModal}/>*/}
            <div onClick={openModal}>
                <p className='flex ml-10 mt-4 mb-4 textc text-[#245383] text-xl underline'>
                    <FontAwesomeIcon icon={faQuestionCircle} className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mr-2 text-[#245383]" />
                    {t("bannerGlosario.titulo")}
                </p>

            </div>

            <div className='flex justify-center'>
                <TableIndexaciones />
                {/*<Glosario closeModal={closeModal}/>*/}
            </div>
            <div className='relative top-14 ml-10 mt-12'>
                {/* <TableIndexaciones/> */}
            </div>
            {isModalOpen && (
                <Glosario closeModal={closeModal} />
            )}
        </div>

    )
}

export default Indexaciones