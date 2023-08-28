import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
import InformacionGeneral from './InformacionGeneral';
import MovimientosPendientes from './MovimientosPendientes';
import Indexaciones from './Indexaciones';
import { useRef, useState } from 'react';

const BannerDetalles = ({ closeModal }) => {
    const { t } = useTranslation();
    const informacionRef = useRef<HTMLDivElement | null>(null);
    const movimientosRef = useRef<HTMLDivElement | null>(null);
    const indexacionesRef = useRef<HTMLDivElement | null>(null);

    const [activeComponent, setActiveComponent] = useState<string>('informacion');
    //const contentRef = useRef(null);
    const handleComponentChange = (componentName: string) => {
        setActiveComponent(componentName);
        if (componentName === 'informacion') {
            informacionRef.current?.focus();
        } else if (componentName === 'movimientos') {
            movimientosRef.current?.focus();
        } else if (componentName === 'indexaciones') {
            indexacionesRef.current?.focus();
        }
    };


    return (
        <div className='rounded-t-xl overflow-y-auto h-screen' aria-modal="true" autoFocus tabIndex={0}>
            <div className='bg-[#245383] bg-[url("/images/shiny-overlay.svg")] bg-cover rounded-t-xl' autoFocus tabIndex={0}>
                <div className='w-full flex-col items-center justify-around'>
                    <div className='flex justify-between mx-8 py-4'>
                        <div className='text-4xl text-white'>
                            <h1 className='uppercase'>{t("bannerInfoGeneral.titulo")}</h1>
                        </div>
                        <div onClick={closeModal} className="flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-red-600 cursor-pointer">
                            <FontAwesomeIcon icon={faTimes} className="text-gray-600" />
                        </div>
                    </div>
                </div>
                {/*
                <div className='flex mx-8 pu-4 items-center text-white text-xl justify-center' tabIndex={0} >
                    <div tabIndex={0} onClick={() => handleComponentChange('informacion')} className="py-4 cursor-pointer transition duration-300 hover:bg-slate-600 w-80 text-center">
                        <h2 className='uppercase' >{t("bannerInfoGeneral.infogeneral")}</h2>
                    </div>
                    <div tabIndex={0} onClick={() => handleComponentChange('movimientos')} className='p-4 cursor-pointer transition duration-300 hover:bg-slate-600 w-80 text-center'>
                        <h2 className='uppercase'>{t("bannerInfoGeneral.movpendientes")}</h2>
                    </div>
                    <div tabIndex={0} onClick={() => handleComponentChange('indexaciones')} className='p-4 cursor-pointer transition duration-300 hover:bg-slate-600 w-80 text-center'>
                        <h2 className='uppercase'>{t("bannerInfoGeneral.indexac")}</h2>
                    </div>
                </div>
                 */}

                <div className='flex mx-8 py-4 items-center text-white text-xl justify-center' role="navigation" aria-label="Navegación de componentes" tabIndex={0}>
                    <nav className="flex space-x-4">
                        <button onClick={() => handleComponentChange('informacion')} className="py-4 cursor-pointer transition duration-300 hover:bg-slate-600 w-80 text-center">
                            <h2 className='uppercase'>{t("bannerInfoGeneral.infogeneral")}</h2>
                        </button>
                        <button onClick={() => handleComponentChange('movimientos')} className='p-4 cursor-pointer transition duration-300 hover:bg-slate-600 w-80 text-center'>
                            <h2 className='uppercase'>{t("bannerInfoGeneral.movpendientes")}</h2>
                        </button>
                        <button onClick={() => handleComponentChange('indexaciones')} className='p-4 cursor-pointer transition duration-300 hover:bg-slate-600 w-80 text-center'>
                            <h2 className='uppercase'>{t("bannerInfoGeneral.indexac")}</h2>
                        </button>
                    </nav>
                </div>

            </div>

            <div>
    {/* ... */}
    {activeComponent === 'informacion' && <InformacionGeneral tabIndex={0} />}
    {activeComponent === 'movimientos' && <MovimientosPendientes tabIndex={0} />}
    {activeComponent === 'indexaciones' && <Indexaciones tabIndex={0} />}
    {/* ... */}
</div>
        </div>
    )
}

export default BannerDetalles

