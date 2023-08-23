import React from 'react'

const Banner = () => {
  return (
    <div className='bg-[#245383] bg-[url("/images/shiny-overlay.svg")] bg-cover h-fit'>
      <div className='flex items-center justify-around'>
        <div className='flex ml-8 my-4 w-1/3'>
          <img src="/images/cdjlogo.svg" alt="Logo del Consejo de la Judicatura" />
        </div>
        <div className='flex text-white w-2/3'>
          <h1 className='text-4xl'>SISTEMA ÚNICO DE PENSIONES ALIMENTICIAS</h1>
        </div>
      </div>
    </div>
  )
}

export default Banner