import { ProductHeader, ProductCategories } from "../../models/products";

export type ProductsStateType = {
    headerRecords: ProductHeader[],
    categoryRecords: ProductCategories[]
}