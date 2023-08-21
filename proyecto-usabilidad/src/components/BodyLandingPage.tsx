import React from 'react'
import TableNoResults from './TableNoResults'
import TableSearchResults from './TableSearchResults'
import TableMovimientosPendientes from './TableInformacionGeneral'
import TableInformacionGeneral from './TableMovimientosPendientes2'

const BodyLandingPage = () => {
    return (
        <body>
            <h1>Consulta de Tarjetas de Pensión Alimentaria</h1>
            <label>Criterio de Búsqueda:</label>
            <form action="POST">
                <select>
                    <option value="cedula">Cédula</option>
                    <option value="codigo_tarjeta">Código de Tarjeta</option>
                    <option value="proceso_judicial">Número de Proceso Judicial</option>
                    <option value="codigo_imbabura">Código Anterior Imbabura</option>
                    <option value="representante_legal">Datos del Representante Legal</option>
                    <option value="deudor_principal">Datos del Deudor Principal</option>
                    <option value="identificador_aprobacion">Identificador de Aprobación</option>
                </select><br />
                <label>Número de Cédula:</label>
                <input type="text"  required/>
                <button id="buscar">Buscar</button>
            </form>
            <TableNoResults/>
            <TableSearchResults/>
            <TableMovimientosPendientes/>
            <TableInformacionGeneral/>
        </body>
    )
}

export default BodyLandingPage