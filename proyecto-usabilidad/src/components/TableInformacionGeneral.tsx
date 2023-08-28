import React from 'react'
import { useTranslation } from 'react-i18next';

const TableInformacionGeneral = () => {
    const { t } = useTranslation();
    return (
        <div>
            <table>
                <thead className="bg-[#245383] text-white">
                    <tr>
                        <th scope="col" className="px-4 py-2">{t("tablaInformacionGeneral.titulo1")}</th>
                        <th scope="col" className="px-4 py-2">{t("tablaInformacionGeneral.titulo2")}</th>
                        <th scope="col" className="px-4 py-2">{t("tablaInformacionGeneral.titulo3")}</th>
                        <th scope="col" className="px-4 py-2">{t("tablaInformacionGeneral.titulo4")}</th>
                        <th scope="col" className="px-4 py-2">{t("tablaInformacionGeneral.titulo5")}</th>
                        <th scope="col" className="px-4 py-2">{t("tablaInformacionGeneral.titulo6")}</th>
                        <th scope="col" className="px-4 py-2">{t("tablaInformacionGeneral.titulo7")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row" className="border px-4 py-2">1</th>
                        <td className="border px-4 py-2">01/02/2022</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt1")}</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt1")}</td>
                        <td className="border px-4 py-2">$ 281.57</td>
                        <td className="border px-4 py-2">$ 281.57</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo7txt1")}</td>
                    </tr>
                    <tr>
                    <th scope="row" className="border px-4 py-2">2</th>
                        <td className="border px-4 py-2">01/02/2022</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo7txt1")}</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                        <td className="border px-4 py-2">$ 31.10</td>
                        <td className="border px-4 py-2">$ 0</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                    </tr>
                    <tr>
                    <th scope="row" className="border px-4 py-2">3</th>
                        <td className="border px-4 py-2">01/03/2022</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt2")}</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                        <td className="border px-4 py-2">$ 281.37</td>
                        <td className="border px-4 py-2">$ 0</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                    </tr>
                    <tr>
                    <th scope="row" className="border px-4 py-2">4</th>
                        <td className="border px-4 py-2">01/03/2022</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt3")}</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt1")}</td>
                        <td className="border px-4 py-2">$ 500</td>
                        <td className="border px-4 py-2">$ 500</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo7txt1")}</td>
                    </tr>
                    <tr>
                    <th scope="row" className="border px-4 py-2">5</th>
                        <td className="border px-4 py-2">01/04/2022</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt1")}</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt1")}</td>
                        <td className="border px-4 py-2">$ 100</td>
                        <td className="border px-4 py-2">$ 100</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo7txt1")}</td>
                    </tr>
                    <tr>
                    <th scope="row" className="border px-4 py-2">6</th>
                        <td className="border px-4 py-2">01/04/2022</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt3")}</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                        <td className="border px-4 py-2">$ 31.10</td>
                        <td className="border px-4 py-2">$ 31.10</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                    </tr>
                    <tr>
                    <th scope="row" className="border px-4 py-2">7</th>
                        <td className="border px-4 py-2">01/05/2022</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt1")}</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt1")}</td>
                        <td className="border px-4 py-2">$ 281.37</td>
                        <td className="border px-4 py-2">$ 281.37</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo7txt1")}</td>
                    </tr>
                    <tr>
                    <th scope="row" className="border px-4 py-2">8</th>
                        <td className="border px-4 py-2">01/06/2022</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt2")}</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                        <td className="border px-4 py-2">$ 31.10</td>
                        <td className="border px-4 py-2">$ 0</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                    </tr>
                    <tr>
                    <th scope="row" className="border px-4 py-2">9</th>
                        <td className="border px-4 py-2">01/06/2022</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo3txt1")}</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                        <td className="border px-4 py-2">$ 281.37</td>
                        <td className="border px-4 py-2">$ 0</td>
                        <td className="border px-4 py-2">{t("tablaInformacionGeneral.titulo4txt2")}</td>
                    </tr>
                    <tr>
                    <th scope="row" className="border px-4 py-2">10</th>
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