import { StackScreenProps } from '@react-navigation/stack';
import { ProductStackNavigationParamsType, CategorizationStackNavigationParamsType } from '../../store/core/types'
import { ProductSubCategories } from '../../models/products';


export type ProductCategorySubScreenParamProps = StackScreenProps<CategorizationStackNavigationParamsType, 'productCatSub'>

export type ProductCategorySubScreenDataProps = {
    data: ProductSubCategories[],
    title: string
}

export type ProductCategorySubScreenState = { }

export type ProductCategorySubScreenDispatchProps = {
    subCategorySearch: (category: string) => void
 }

export type ProductCategorySubScreenProps =
    ProductCategorySubScreenParamProps &
    ProductCategorySubScreenDispatchProps &
    ProductCategorySubScreenDataProps