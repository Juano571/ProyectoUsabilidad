import React,{useState} from 'react'
import FloatWindow from './FloatWindowMain';
import { useTranslation } from 'react-i18next';


const TableSearchResults = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const {t} = useTranslation();

    return (
        <div>
            <table>
                <thead>
                    <tr className="bg-[#245383] text-white">
                        <th className="px-4 py-2">{t("tablaResultadoEncontrado.titulo1")}</th>
                        <th className="px-4 py-2">{t("tablaResultadoEncontrado.titulo2")}</th>
                        <th className="px-4 py-2">{t("tablaResultadoEncontrado.titulo3")}</th>
                        <th className="px-4 py-2">{t("tablaResultadoEncontrado.titulo4")}</th>
                        <th className="px-4 py-2">{t("tablaResultadoEncontrado.titulo5")}</th>
                        <th className="px-4 py-2">{t("tablaResultadoEncontrado.titulo6")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">1701-08121</td>
                        <td className="border px-4 py-2">17958-2013-2054</td>
                        <td className="border px-4 py-2">{t("tablaResultadoEncontrado.titulo3txt1")}</td>
                        <td className="border px-4 py-2">{t("tablaResultadoEncontrado.titululo4txt1")}</td>
                        <td className="border px-4 py-2">
                            <div>{t("tablaResultadoEncontrado.titulo5txt1")} OLIMPIA ESMERALDA QUIROZ CARRERA</div>
                            <div>{t("tablaResultadoEncontrado.titulo5txt2")} JORGE ENRIQUE REVELO ROSERO</div>
                        </td>
                        <td className="px-4 py-2"><button onClick={openModal} className="bg-[#245383] text-white px-4 py-2 rounded">{t("tablaResultadoEncontrado.titulo6txtBtn")}</button></td>
                    </tr>
                </tbody>
            </table>
            
            {isModalOpen && (
                <FloatWindow closeModal={closeModal} />
            )}
        </div>
    )
}

export default TableSearchResults