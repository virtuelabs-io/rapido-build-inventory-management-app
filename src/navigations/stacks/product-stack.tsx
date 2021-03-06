import React from 'react'
import { ProductStackNavigationParamsType, RootStackParamsType } from '../../store/core/types'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import ProductScreen  from '../../scenes/products-screen/view'
import FilterProductsScreen from '../../scenes/filter-products-screen/view'
import FilterProductCategoriesScreen from '../../scenes/filter-product-categories-screen/view'
import FilterSKUNumberScreen from '../../scenes/filter-sku-number-screen/view'
import ProductDetailsScreen from '../../scenes/product-details-screen/view'
import ProductAddScreen from '../../scenes/product-add-screen/view'

const ProductStackNavigator = createStackNavigator<ProductStackNavigationParamsType>();

type ProductStackScreenProps = StackScreenProps<RootStackParamsType, 'productStack'>;

export class ProductStackNavigation extends React.Component<ProductStackScreenProps> {
	constructor(props: ProductStackScreenProps) {
		super(props)
	}

	render(): React.ReactNode {
		return (
			<ProductStackNavigator.Navigator initialRouteName="product">
                <ProductStackNavigator.Screen
                    name="product"
                    component={ProductScreen}
                    initialParams={this.props.route.params.product}
                />
				<ProductStackNavigator.Screen
                    name="filterProducts"
                    component={FilterProductsScreen}
                    initialParams={this.props.route.params.filterProducts}
                /> 
				<ProductStackNavigator.Screen
                    name="filterProductCategories"
                    component={FilterProductCategoriesScreen}
                    initialParams={this.props.route.params.filterProductCategories}
                />
                <ProductStackNavigator.Screen
                    name="filterSKUNumber"
                    component={FilterSKUNumberScreen}
                    initialParams={this.props.route.params.filterSKUNumber}
                /> 
                <ProductStackNavigator.Screen
                    name="productDetails"
                    component={ProductDetailsScreen}
                    initialParams={this.props.route.params.productDetails}
                /> 
                <ProductStackNavigator.Screen
                    name="productAdd"
                    component={ProductAddScreen}
                    initialParams={this.props.route.params.productAdd}
                /> 
			</ProductStackNavigator.Navigator>
		)
	}
}