import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList } from 'react-native'
import Styles from './styles'
import { ProductScreenProps, ProductScreenState, ProductScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import { Order } from '@virtuelabs-io/rapido-modules/src/components/organisms/order/view';
import { Product } from '../../components/organisms/product/view';

class ProductScreen extends React.Component<ProductScreenProps, ProductScreenState> {

    constructor(props: ProductScreenProps, state: ProductScreenState) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(
            this.props.route.params.title
        ))
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <View>
                <FlatList
                style={Styles.screen}
                data={this.props.data}
                renderItem={(product) => <Product data={product.item} onPress={() => console.log(product.item.ProductTitle)} />}
                keyExtractor={order => order.SKUNumber.toString()}
            />
                </View>
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: ProductScreenProps): ProductScreenProps => {
    return {
        ...localProps,
        data: state.products.headerRecords
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ProductScreenDispatchProps => {
    return {
        
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductScreen)