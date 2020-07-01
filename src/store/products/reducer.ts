import { ProductsActionTypes, SET_ALL_PRODUCT_HEADERS, ADD_MAIN_CATEGORY } from './actions';
import { ProductsInitialState } from './data'
import { ProductsStateType } from './types';
import { DummyData } from '../../models';

const updateAllProductHeaderDetails = (state: ProductsStateType, data: any): ProductsStateType => {
    return {
        ...state,
        headerRecords: DummyData.productHeaderDetails
    }
}

const updateMainCategories = (state: ProductsStateType, category: string): ProductsStateType => {
    return {
        ...state,
         categoryRecords: [...state.categoryRecords, { 
            "CategoryLevel": 1,
            "CategoryName": category,
            "CategoryId": 1004
          }]
    }
}

export const ProductsReducer = (state = ProductsInitialState, action: ProductsActionTypes): ProductsStateType => {
    switch (action.type) {
        case SET_ALL_PRODUCT_HEADERS:
            return updateAllProductHeaderDetails(state, action.data)
        case ADD_MAIN_CATEGORY:
            return updateMainCategories(state, action.category)
        default:
            return state
    }
}