import React from 'react'

const TableIndexaciones = () => {
    return (
        <table className="table-auto w-full">
            <thead>
                <tr className="bg-[#245383] text-white">
                    <th className="px-4 py-2">Columna 1</th>
                    <th className="px-4 py-2">Columna 2</th>
                    <th className="px-4 py-2">Columna 3</th>
                    <th className="px-4 py-2">Columna 4</th>
                    <th className="px-4 py-2">Columna 5</th>
                </tr>
            </thead>
            <tbody>
                {/* Filas de datos */}
                {Array.from({ length: 9 }).map((_, index) => (
                    <tr key={index}>
                        <td className="border px-4 py-2">Fila {index + 1}, Celda 1</td>
                        <td className="border px-4 py-2">Fila {index + 1}, Celda 2</td>
                        <td className="border px-4 py-2">Fila {index + 1}, Celda 3</td>
                        <td className="border px-4 py-2">Fila {index + 1}, Celda 4</td>
                        <td className="border px-4 py-2">Fila {index + 1}, Celda 5</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableIndexaciones