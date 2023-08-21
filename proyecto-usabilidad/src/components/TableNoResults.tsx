import React from 'react'

const TableNoResults = () => {
    return (
        <table>
            <thead>
                <tr className="bg-[#245383] text-white">
                    <th>Resultado no encontrado</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border px-4 py-2">
                    <td>El número de cédula 1723427348. perteneciente a Juan Sebastián Posso Carrasquilla, no cuenta con juicios de pensionaes alimenticias registrados.</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableNoResults