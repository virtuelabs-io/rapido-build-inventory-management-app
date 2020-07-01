import React, { Dispatch } from 'react'
import { ScrollView, View, TouchableWithoutFeedback, Text, FlatList } from 'react-native'
import { ListItem, SearchBar, Avatar } from "react-native-elements";
import { List, Body } from 'native-base'
import Styles from './styles'
import { ProductCategoryOneScreenProps, ProductCategoryOneScreenState, ProductCategoryOneScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import { Order } from '@virtuelabs-io/rapido-modules/src/components/organisms/order/view';
import { Product } from '../../components/organisms/product/view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

class ProductCategoryOneScreen extends React.Component<ProductCategoryOneScreenProps, ProductCategoryOneScreenState> {

    constructor(props: ProductCategoryOneScreenProps, state: ProductCategoryOneScreenState) {
        super(props)
        var options = getStackStyles(
            this.props.title,
            "plus",
            () => {
                // @ts-ignore
                // REASON: state picked up from redux
                this.props.navigation.navigate("addProductCat")
            }
        )

        this.props.navigation.setOptions(options)
    }

    handleCatNavigation = (item: any) => {
        this.props.navigation.navigate("product", {
            title: item
        })
    }

    render(): React.ReactNode {
        return (
            <SafeAreaView style={Styles.container}>
                <FlatList
                    data={this.props.data}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={Styles.settingsItemContainer} onPress={() => this.handleCatNavigation(item.CategoryId)}>
                                <View style={Styles.settingsInfoContainer}>
                                    <Text style={Styles.itemTextStyle}>   {item.CategoryName}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item.CategoryId.toString()}
                />
            </SafeAreaView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: ProductCategoryOneScreenProps): ProductCategoryOneScreenProps => {
    console.log(state.products)
    return {
        ...localProps,
        data: state.products.categoryRecords,
        title: state.core.rootStackParams.productStack.productCatOne.title
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ProductCategoryOneScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductCategoryOneScreen)