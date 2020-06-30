import { StackScreenProps } from '@react-navigation/stack';
import { ProductStackNavigationParamsType } from '../../store/core/types'
import { ProductCategories } from '../../models/products';


export type ProductCategoryOneScreenParamProps = StackScreenProps<ProductStackNavigationParamsType, 'productCatOne'>

export type ProductCategoryOneScreenDataProps = {
    data: ProductCategories[],
    title: string
}

export type ProductCategoryOneScreenState = { }

export type ProductCategoryOneScreenDispatchProps = {
    
 }

export type ProductCategoryOneScreenProps =
    ProductCategoryOneScreenParamProps &
    ProductCategoryOneScreenDispatchProps &
    ProductCategoryOneScreenDataProps