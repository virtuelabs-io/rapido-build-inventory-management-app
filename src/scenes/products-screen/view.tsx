import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList } from 'react-native'
import Styles from './styles'
import { ProductScreenProps, ProductScreenState, ProductScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import { Product } from '../../components/organisms/product/view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RAntIconButton } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-ant-icon-button/view';
import navigations from '../../navigations';

class ProductScreen extends React.Component<ProductScreenProps, ProductScreenState> {

    constructor(props: ProductScreenProps, state: ProductScreenState) {
        super(props)
        var options = getStackStyles(
            this.props.title,
            "plus",
            () => {
                 console.log('add products clicked !')
            }
        )
        options = {
            ...options,
            headerLeft: () => (
                <RAntIconButton
                    icon="filter"
                    size={28}
                    onPress={() => {
                        // @ts-ignore
                        // REASON: state picked up from redux
                        this.props.navigation.navigate('filterProducts', {
                            title: "Filters"
                        })
                    }}
                />
            )
        }
        this.props.navigation.setOptions(options)
    }

    render(): React.ReactNode {
        return (
            <SafeAreaView style={Styles.screen}>
                <FlatList
                style={Styles.screen}
                data={this.props.data}
                renderItem={(product) => <Product data={product.item} onPress={() => console.log("Hi")} />}
                keyExtractor={(product) => product.id.toString()}
            />
            </SafeAreaView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: ProductScreenProps): ProductScreenProps => {
    if(state.products.ProductsFilters.filterSKUNumber || state.products.ProductsFilters.filterProductCategories) {
        return {
            ...localProps,
            data: state.products.headerRecords.filter((product) => (product.id === state.products.ProductsFilters.filterSKUNumber)
            || (product.fields.category === state.products.ProductsFilters.filterProductCategories)
            ),
            title: localProps.route.params.title
        }
    } else {
        return {
            ...localProps,
            data: state.products.headerRecords,
            //.filter(product => (product.CategoryId == localProps.route.params.mainCatId && product.SubCategoryId == localProps.route.params.subCatId )),
            title: localProps.route.params.title
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ProductScreenDispatchProps => {
    return {
        
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductScreen)