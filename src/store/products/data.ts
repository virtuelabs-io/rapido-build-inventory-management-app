import { ProductsStateType } from './types'
import { DummyData } from '../../models/dummy-data';


export const ProductsInitialState: ProductsStateType = {
    headerRecords: DummyData.productHeaderDetails,
    categoryRecords: DummyData.ProductCategoryDetails,
    subCategoryRecords: DummyData.ProductSubCategories,
    ProductsFilters: {
        filterProductCategories: 0,
        filterSKUNumber: 0
    }
}