import React from 'react'
import TableInformacionGeneral from './TableInformacionGeneral'
import ComboBoxLanguages from './ComboBoxLanguages'
import { useTranslation } from 'react-i18next';

const TableNoResults = () => {
    const {t} = useTranslation();
    return (
        <div>
        <table>
            <thead>
                <tr className="bg-[#245383] text-white">
                    <th>{t("tablaResultadoNoEncontrado.titulo1")}</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border px-4 py-2">
                    <td>{t("tablaResultadoNoEncontrado.contenido")}</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default TableNoResults