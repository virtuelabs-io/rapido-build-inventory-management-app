import React, { Dispatch } from 'react'
import { ScrollView, Button, View } from 'react-native'
import { RText, RButton } from '@virtuelabs-io/rapido-modules/src/components/atoms'
import Styles from './styles'
import { FilterProductsScreenProps, FilterProductsScreenState, FilterProductsScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { FilterHolder } from '@virtuelabs-io/rapido-modules/src/components/molecules/filter-holder/view'
import { ProductsFilters } from '../../store/products/types'
import { setFilter } from '../../store/products/actions'

class FilterProductsScreen extends React.Component<FilterProductsScreenProps, FilterProductsScreenState> {
    constructor(props: FilterProductsScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    backNavigation = () => {
        this.props.setFilters(this.props.data.productsFilters)
        this.props.navigation.goBack()
    }

    orderNumberFilterScreenNavigationHandler = () => {
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
                    navigationFunc={this.orderNumberFilterScreenNavigationHandler}
                />
                <FilterHolder
                    icon="box"
                    filterTitle="Categories"
                    navigationFunc={this.orderNumberFilterScreenNavigationHandler}
                />
                <FilterHolder
                    icon="box"
                    filterTitle="Expected Purchases"
                    navigationFunc={this.orderNumberFilterScreenNavigationHandler}
                />
                <View style={Styles.buttonContianer}>
                    <RButton name="Filter" onPress={this.backNavigation} />
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