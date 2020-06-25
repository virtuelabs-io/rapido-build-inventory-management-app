import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackNavigationParamsType } from '../../store/core/types'
import { Country } from '@virtuelabs-io/rapido-modules/src/models/country';

type font = {
    id: string
    name: string
}

export type LoginDetailsHolder = {
    dialCode: string
    countryCode: string
    phoneNumber: string
    password: string
}

export type LoginScreenParamProps = StackScreenProps<AuthStackNavigationParamsType, 'login'>

export type LoginScreenDataProps = {
    data: {
        country: Country
        phoneNumber: string
        password: string
    }
}

export type LoginScreenState = { }

export type LoginDetailsDispatchProps = {
    signInUser: () => void
    // TODO: get rid of this signOutUser
    signOutUser: () => void // temporary purpose
    setPhoneNumber: (phoneNumber: string) => void
    setPassword: (password: string) => void
    setCountry: (countryCode: string) => void
}

export type LoginScreenProps =
    LoginScreenParamProps &
    LoginDetailsDispatchProps &
    LoginScreenDataProps