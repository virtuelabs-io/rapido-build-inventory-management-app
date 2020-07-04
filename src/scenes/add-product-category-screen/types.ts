import { StackScreenProps } from '@react-navigation/stack';
import { ProductStackNavigationParamsType, CategorizationStackNavigationParamsType } from '../../store/core/types'
import { ProductCategories } from '../../models/products';


export type AddProductCategoryScreenParamProps = StackScreenProps<CategorizationStackNavigationParamsType, 'addProductCat'>

export type AddProductCategoryScreenDataProps = {
    data: ProductCategories[],
    title: string
}

export type AddProductCategoryScreenState = { }

export type AddProductCategoryScreenDispatchProps = {
    addCategory: (category: string) => void
    addSubCategory: (category: string, categoryId: number) => void
 }

export type AddProductCategoryScreenProps =
    AddProductCategoryScreenParamProps &
    AddProductCategoryScreenDispatchProps &
    AddProductCategoryScreenDataProps