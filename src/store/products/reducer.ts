import { ProductsActionTypes, SET_ALL_PRODUCT_HEADERS, ADD_MAIN_CATEGORY, SEARCH_MAIN_CATEGORY, SEARCH_SUB_CATEGORY, ADD_SUB_CATEGORY } from './actions';
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

const searchMainCategory = (state: ProductsStateType, search: string): ProductsStateType => {
    state.categoryRecords = DummyData.ProductCategoryDetails
    var searchedCat = state.categoryRecords.filter((category) => (category.CategoryName.toLowerCase().includes(search.toLowerCase())  ))
    return {
        ...state,
         categoryRecords: searchedCat
    }
}

const searchSubCategory = (state: ProductsStateType, search: string): ProductsStateType => {
    state.subCategoryRecords = DummyData.ProductSubCategories
    var searchedCat = state.subCategoryRecords.filter((category) => (category.SubCategoryName.toLowerCase().includes(search.toLowerCase())  ))
    return {
        ...state,
         subCategoryRecords: searchedCat
    }
}

const updateSubCategory = (state: ProductsStateType, category: string, categoryId: number): ProductsStateType => {
    console.log('-------Anirup-------')
    console.log(category, categoryId)
    return {
        ...state,
         subCategoryRecords: [...state.subCategoryRecords, { 
            "CategoryLevel": 2,
            "SubCategoryName": category,
            "CategoryId": categoryId,
            "SubCategoryId": categoryId+'a'
          }]
    }
}

export const ProductsReducer = (state = ProductsInitialState, action: ProductsActionTypes): ProductsStateType => {
    switch (action.type) {
        case SET_ALL_PRODUCT_HEADERS:
            return updateAllProductHeaderDetails(state, action.data)
        case ADD_MAIN_CATEGORY:
            return updateMainCategories(state, action.category)
        case SEARCH_MAIN_CATEGORY:
            return searchMainCategory(state, action.search)
        case SEARCH_SUB_CATEGORY:
            return searchSubCategory(state, action.search)    
        case ADD_SUB_CATEGORY:
            return updateSubCategory(state, action.category, action.categoryId)
        default:
            return state
    }
}