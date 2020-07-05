import { StackScreenProps } from '@react-navigation/stack';
import { ProductStackNavigationParamsType } from '../../store/core/types'
import { ProductCategories } from '../../models/products';

export type FilterProductCategoriesScreenParamProps = StackScreenProps<ProductStackNavigationParamsType, 'filterProductCategories'>

export type FilterProductCategoriesScreenState = { }

export type FilterProductCategoriesScreenDataProps = {
    options: ProductCategories[]
}

export type FilterProductCategoriesScreenDispatchProps = {
    setProductCategoryFilter: (category: string) => void
}

export type FilterProductCategoriesScreenProps =
FilterProductCategoriesScreenParamProps &
FilterProductCategoriesScreenDispatchProps &
FilterProductCategoriesScreenDataProps