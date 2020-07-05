import { StackScreenProps } from '@react-navigation/stack';
import { ProductScreenParamProps } from '../products-screen/types';
import { ProductStackNavigationParamsType } from '../../store/core/types';
import { ProductsFilters } from '../../store/products/types';



export type FilterProductsScreenParamProps = StackScreenProps<ProductStackNavigationParamsType, 'filterProducts'>

export type FilterProductsScreenState = {
   // filters: OrdersFilters
}

export type FilterProductsScreenDataProps = {
    data: {
      productsFilters: ProductsFilters
    }

}

export type FilterProductsScreenDispatchProps = {
  setFilters: (ProductsFilters: ProductsFilters) => void
}

export type FilterProductsScreenProps =
FilterProductsScreenParamProps &
    FilterProductsScreenDispatchProps &
    FilterProductsScreenDataProps