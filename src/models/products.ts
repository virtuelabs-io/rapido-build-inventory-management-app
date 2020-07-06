export type ProductHeader = 
{
    "id": number,
    "fields": {
        "name": string,
        "InStockQty": number,
        "points": string[],
        "description": string,
        "price": number,
        "notes": string,
        "currency": string,
        "images": string[],
        "rating": number,
        "offer": number,
        "details": [
            "key:value",
            "key:value"
        ],
        "tags": string[],
        "category": number,
        "subcategory": string
    }
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