
export const SET_ALL_PRODUCT_HEADERS = 'SET_ALL_PRODUCT_HEADERS'
export const ADD_MAIN_CATEGORY = 'ADD_MAIN_CATEGORY'
export const SEARCH_MAIN_CATEGORY = 'SEARCH_MAIN_CATEGORY'
export const SEARCH_SUB_CATEGORY = 'SEARCH_SUB_CATEGORY'
export const ADD_SUB_CATEGORY = 'ADD_SUB_CATEGORY'

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

export interface subCategorySearch {
    type: typeof SEARCH_SUB_CATEGORY
    search: string
}

export interface addSubCategory {
    type: typeof ADD_SUB_CATEGORY
    category: string,
    categoryId: number
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

export const subCategorySearch = (value: string): ProductsActionTypes => {
    return {
        type: SEARCH_SUB_CATEGORY,
        search: value
    }
}

export const addSubCategory = (category: string, categoryId: number): ProductsActionTypes => {
    return {
        type: ADD_SUB_CATEGORY,
        category: category,
        categoryId: categoryId
    }
}

export type ProductsActionTypes = 
    SetAllProductHeaders
    | addCategoryAction
    | mainCategorySearch
    | subCategorySearch
    | addSubCategory
