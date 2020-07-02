import { ProductHeader, ProductCategories, ProductSubCategories } from "../../models/products";

export type ProductsStateType = {
    headerRecords: ProductHeader[],
    categoryRecords: ProductCategories[],
    subCategoryRecords: ProductSubCategories[]
}