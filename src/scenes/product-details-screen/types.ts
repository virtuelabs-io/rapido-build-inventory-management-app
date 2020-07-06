import { StackScreenProps } from '@react-navigation/stack';
import { ProductStackNavigationParamsType } from '../../store/core/types';
import { ProductHeader } from '../../models/products';

export type ProductDetailsScreenParamProps = StackScreenProps<ProductStackNavigationParamsType, 'productDetails'>

export type ProductDetailsScreenState = {}

export type ProductDetailsScreenDataProps = {
    data: ProductHeader["fields"]
 }

export type ProductDetailsScreenDispatchProps = {
    
}

export type ProductDetailsScreenProps =
ProductDetailsScreenParamProps &
ProductDetailsScreenDispatchProps &
ProductDetailsScreenDataProps