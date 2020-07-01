import React from 'react'
import { ProductStackNavigationParamsType, RootStackParamsType } from '../../store/core/types'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import ProductScreen  from '../../scenes/products-screen/view'
import ProductCategoryOneScreen from '../../scenes/product-category-one-screen/view'
import AddProductCategoryScreen from '../../scenes/add-product-category-screen/view'


const ProductStackNavigator = createStackNavigator<ProductStackNavigationParamsType>();

type ProductStackScreenProps = StackScreenProps<RootStackParamsType, 'productStack'>;

export class ProductStackNavigation extends React.Component<ProductStackScreenProps> {
	constructor(props: ProductStackScreenProps) {
		super(props)
	}

	render(): React.ReactNode {
		return (
			<ProductStackNavigator.Navigator initialRouteName="productCatOne">
                <ProductStackNavigator.Screen
                    name="product"
                    component={ProductScreen}
                    initialParams={this.props.route.params.product}
                />
				<ProductStackNavigator.Screen
                    name="productCatOne"
                    component={ProductCategoryOneScreen}
                    initialParams={this.props.route.params.productCatOne}
                />
				<ProductStackNavigator.Screen
                    name="addProductCat"
                    component={AddProductCategoryScreen}
                    initialParams={this.props.route.params.addProductCat}
                />
			</ProductStackNavigator.Navigator>
		)
	}
}