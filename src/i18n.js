import { createI18n } from "vue-i18n"
// import Helpers from "@/utils/Helpers"


function loadLocaleMessages() {
    const locales = require.context("./locales", true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach((key) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}

const i18n = createI18n({
    // locale: Helpers.getCurrentLanguage() || "ru",
    locale: "ru",
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "ru",
    messages: loadLocaleMessages()
})

export default i18n
