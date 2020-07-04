import { StackScreenProps } from '@react-navigation/stack';
import { ProductStackNavigationParamsType, CategorizationStackNavigationParamsType } from '../../store/core/types'
import { ProductCategories } from '../../models/products';


export type ProductCategoryOneScreenParamProps = StackScreenProps<CategorizationStackNavigationParamsType, 'productCatOne'>

export type ProductCategoryOneScreenDataProps = {
    data: ProductCategories[],
    title: string
}

export type ProductCategoryOneScreenState = { }

export type ProductCategoryOneScreenDispatchProps = {
    mainCategorySearch: (category: string) => void
 }

export type ProductCategoryOneScreenProps =
    ProductCategoryOneScreenParamProps &
    ProductCategoryOneScreenDispatchProps &
    ProductCategoryOneScreenDataProps