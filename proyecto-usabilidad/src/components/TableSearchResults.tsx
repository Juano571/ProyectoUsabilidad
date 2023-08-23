import React from 'react'

const TableSearchResults = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr className="bg-[#245383] text-white">
                        <th className="px-4 py-2">Código de Tarjeta</th>
                        <th className="px-4 py-2">Nro. de Proceso Judicial</th>
                        <th className="px-4 py-2">Dependencia Jurisdiccional</th>
                        <th className="px-4 py-2">Tipo de Pensión</th>
                        <th className="px-4 py-2">Intervinientes</th>
                        <th className="px-4 py-2">Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">1701-08121</td>
                        <td className="border px-4 py-2">17958-2013-2054</td>
                        <td className="border px-4 py-2">Unidad Judicial Cuarta de la Familia, Mujer, Niñez y Adolescencia, con Sede en la parroquia Iñaquito del Distrito Metropolitano de Quito, provincia de Pichincha</td>
                        <td className="border px-4 py-2">Pensión Alimenticia</td>
                        <td className="border px-4 py-2">
                            <div>Representante Legal: OLIMPIA ESMERALDA QUIROZ CARRERA</div>
                            <div>Obligado Principal: JORGE ENRIQUE REVELO ROSERO</div>
                        </td>
                        <td className="px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Revisar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableSearchResults