import { StackScreenProps } from '@react-navigation/stack';
import { SettingsStackNavigationParamsType } from '../../store/core/types'


export type TermsOfServiceScreenParamProps = StackScreenProps<SettingsStackNavigationParamsType, 'termsOfService'>

export type TermsOfServiceScreenState = { }

export type TermsOfServiceScreenDispatchProps = {

}

export type TermsOfServiceScreenDataProps = {
    data: {
        title: string
    }
}

export type TermsOfServiceScreenProps = 
    TermsOfServiceScreenParamProps & 
    TermsOfServiceScreenDispatchProps &
    TermsOfServiceScreenDataProps