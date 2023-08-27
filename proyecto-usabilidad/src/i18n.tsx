import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files

import translationQuechua from "./languages/Quechua/qu2.json";
import translationShuar from "./languages/Shuar/shuar.json";
import translationSpanish from "./languages/Spanish/es.json";

const resources = {

    es:{
        translation: translationSpanish,
    },

    qu:{

        translation: translationQuechua,

    },

    sh:{

        translation: translationShuar,

    },

}

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"es", //default language
});

export default i18next;
