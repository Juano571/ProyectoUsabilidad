import React from 'react'
import { useTranslation } from 'react-i18next';

const TableMovimientosPendientes = () => {
    const { t } = useTranslation();
    return (
        <div>
            <table className="text-center">
                <thead className="bg-[#245383] text-white">
                    <th className="px-10 py-2">{t("tablaMovimientosPendientes.titulo1")}</th>
                    <th className="px-10 py-2">{t("tablaMovimientosPendientes.titulo2")}</th>
                    <th className="px-10 py-2">{t("tablaMovimientosPendientes.titulo3")}</th>
                    <th className="px-10 py-2">{t("tablaMovimientosPendientes.titulo4")}</th>
                    <th className="px-10 py-2">{t("tablaMovimientosPendientes.titulo5")}</th>
                    <th className="px-10 py-2">{t("tablaMovimientosPendientes.titulo6")}</th>
                    <th className="px-10 py-2">{t("tablaMovimientosPendientes.titulo7")}</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="border py-2">1</td>
                        <td className="border py-2">2022</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.feb")}</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo4txt1")}</td>
                        <td className="border py-2">$ 281.57</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo6txt2")}</td>
                        <td className="border py-2">01/02/2022</td>
                    </tr>
                    <tr>
                        <td className="border py-2">2</td>
                        <td className="border py-2">2022</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.feb")}</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo4txt2")}</td>
                        <td className="border py-2">$ 31.10</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo6txt2")}</td>
                        <td className="border py-2">01/02/2022</td>
                    </tr>
                    <tr>
                        <td className="border py-2">3</td>
                        <td className="border py-2">2022</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.mar")}</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo4txt1")}</td>
                        <td className="border py-2">$ 281.57</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo6txt2")}</td>
                        <td className="border py-2">01/03/2022</td>
                    </tr>
                    <tr>
                        <td className="border py-2">4</td>
                        <td className="border py-2">2022</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.mar")}</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo4txt2")}</td>
                        <td className="border py-2">$ 31.10</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo6txt2")}</td>
                        <td className="border py-2">01/03/2022</td>
                    </tr>
                    <tr>
                        <td className="border py-2">5</td>
                        <td className="border py-2">2022</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.abr")}</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo4txt1")}</td>
                        <td className="border py-2">$ 281.57</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo6txt2")}</td>
                        <td className="border py-2">01/04/2022</td>
                    </tr>
                    <tr>
                        <td className="border py-2">6</td>
                        <td className="border py-2">2022</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.abr")}</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo4txt2")}</td>
                        <td className="border py-2">$ 31.10</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo6txt2")}</td>
                        <td className="border py-2">01/04/2022</td>
                    </tr>
                    <tr>
                        <td className="border py-2">7</td>
                        <td className="border py-2">2022</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.may")}</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo4txt1")}</td>
                        <td className="border py-2">$ 281.57</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo6txt2")}</td>
                        <td className="border py-2">01/05/2022</td>
                    </tr>
                    <tr >
                        <td className="border py-2">8</td>
                        <td className="border py-2">2022</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.may")}</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo4txt2")}</td>
                        <td className="border py-2">$ 31.10</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo6txt2")}</td>
                        <td className="border py-2">01/05/2022</td>
                    </tr>
                    <tr>
                        <td className="border py-2">9</td>
                        <td className="border py-2">2022</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.jun")}</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo4txt1")}</td>
                        <td className="border py-2">$ 281.57</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo6txt2")}</td>
                        <td className="border py-2">01/06/2022</td>
                    </tr>
                    <tr>
                        <td className="border py-2">10</td>
                        <td className="border py-2">2022</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.jun")}</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo4txt2")}</td>
                        <td className="border py-2">$ 31.10</td>
                        <td className="border py-2">{t("tablaMovimientosPendientes.titulo6txt2")}</td>
                        <td className="border py-2">01/06/2022</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableMovimientosPendientes