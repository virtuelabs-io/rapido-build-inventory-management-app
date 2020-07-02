
export const SET_ALL_PRODUCT_HEADERS = 'SET_ALL_PRODUCT_HEADERS'
export const ADD_MAIN_CATEGORY = 'ADD_MAIN_CATEGORY'
export const SEARCH_MAIN_CATEGORY = 'SEARCH_MAIN_CATEGORY'

export interface SetAllProductHeaders {
    type: typeof SET_ALL_PRODUCT_HEADERS
    data: any
}

export interface addCategoryAction {
    type: typeof ADD_MAIN_CATEGORY
    category: string
}

export interface mainCategorySearch {
    type: typeof SEARCH_MAIN_CATEGORY
    search: string
}

export const SetAllProductHeaders = (data: any): ProductsActionTypes => {
    return {
        type: SET_ALL_PRODUCT_HEADERS,
        data: data
    }
}

export const addCategory = (category: string): ProductsActionTypes => {
    return {
        type: ADD_MAIN_CATEGORY,
        category: category
    }
}

export const mainCategorySearch = (value: string): ProductsActionTypes => {
    return {
        type: SEARCH_MAIN_CATEGORY,
        search: value
    }
}

export type ProductsActionTypes = 
    SetAllProductHeaders
    | addCategoryAction
    | mainCategorySearch
