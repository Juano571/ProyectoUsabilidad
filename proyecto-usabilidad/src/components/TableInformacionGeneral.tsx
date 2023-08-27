import React from 'react'
import { useTranslation } from 'react-i18next';

const TableInformacionGeneral = () => {
    const {t} = useTranslation();
    return (
        <div>
        <table>
            <thead className="bg-[#245383] text-white">
                <th className="px-4 py-2">{t("tablaInformacionGeneral.titulo1")}</th>
                <th className="px-4 py-2">{t("tablaInformacionGeneral.titulo2")}</th>
                <th className="px-4 py-2">{t("tablaInformacionGeneral.titulo3")}</th>
                <th className="px-4 py-2">{t("tablaInformacionGeneral.titulo4")}</th>
                <th className="px-4 py-2">{t("tablaInformacionGeneral.titulo5")}</th>
                <th className="px-4 py-2">{t("tablaInformacionGeneral.titulo6")}</th>
                <th className="px-4 py-2">{t("tablaInformacionGeneral.titulo7")}</th>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">01/02/2022</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt1")}</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt1")}</td>
                    <td className="border px-4 py-2">$ 281.57</td>
                    <td className="border px-4 py-2">$ 281.57</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo7txt1")}</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">2</td>
                    <td className="border px-4 py-2">01/02/2022</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo7txt1")}</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                    <td className="border px-4 py-2">$ 31.10</td>
                    <td className="border px-4 py-2">$ 0</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">01/03/2022</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt2")}</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                    <td className="border px-4 py-2">$ 281.37</td>
                    <td className="border px-4 py-2">$ 0</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">4</td>
                    <td className="border px-4 py-2">01/03/2022</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt3")}</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt1")}</td>
                    <td className="border px-4 py-2">$ 500</td>
                    <td className="border px-4 py-2">$ 500</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo7txt1")}</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">5</td>
                    <td className="border px-4 py-2">01/04/2022</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt1")}</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt1")}</td>
                    <td className="border px-4 py-2">$ 100</td>
                    <td className="border px-4 py-2">$ 100</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo7txt1")}</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">6</td>
                    <td className="border px-4 py-2">01/04/2022</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt3")}</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                    <td className="border px-4 py-2">$ 31.10</td>
                    <td className="border px-4 py-2">$ 31.10</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">7</td>
                    <td className="border px-4 py-2">01/05/2022</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt1")}</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt1")}</td>
                    <td className="border px-4 py-2">$ 281.37</td>
                    <td className="border px-4 py-2">$ 281.37</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo7txt1")}</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">8</td>
                    <td className="border px-4 py-2">01/06/2022</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt2")}</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                    <td className="border px-4 py-2">$ 31.10</td>
                    <td className="border px-4 py-2">$ 0</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">9</td>
                    <td className="border px-4 py-2">01/06/2022</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt1")}</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                    <td className="border px-4 py-2">$ 281.37</td>
                    <td className="border px-4 py-2">$ 0</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">10</td>
                    <td className="border px-4 py-2">01/06/2022</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt2")}</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                    <td className="border px-4 py-2">$ 31.10</td>
                    <td className="border px-4 py-2">$ 0</td>
                    <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default TableInformacionGeneral