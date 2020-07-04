import React from 'react'
import { ProductStackNavigationParamsType, RootStackParamsType } from '../../store/core/types'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import ProductScreen  from '../../scenes/products-screen/view'
import FilterProductsScreen from '../../scenes/filter-products-screen/view'



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
			</ProductStackNavigator.Navigator>
		)
	}
}