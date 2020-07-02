import { StackScreenProps } from '@react-navigation/stack';
import { ProductStackNavigationParamsType } from '../../store/core/types'
import { ProductCategories } from '../../models/products';


export type ProductCategorySubScreenParamProps = StackScreenProps<ProductStackNavigationParamsType, 'productCatSub'>

export type ProductCategorySubScreenDataProps = {
    data: ProductCategories[],
    title: string
}

export type ProductCategorySubScreenState = { }

export type ProductCategorySubScreenDispatchProps = {
    mainCategorySearch: (category: string) => void
 }

export type ProductCategorySubScreenProps =
    ProductCategorySubScreenParamProps &
    ProductCategorySubScreenDispatchProps &
    ProductCategorySubScreenDataProps