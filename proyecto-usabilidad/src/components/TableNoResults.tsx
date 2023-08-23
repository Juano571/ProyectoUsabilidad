import React from 'react'
import TableInformacionGeneral from './TableInformacionGeneral'
import ComboBoxLanguages from './ComboBoxLanguages'

const TableNoResults = () => {
    return (
        <div>
        <table>
            <thead>
                <tr className="bg-[#245383] text-white">
                    <th>Resultado no encontrado</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border px-4 py-2">
                    <td>El número de cédula 1723427348. perteneciente a Juan Sebastián Posso Carrasquilla, no cuenta con juicios de pensiones alimenticias registrados.</td>
                </tr>
            </tbody>
        </table>
        <TableInformacionGeneral/>
        <ComboBoxLanguages/>
        </div>
    )
}

export default TableNoResults