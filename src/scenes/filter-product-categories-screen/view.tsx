import React, { Dispatch } from 'react'
import { ScrollView, View } from 'react-native'
import Styles from './styles'
import { FilterProductCategoriesScreenProps, FilterProductCategoriesScreenState, FilterProductCategoriesScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { SimpleListHolder } from '@virtuelabs-io/rapido-modules/src/components/atoms/simple-list-item/view';
import { DummyData } from '../../models';
import { setProductCategoryFilter } from '../../store/products/actions'

class FilterProductCategoriesScreen extends React.Component<FilterProductCategoriesScreenProps, FilterProductCategoriesScreenState> {

    constructor(props: FilterProductCategoriesScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    selectOrderStatusAndNavigateBackHandler = (productCategory: string) => {
        console.log('product category '+ productCategory)
        var selCatId: number = 0
        this.props.options.forEach((category) => {
            if(category.CategoryName === productCategory) {
                selCatId = category.CategoryId
            }
        })
        this.props.setProductCategoryFilter(selCatId)
        this.props.navigation.goBack()
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                {this.props.options.map((value, index) => {
                    return (
                        <SimpleListHolder
                            key={value.CategoryId}
                            value={value.CategoryName}
                            onSelection={this.selectOrderStatusAndNavigateBackHandler}
                        />
                    )
                })}
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: FilterProductCategoriesScreenProps): FilterProductCategoriesScreenProps => {
    return {
        ...localProps,
        options: state.products.categoryRecords
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): FilterProductCategoriesScreenDispatchProps => {
    return {
        setProductCategoryFilter: (category: number) => dispatch(setProductCategoryFilter(category))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(FilterProductCategoriesScreen)