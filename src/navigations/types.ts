import { Authentication } from "../store/core/types";
import { CoreReduxStateType } from '../store/core/types'
import { ProductsStateType } from "../store/products/types";

export type AppNavigationParamProps = {
    core: CoreReduxStateType,
    product: ProductsStateType
}

export type AppNavigationState = { }

export type AppNavigationDispatchProps = { }

export type AppNavigationProps = AppNavigationParamProps & AppNavigationDispatchProps