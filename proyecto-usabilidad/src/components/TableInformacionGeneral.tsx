import React from 'react'

const TableInformacionGeneral = () => {
    return (
        <div>
        <table>
            <thead className="bg-[#245383] text-white">
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Fecha de deuda</th>
                <th className="px-4 py-2">Concepto</th>
                <th className="px-4 py-2">Estado</th>
                <th className="px-4 py-2">Valor de deuda</th>
                <th className="px-4 py-2">Valor pagado</th>
                <th className="px-4 py-2">Transacción</th>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">01/Febrero/2022</td>
                    <td className="border px-4 py-2">Pensión</td>
                    <td className="border px-4 py-2">Pagado</td>
                    <td className="border px-4 py-2">$ 281.57</td>
                    <td className="border px-4 py-2">$ 281.57</td>
                    <td className="border px-4 py-2">Acreditado</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">2</td>
                    <td className="border px-4 py-2">01/Febrero/2022</td>
                    <td className="border px-4 py-2">Interés</td>
                    <td className="border px-4 py-2">Pendiente</td>
                    <td className="border px-4 py-2">$ 31.10</td>
                    <td className="border px-4 py-2">$ 0</td>
                    <td className="border px-4 py-2">Pendiente</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">01/Marzo/2022</td>
                    <td className="border px-4 py-2">Pensión</td>
                    <td className="border px-4 py-2">Pendiente</td>
                    <td className="border px-4 py-2">$ 281.37</td>
                    <td className="border px-4 py-2">$ 0</td>
                    <td className="border px-4 py-2">Pendiente</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">4</td>
                    <td className="border px-4 py-2">01/Marzo/2022</td>
                    <td className="border px-4 py-2">Acuerdo de pago</td>
                    <td className="border px-4 py-2">Pagado</td>
                    <td className="border px-4 py-2">$ 500</td>
                    <td className="border px-4 py-2">$ 500</td>
                    <td className="border px-4 py-2">Acreditado</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default TableInformacionGeneral