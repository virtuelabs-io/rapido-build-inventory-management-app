import { ProductHeader, ProductCategories, ProductSubCategories } from "./products"

export type DummyDataType = {
    productHeaderDetails: ProductHeader[],
    ProductCategoryDetails: ProductCategories[],
    ProductSubCategories: ProductSubCategories[]
}

export const DummyData: DummyDataType = {
    productHeaderDetails: require('../assets/data/product-header.json'),
    ProductCategoryDetails: require('../assets/data/product-categories.json'),
    ProductSubCategories: require('../assets/data/product-sub-categories.json')
}

