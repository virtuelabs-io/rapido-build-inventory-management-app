import { StackScreenProps } from '@react-navigation/stack';
import { SettingsStackNavigationParamsType } from '../../store/core/types'


export type PrivacyPolicyScreenParamProps = StackScreenProps<SettingsStackNavigationParamsType, 'privacyPolicy'>

export type PrivacyPolicyScreenState = { }

export type PrivacyPolicyScreenDispatchProps = {

}

export type PrivacyPolicyScreenDataProps = {
    data: {
        title: string
    }
}

export type PrivacyPolicyScreenProps = 
    PrivacyPolicyScreenParamProps & 
    PrivacyPolicyScreenDispatchProps &
    PrivacyPolicyScreenDataProps