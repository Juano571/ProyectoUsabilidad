import React from 'react'
import { useTranslation } from 'react-i18next';

const HelpGlossary = () => {
    const {t} = useTranslation();
    return (
            <div className='flex-col text-left my-4'>
                    <details className='m-3'>
                        <summary className='text-lg'>{t("ayuda.glosarioCedulaRepresentante")}</summary>
                        <p className='justify-start text-left p-[1%]'>{t("ayuda.glosarioCedulaRepresentantetxt")}</p>
                    </details>
                    <details className='m-3'>
                        <summary className='text-lg'>{t("ayuda.glosarioCedulaDeudor")}</summary>
                        <p className='justify-start text-left p-[1%]'>{t("ayuda.glosarioCedulaDeudortxt")}</p>
                    </details>
                    <details className='m-3'>
                        <summary className='text-lg'>{t("ayuda.glosarioCódigoTarjeta")} </summary>
                        <p className='justify-start text-left p-[1%]'>{t("ayuda.glosarioCódigoTarjetatxt")}</p>
                    </details>
                    <details className='m-3'>
                        <summary className='text-lg'>{t("ayuda.glosarioCodigoImbabura")}</summary>
                        <p className='justify-start text-left p-[1%]'>{t("ayuda.glosarioCodigoImbaburatxt")}</p>
                    </details>
                    <details className='m-3'>
                        <summary className='text-lg'>{t("ayuda.glosarioNumero")}</summary>
                        <p className='justify-start text-left p-[1%]'>{t("ayuda.glosarioNumerotxt")}</p>
                    </details>
                    <details className='m-3'>
                        <summary className='text-lg'>{t("ayuda.glosarioIdentificador")}</summary>
                        <p className='justify-start text-left p-[1%]'>{t("ayuda.glosarioIdentificadortxt")}</p>
                    </details>
            </div>            

    )
}

export default HelpGlossary