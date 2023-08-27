import React from 'react'
import { useTranslation } from 'react-i18next';

const TableIndexaciones = () => {
    const {t} = useTranslation();

    return (
        <div className='flex justify-center'>
            <table className="table-auto">
                <thead>
                    <tr className="bg-[#245383] text-white">
                        <th className="px-4 py-2">{t("tablaIndexaciones.titulo1")}</th>
                        <th className="px-4 py-2">{t("tablaIndexaciones.titulo2")}</th>
                        <th className="px-4 py-2">{t("tablaIndexaciones.titulo3")}</th>
                        <th className="px-4 py-2">{t("tablaIndexaciones.titulo4")}</th>
                        <th className="px-4 py-2">{t("tablaIndexaciones.titulo5")}</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo1txt1")}</td>
                        <td className="border px-4 py-2">01/01/2023</td>
                        <td className="border px-4 py-2">01/02/2023</td>
                        <td className="border px-4 py-2">$  116.50</td>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo5txt3")}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo1txt2")}</td>
                        <td className="border px-4 py-2">01/01/2022</td>
                        <td className="border px-4 py-2">01/02/2022</td>
                        <td className="border px-4 py-2">$  150.50</td>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo5txt4")}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo1txt3")}</td>
                        <td className="border px-4 py-2">01/01/2019</td>
                        <td className="border px-4 py-2">01/02/2019</td>
                        <td className="border px-4 py-2">$  163.50</td>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo5txt5")}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo1txt1")}</td>
                        <td className="border px-4 py-2">01/01/2018</td>
                        <td className="border px-4 py-2">01/03/2018</td>
                        <td className="border px-4 py-2">$  154.50</td>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo5txt2")}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo1txt1")}</td>
                        <td className="border px-4 py-2">01/01/2016</td>
                        <td className="border px-4 py-2">24/03/2016</td>
                        <td className="border px-4 py-2">$  140.50</td>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo5txt1")}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo1txt3")}</td>
                        <td className="border px-4 py-2">01/01/2014</td>
                        <td className="border px-4 py-2">31/01/2014</td>
                        <td className="border px-4 py-2">$  148.50</td>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo5txt5")}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo1txt2")}</td>
                        <td className="border px-4 py-2">01/01/2013</td>
                        <td className="border px-4 py-2">31/04/2013</td>
                        <td className="border px-4 py-2">$  169.50</td>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo5txt4")}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo1txt3")}</td>
                        <td className="border px-4 py-2">01/01/2010</td>
                        <td className="border px-4 py-2">01/04/2010</td>
                        <td className="border px-4 py-2">$  160.50</td>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo5txt5")}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo1txt1")}</td>
                        <td className="border px-4 py-2">01/01/2009</td>
                        <td className="border px-4 py-2">01/04/2009</td>
                        <td className="border px-4 py-2">$  160.50</td>
                        <td className="border px-4 py-2">{t("tablaIndexaciones.titulo5txt6")}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default TableIndexaciones