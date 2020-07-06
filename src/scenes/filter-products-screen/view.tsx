import React, { Dispatch } from 'react'
import { ScrollView, Button, View, Text } from 'react-native'
import { RText, RButton } from '@virtuelabs-io/rapido-modules/src/components/atoms'
import Styles from './styles'
import { FilterProductsScreenProps, FilterProductsScreenState, FilterProductsScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { FilterHolder } from '@virtuelabs-io/rapido-modules/src/components/molecules/filter-holder/view'
import { ProductsFilters } from '../../store/products/types'
import { setFilter } from '../../store/products/actions'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from 'react-native-elements'
import Utils from '@virtuelabs-io/rapido-modules/src/commons/utils';

class FilterProductsScreen extends React.Component<FilterProductsScreenProps, FilterProductsScreenState> {
    constructor(props: FilterProductsScreenProps) {
        super(props)
        var options = getStackStyles(this.props.route.params.title)

        options = {
            ...options,
            headerRight: () => (
                <TouchableOpacity onPress={this.handleResetFilter} style={{marginRight: 15}}>
                    <Text style={{color: '#0000FF', fontFamily: Utils.getFontFamily()}}>Clear Filter</Text>
                </TouchableOpacity>
            )
        }
        this.props.navigation.setOptions(options)
    }

    handleResetFilter = () => {
        this.props.data.productsFilters.filterSKUNumber = 0
        this.props.data.productsFilters.filterProductCategories = 0
        this.props.navigation.navigate('product', {
            title: ''
        })
    }

    applyFilters = () => {
        this.props.setFilters(this.props.data.productsFilters)
        this.props.navigation.navigate('product', {
            title: ''
        })
    }

    SKUNumberFilterScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate('filterSKUNumber',{
            title: 'SKU Number'
        })
    }

    productCategoriesFilterScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate('filterProductCategories',{
            title: 'Categories'
        })
    }

    assigneeFilterScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate('assigneeFilter')
    }

    dueDateFilterScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate('dueDateFilter')
    }

    orderStatusFilterScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate('filterProductCategories')
    }

    createdOnFilterScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate('createdOnFilter')
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <FilterHolder
                    icon="box"
                    filterTitle="SKU Number"
                    navigationFunc={this.SKUNumberFilterScreenNavigationHandler}
                />
                <FilterHolder
                    icon="box"
                    filterTitle="Categories"
                    navigationFunc={this.productCategoriesFilterScreenNavigationHandler}
                />
                <FilterHolder
                    icon="box"
                    filterTitle="Expected Purchases"
                    navigationFunc={this.createdOnFilterScreenNavigationHandler}
                />
                <View style={Styles.buttonContianer}>
                    <RButton name="Apply Filter" onPress={this.applyFilters} />
                </View>
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: FilterProductsScreenProps): FilterProductsScreenProps => {
    return {
        ...localProps,
        data:{
            productsFilters: state.products.ProductsFilters
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): FilterProductsScreenDispatchProps => {
    return {
        setFilters: (productsFilter: ProductsFilters) => dispatch(setFilter(productsFilter))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(FilterProductsScreen)