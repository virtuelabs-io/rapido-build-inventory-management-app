import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList } from 'react-native'
import Styles from './styles'
import { ProductScreenProps, ProductScreenState, ProductScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import { Product } from '../../components/organisms/product/view';
import { SafeAreaView } from 'react-native-safe-area-context';

class ProductScreen extends React.Component<ProductScreenProps, ProductScreenState> {

    constructor(props: ProductScreenProps, state: ProductScreenState) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(
            this.props.title
        ))
    }

    render(): React.ReactNode {
        return (
            <SafeAreaView style={Styles.screen}>
                <FlatList
                style={Styles.screen}
                data={this.props.data}
                renderItem={(product) => <Product data={product.item} onPress={() => console.log("Hi")} />}
                keyExtractor={(product) => product.SKUNumber.toString()}
            />
            </SafeAreaView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: ProductScreenProps): ProductScreenProps => {
    return {
        ...localProps,
        data: state.products.headerRecords.filter(product => (product.CategoryId == localProps.route.params.mainCatId && product.SubCategoryId == localProps.route.params.subCatId )),
        title: localProps.route.params.title
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ProductScreenDispatchProps => {
    return {
        
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductScreen)