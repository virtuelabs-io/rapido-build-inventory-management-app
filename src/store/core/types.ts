import { Country } from '../../models/country';

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

export type RootStackParamsType = {
    authStack: AuthStackNavigationParamsType
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