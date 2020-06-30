
export const SET_ALL_PRODUCT_HEADERS = 'SET_ALL_PRODUCT_HEADERS'

export interface SetAllProductHeaders {
    type: typeof SET_ALL_PRODUCT_HEADERS
    data: any
}

export type ProductsActionTypes = SetAllProductHeaders

export const SetAllProductHeaders = (data: any): ProductsActionTypes => {
    return {
        type: SET_ALL_PRODUCT_HEADERS,
        data: data
    }
}