import { ProductHeader, ProductCategories, ProductSubCategories } from "../../models/products";
import { DummyData } from "../../models";

export type ProductsFilters = {
    filterProductCategories: typeof DummyData.ProductCategoryDetails
}

export type ProductsStateType = {
    headerRecords: ProductHeader[],
    categoryRecords: ProductCategories[],
    subCategoryRecords: ProductSubCategories[],
    ProductsFilters: ProductsFilters
}