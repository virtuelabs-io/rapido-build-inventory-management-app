export type ProductHeader = 
    {
        "CategoryId": number,
        "SKUNumber": number,
        "ProductTitle": string,
        "InStockQty": number,
        "SubCategoryId": string
    }


export type ProductCategories = {
    "CategoryLevel": number,
    "CategoryName": string,
    "CategoryId": number
}

export type ProductSubCategories = {
    "CategoryLevel": number,
    "SubCategoryId": string,
    "CategoryId": number,
    "SubCategoryName": string
}