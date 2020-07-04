import React from 'react'
import { ProductStackNavigationParamsType, RootStackParamsType, CategorizationStackNavigationParamsType } from '../../store/core/types'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import ProductScreen  from '../../scenes/products-screen/view'
import ProductCategoryOneScreen from '../../scenes/product-category-one-screen/view'
import AddProductCategoryScreen from '../../scenes/add-product-category-screen/view'
import ProductCategorySubScreen from '../../scenes/product-category-sub-screen/view'



const CategorizationStackNavigator = createStackNavigator<CategorizationStackNavigationParamsType>();

type CategorizationStackScreenProps = StackScreenProps<RootStackParamsType, 'categorizationStack'>;

export class CategorizationStackNavigation extends React.Component<CategorizationStackScreenProps> {
	constructor(props: CategorizationStackScreenProps) {
		super(props)
	}

	render(): React.ReactNode {
		return (
			<CategorizationStackNavigator.Navigator initialRouteName="productCatOne">
                {/* <ProductStackNavigator.Screen
                    name="product"
                    component={ProductCategoryOneScreen}
                    initialParams={this.props.route.params.mainCategory}
                /> */}
                <CategorizationStackNavigator.Screen
                    name="productCatOne"
                    component={ProductCategoryOneScreen}
                    initialParams={this.props.route.params.productCatOne}
                />
				<CategorizationStackNavigator.Screen
                    name="addProductCat"
                    component={AddProductCategoryScreen}
                    initialParams={this.props.route.params.addProductCat}
                />
                <CategorizationStackNavigator.Screen
                    name="productCatSub"
                    component={ProductCategorySubScreen}
                    initialParams={this.props.route.params.productCatSub}
                />
                <CategorizationStackNavigator.Screen
                    name="product"
                    component={ProductScreen}
                    initialParams={this.props.route.params.product}
                />
			</CategorizationStackNavigator.Navigator>
		)
	}
}