import { Country } from '../../models/country';

const allCountryCodes: Country[] = require('../../assets/data/country-codes.json')

const Constants = {
    APP_NAME: "Rapidobuild",
    DEFAULT_COUNTRY_CODE: "IN",
    COUNTRY_CODES: allCountryCodes,
    DEFAULT_ICON: "feather",
    NAV: {
        screenNames: {
            login: "login"
        }
    }
}

export default Constants