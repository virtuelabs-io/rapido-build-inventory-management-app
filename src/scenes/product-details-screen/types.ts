import { StackScreenProps } from '@react-navigation/stack';
import { ProductStackNavigationParamsType } from '../../store/core/types';

export type ProductDetailsScreenParamProps = StackScreenProps<ProductStackNavigationParamsType, 'productDetails'>

export type ProductDetailsScreenState = {}

export type ProductDetailsScreenDataProps = {
    data: {}
 }

export type ProductDetailsScreenDispatchProps = {
    
}

export type ProductDetailsScreenProps =
ProductDetailsScreenParamProps &
ProductDetailsScreenDispatchProps &
ProductDetailsScreenDataProps