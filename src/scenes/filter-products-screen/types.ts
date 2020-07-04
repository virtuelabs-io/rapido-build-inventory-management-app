import { StackScreenProps } from '@react-navigation/stack';
import { ProductScreenParamProps } from '../products-screen/types';
import { ProductStackNavigationParamsType } from '../../store/core/types';



export type FilterProductsScreenParamProps = StackScreenProps<ProductStackNavigationParamsType, 'filterProducts'>

export type FilterProductsScreenState = {
   // filters: OrdersFilters
}

export type FilterProductsScreenDataProps = {
    data: {
      //  ordersFilters: OrdersFilters
    }

}

export type FilterProductsScreenDispatchProps = {
 }

export type FilterProductsScreenProps =
FilterProductsScreenParamProps &
    FilterProductsScreenDispatchProps &
    FilterProductsScreenDataProps