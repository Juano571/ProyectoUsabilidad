import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

const DetallesPensionAlimenticia = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow my-10">
            {/* Div con ícono de ayuda */}
            <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="w-5 h-5 mr-2 bg-white text-[#245383] rounded-full" />
                <span>{t("bannerGlosario.titulo")}</span>
            </div>
        </div>
    )
}

export default DetallesPensionAlimenticia