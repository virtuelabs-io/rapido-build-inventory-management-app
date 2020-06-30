import { ProductHeader, ProductCategories } from "./products"

export type DummyDataType = {
    productHeaderDetails: ProductHeader[],
    ProductCategoryDetails: ProductCategories[]
}

export const DummyData: DummyDataType = {
    productHeaderDetails: require('../assets/data/product-header.json'),
    ProductCategoryDetails: require('../assets/data/product-categories.json')
}

