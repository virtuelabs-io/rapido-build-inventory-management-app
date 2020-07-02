import { Country } from '@virtuelabs-io/rapido-modules/src/models/country';

export type Authentication = {
    signedIn: boolean
    authnToken: string
    authzToken: string
}

export type AuthStackNavigationParamsType = {
    login: {
        title: string
    },
    resetCode: {
        title: string
    },
    resetPassword: {
        title: string
    },
    finishedReset: {
        title: string
    }
}

export type ProductStackNavigationParamsType = {
    product: {
        title: string,
        mainCatId: number,
        subCatId: string
    },
    productCatOne: {
        title: string
    },
    addProductCat: {
        title: string
    },
    productCatSub: {
        title: string,
        mainCatId: number
    }
}

export type SettingsStackNavigationParamsType = {
    settings: {
        title: string
    }
    profile: {
        title: string
    }
    configuration: {
        title: string
    }
    privacyPolicy: {
        title: string
    }
    termsOfService: {
        title: string
    }
    aboutUs: {
        title: string
    }
}

export type RootStackParamsType = {
    authStack: AuthStackNavigationParamsType,
    productStack: ProductStackNavigationParamsType,
    settingsStack: SettingsStackNavigationParamsType
}

export type CoreReduxStateType = {
    rootStackParams: RootStackParamsType
    coreData: {
        country: Country
        phoneNumber: string
        password: string
        auth: Authentication
        username: string
        resetPassword: {
            otp: string
            newPassword: string
        }
    }
}