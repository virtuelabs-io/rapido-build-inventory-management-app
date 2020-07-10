import { StackScreenProps } from '@react-navigation/stack';
import { ProductStackNavigationParamsType } from '../../store/core/types';
import { ProductHeader } from '../../models/products';

export type ProductAddScreenParamProps = StackScreenProps<ProductStackNavigationParamsType, 'productAdd'>

export type ProductAddScreenState = {
    
}

export type ProductAddScreenDataProps = {
    
 }

export type ProductAddScreenDispatchProps = {
    
}

export type ProductAddScreenProps =
ProductAddScreenParamProps &
ProductAddScreenDispatchProps &
ProductAddScreenDataProps