import React, { Dispatch } from 'react'
import { ScrollView, View, TouchableWithoutFeedback, Text, FlatList } from 'react-native'
import { ListItem, SearchBar, Avatar } from "react-native-elements";
import { List, Body } from 'native-base'
import Styles from './styles'
import { AddProductCategoryScreenParamProps, AddProductCategoryScreenState, AddProductCategoryScreenDispatchProps, AddProductCategoryScreenProps  } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import { Order } from '@virtuelabs-io/rapido-modules/src/components/organisms/order/view';
import { Product } from '../../components/organisms/product/view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

class AddProductCategoryScreen extends React.Component<AddProductCategoryScreenProps, AddProductCategoryScreenState> {

    constructor(props: AddProductCategoryScreenProps, state: AddProductCategoryScreenState) {
        super(props)
        var options = getStackStyles(
            this.props.title
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
            <Text>Product Cat Screen</Text>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: AddProductCategoryScreenProps): AddProductCategoryScreenProps => {
    console.log(state.products)
    return {
        ...localProps,
        data: state.products.categoryRecords,
        title: state.core.rootStackParams.productStack.addProductCat.title
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): AddProductCategoryScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(AddProductCategoryScreen)