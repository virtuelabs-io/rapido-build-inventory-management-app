import { ProductHeader } from "./products"

export type DummyDataType = {
    productHeaderDetails: ProductHeader[]
}

export const DummyData: DummyDataType = {
    productHeaderDetails: require('../assets/data/product-header.json')
}

