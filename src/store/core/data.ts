import { CoreReduxStateType } from './types';
import Constants from '@virtuelabs-io/rapido-modules/src/commons/constants'

export const CoreReduxInitialState: CoreReduxStateType = {
    rootStackParams: {
        authStack: {
            login: {
                title: "Login"
            },
            resetCode: {
                title: "Reset Code"
            },
            resetPassword: {
                title: "Reset Password"
            },
            finishedReset: {
                title: "Reset Successful"
            }
        },
        productStack: {
            product: {
                title: "Products"
            },
            productCatOne: {
                title: "Product Category"
            },
            addProductCat: {
                title: "Add Category"
            }
        },
        settingsStack: {
            settings: {
                title: "Settings"
            },
            profile: {
                title: "Profile"
            },
            configuration: {
                title: "Configuration"
            },
            privacyPolicy: {
                title: "Privacy Policy"
            },
            termsOfService: {
                title: "Terms Of Service"
            },
            aboutUs: {
                title: "About Us"
            }
        }
    },
    coreData: {
        country: Constants.COUNTRY_CODES.find(country => country.code === Constants.DEFAULT_COUNTRY_CODE)!,
        phoneNumber: "",
        password: "",
        auth: {
            signedIn: false,
            authnToken: "",
            authzToken: ""
        },
        username: "Administrator",
        resetPassword: {
            otp: "",
            newPassword: ""
        }
    }
}