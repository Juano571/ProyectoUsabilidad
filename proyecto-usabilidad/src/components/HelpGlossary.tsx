import React from 'react'
import { useTranslation } from 'react-i18next';

const HelpGlossary = () => {
    const {t} = useTranslation();
    return (
        <div>
            <div>{t("ayuda.titulo")}</div>
            <div>
                
                    <h3>{t("ayuda.glosario")}</h3>
                
                <div>
                    <img src="" alt="Imagen de un diccionario" />
                </div>
                <div>
                    <details>
                        <summary>{t("ayuda.glosarioCedulaRepresentante")}</summary>
                        <p>{t("ayuda.glosarioCedulaRepresentantetxt")}</p>
                    </details>
                    <details>
                        <summary >{t("ayuda.glosarioCedulaDeudor")}</summary>
                        <p>{t("ayuda.glosarioCedulaDeudortxt")}</p>
                    </details>
                    <details>
                        <summary >{t("ayuda.glosarioCódigoTarjeta")} </summary>
                        <p>{t("ayuda.glosarioCódigoTarjetatxt")}</p>
                    </details>
                    <details>
                        <summary >{t("ayuda.glosarioCodigoImbabura")}</summary>
                        <p>{t("ayuda.glosarioCodigoImbaburatxt")}</p>
                    </details>
                    <details>
                        <summary>{t("ayuda.glosarioNumero")}</summary>
                        <p>{t("ayuda.glosarioNumerotxt")}</p>
                    </details>
                    <details>
                        <summary>{t("ayuda.glosarioIdentificador")}</summary>
                        <p>{t("ayuda.glosarioIdentificadortxt")}</p>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default HelpGlossary