import { StackScreenProps } from '@react-navigation/stack';
import { SettingsStackNavigationParamsType } from '../../store/core/types'


export type ConfigurationScreenParamProps = StackScreenProps<SettingsStackNavigationParamsType, 'configuration'>

export type ConfigurationScreenState = { }

export type ConfigurationScreenDispatchProps = {

}

export type ConfigurationScreenProps = ConfigurationScreenParamProps & ConfigurationScreenDispatchProps