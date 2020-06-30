import { ProductsActionTypes, SET_ALL_PRODUCT_HEADERS } from './actions';
import { ProductsInitialState } from './data'
import { ProductsStateType } from './types';
import { DummyData } from '../../models';

const updateAllOrderHeaderDetails = (state: ProductsStateType, data: any): ProductsStateType => {
    return {
        ...state,
        headerRecords: DummyData.productHeaderDetails
    }
}

export const OrdersReducer = (state = ProductsInitialState, action: ProductsActionTypes): ProductsStateType => {
    switch (action.type) {
        case SET_ALL_PRODUCT_HEADERS:
            return updateAllOrderHeaderDetails(state, action.data)
        default:
            return state
    }
}