import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const DetallesPensionAlimenticia = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow my-10">

            {/* Div con ícono de ayuda */}
            <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="w-5 h-5 mr-2 bg-white text-[#245383] rounded-full" />
                <span>GLOSARIO DE TÉRMINOS</span>
            </div>

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
        </div>
    )
}

export default DetallesPensionAlimenticia