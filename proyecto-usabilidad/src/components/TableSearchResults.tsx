import React from 'react'

const TableSearchResults = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Código de Tarjeta</th>
                    <th>Nro. de Proceso Judicial</th>
                    <th>Dependencia Jurisdiccional</th>
                    <th>Tipo de Pensión</th>
                    <th>Intervinientes</th>
                    <th>Detalle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1701-08121</td>
                    <td>17958-2013-2054</td>
                    <td>Unidad Judicial Cuarta de la Familia, Mujer,
                        Niñez y Adolescencia,con Sede en la parroquia
                        Iñaquito del Distrito Metropolitano de Quito,
                        provincia de Pichincha</td>
                    <td>Pension Alimenticia</td>
                    <td><div>Representante  Legal: OLIMPIA ESMERALDA QUIROZ CARRERA</div>
                        <div>Obligado Principal: JORGE ENRIQUE REVELO ROSERO</div>
                    </td>
                    <td><button>Revisar</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableSearchResults