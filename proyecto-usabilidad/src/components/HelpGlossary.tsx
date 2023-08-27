import React from 'react'
import { useTranslation } from 'react-i18next';

const HelpGlossary = () => {
    const {t} = useTranslation();
    return (
            <div className='flex-col text-left my-4'>
                    <div>
                        <summary className='text-lg font-medium'>{t("ayuda.glosarioCedulaRepresentante")}:</summary>
                        <p className='justify-start text-justify  my-3'>{t("ayuda.glosarioCedulaRepresentantetxt")}</p>
                    </div>
                    <div>
                        <summary className='text-lg font-medium'>{t("ayuda.glosarioCedulaDeudor")}:</summary>
                        <p className='text-justify my-3'>{t("ayuda.glosarioCedulaDeudortxt")}</p>
                    </div>
                    <div>
                        <summary className='text-lg font-medium'>{t("ayuda.glosarioCódigoTarjeta")}:</summary>
                        <p className='text-justify my-3'>{t("ayuda.glosarioCódigoTarjetatxt")}</p>
                    </div>
                    <div>
                        <summary className='text-lg font-medium'>{t("ayuda.glosarioCodigoImbabura")}:</summary>
                        <p className='text-justify my-3'>{t("ayuda.glosarioCodigoImbaburatxt")}</p>
                    </div>
                    <div>
                        <summary className='text-lg font-medium'>{t("ayuda.glosarioNumero")}:</summary>
                        <p className='text-justify my-3'>{t("ayuda.glosarioNumerotxt")}</p>
                    </div>
                    <div>
                        <summary className='text-lg font-medium'>{t("ayuda.glosarioIdentificador")}:</summary>
                        <p className='text-justify my-3'>{t("ayuda.glosarioIdentificadortxt")}</p>
                    </div>
            </div>            

    )
}

export default HelpGlossary