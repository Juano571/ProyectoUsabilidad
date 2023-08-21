import React from 'react'

const Banner = () => {
  return (
    <div className='bg-slate-900'>
      <div className='flex w-80%'>
        <div>
          <img src="/images/cdjlogo.svg" alt="Logo del Consejo de la Judicatura" />
        </div>
        <div className='flex text-white '>
          <h1 className='text-4xl'>SISTEMA ÚNICO DE PENSIONES ALIMENTICIAS</h1>
        </div>
      </div>
    </div>
  )
}

export default Banner