import { StackScreenProps } from '@react-navigation/stack';
import { ProductStackNavigationParamsType } from '../../store/core/types'


export type ProductScreenParamProps = StackScreenProps<ProductStackNavigationParamsType, 'product'>

export type ProductScreenDataProps = {
    data: {
        
    }
}

export type ProductScreenState = { }

export type ProductScreenDispatchProps = {
    
 }

export type ProductScreenProps =
    ProductScreenParamProps &
    ProductScreenDispatchProps &
    ProductScreenDataProps