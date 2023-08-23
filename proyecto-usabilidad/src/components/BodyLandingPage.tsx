import TableNoResults from './TableNoResults'
import TableSearchResults from './TableSearchResults'
import TableMovimientosPendientes from './TableInformacionGeneral'
import TableInformacionGeneral from './TableMovimientosPendientes2'

const BodyLandingPage = () => {
    return (
        <body className='p-8'>
            <h1 className='text-2xl text-[#245383]'>Consulta de Tarjetas de Pensión Alimentaria</h1>
            <div className='flex py-10'>
                <form action="POST">
                    <div>
                        <label className='text-lg'>Criterio de Búsqueda:</label>
                        <select className='mx-8 px-2'>
                            <option value="cedula">Cédula</option>
                            <option value="codigo_tarjeta">Código de Tarjeta</option>
                            <option value="proceso_judicial">Número de Proceso Judicial</option>
                            <option value="codigo_imbabura">Código Anterior Imbabura</option>
                            <option value="representante_legal">Datos del Representante Legal</option>
                            <option value="deudor_principal">Datos del Deudor Principal</option>
                            <option value="identificador_aprobacion">Identificador de Aprobación</option>
                        </select>
                    </div>
                    <div className='mx-0'>
                        <label className='text-lg'>Número de Cédula:</label>
                        <input className='b' type="text"  required/>
                        <button id="buscar">Buscar</button>
                    </div>
                </form>
            </div>
            <TableNoResults/>
        </body>
    )
}

export default BodyLandingPage