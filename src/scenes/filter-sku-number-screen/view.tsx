import React, { Dispatch } from 'react'
import { ScrollView, View } from 'react-native'
import Styles from './styles'
import { FilterSKUNumberScreenProps, FilterSKUNumberScreenState, FilterSKUNumberScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
// import { setOrderNumberFilter } from '../../store/orders/actions';
import { Search } from '@virtuelabs-io/rapido-modules/src/components/atoms/search/view';
import { SimpleListHolder } from '@virtuelabs-io/rapido-modules/src/components/atoms/simple-list-item/view';
import { setSKUNumberFilter } from '../../store/products/actions';

class FilterSKUNumberScreen extends React.Component<FilterSKUNumberScreenProps, FilterSKUNumberScreenState> {

    state = {
        searchInput: ""
    }

    constructor(props: FilterSKUNumberScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    backNavigation = (orderNumber: number) => {
        // this.props.setOrderNumber(orderNumber)
        this.props.navigation.goBack()
    }

    searchSKUNumber = (partialOrderNumber: string) => {
        this.setState({ searchInput: partialOrderNumber })
    }

    selectOrderNumberAndNavigateBackHandler = (selectedSKUNumber: string) => {
        this.props.setSKUNumber(Number(selectedSKUNumber))
        this.props.navigation.goBack()
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <Search
                    value={this.state.searchInput}
                    placeHolder="Search for SKU Number"
                    keyboardType="number-pad"
                    onChange={this.searchSKUNumber} />
                {this.props.options.map((value, index) => {
                    return (
                        <SimpleListHolder
                            key={value}
                            value={value.toString()}
                            onSelection={this.selectOrderNumberAndNavigateBackHandler}
                        />
                    )
                } )}
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: FilterSKUNumberScreenProps): FilterSKUNumberScreenProps => {
    var SKUNumbers: number[] = []
    state.products.headerRecords.forEach(category => SKUNumbers.push(category.id))
    return {
        ...localProps,
        options: SKUNumbers
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): FilterSKUNumberScreenDispatchProps => {
    return {
        setSKUNumber: (SKUNumber: number) => dispatch(setSKUNumberFilter(SKUNumber))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(FilterSKUNumberScreen)