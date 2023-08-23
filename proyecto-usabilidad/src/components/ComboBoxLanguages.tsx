import React from 'react'

const ComboBoxLanguages = () => {
    return (
        <div>
            <label className='text-lg'>Lenguajes: </label>
            <select className='mx-8 px-2'>
                <option value="cedula">Español</option>
                <option value="codigo_tarjeta">Quichua</option>
                <option value="proceso_judicial">Shuar</option>
            </select>
        </div>
    )
}

export default ComboBoxLanguages