import { StackScreenProps } from '@react-navigation/stack';
import { ProductStackNavigationParamsType } from '../../store/core/types'
import { ProductHeader } from '../../models/products';


export type ProductScreenParamProps = StackScreenProps<ProductStackNavigationParamsType, 'product'>

export type ProductScreenDataProps = {
    data: ProductHeader[]
}

export type ProductScreenState = { }

export type ProductScreenDispatchProps = {
    
 }

export type ProductScreenProps =
    ProductScreenParamProps &
    ProductScreenDispatchProps &
    ProductScreenDataProps