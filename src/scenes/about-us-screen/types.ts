import { StackScreenProps } from '@react-navigation/stack';
import { SettingsStackNavigationParamsType } from '../../store/core/types'


export type AboutUsScreenParamProps = StackScreenProps<SettingsStackNavigationParamsType, 'aboutUs'>

export type AboutUsScreenState = { }

export type AboutUsScreenDispatchProps = {

}

export type AboutUsScreenDataProps = {
    data: {
        title: string
    }
}

export type AboutUsScreenProps = 
    AboutUsScreenParamProps & 
    AboutUsScreenDispatchProps &
    AboutUsScreenDataProps