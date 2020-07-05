import { ProductHeader, ProductCategories, ProductSubCategories } from "../../models/products";
import { DummyData } from "../../models";

export type ProductsFilters = {
    filterProductCategories: string,
    filterSKUNumber: number
}

export type ProductsStateType = {
    headerRecords: ProductHeader[],
    categoryRecords: ProductCategories[],
    subCategoryRecords: ProductSubCategories[],
    ProductsFilters: ProductsFilters
}