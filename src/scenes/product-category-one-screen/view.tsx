import React, { Dispatch } from 'react'
import { View, Text, FlatList } from 'react-native'
import Styles from './styles'
import { ProductCategoryOneScreenProps, ProductCategoryOneScreenState, ProductCategoryOneScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from '@virtuelabs-io/rapido-modules/src/components/atoms/search/view';
import { mainCategorySearch } from '../../store/products/actions';

class ProductCategoryOneScreen extends React.Component<ProductCategoryOneScreenProps, ProductCategoryOneScreenState> {
    _isMounted = false
    state = {
        searchInput: ""
    }

    constructor(props: ProductCategoryOneScreenProps, state: ProductCategoryOneScreenState) {
        super(props)
        var options = getStackStyles(
            this.props.title,
            "plus",
            () => {
                // @ts-ignore
                // REASON: state picked up from redux
                this.props.navigation.navigate("addProductCat", {
                    title: 'Main',
                    catId: 0
                })
            }
        )

        this.props.navigation.setOptions(options)
    }

    handleCatNavigation = (item: any) => {
        // this.props.navigation.navigate("product", {
        //     title: item
        // }) 

        this.props.navigation.navigate("productCatSub", {
            title: 'Subcategory',
            mainCatId: item
        })
    }

    searchText = (searchText: string) => {
        if(this._isMounted) {
            this.setState({ searchInput: searchText })
        }
        this.props.mainCategorySearch(searchText)
    }

    componentDidMount() {
        this._isMounted = true
    }
 
    componentWillUnmount() {
        this._isMounted = false;
    }

    render(): React.ReactNode {
        return (
            <SafeAreaView style={Styles.container}>
                <Search
                    value={this.state.searchInput}
                    placeHolder="Search"
                    keyboardType="name-phone-pad"
                    onChange={this.searchText} />
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
    return {
        ...localProps,
        data: state.products.categoryRecords,
        title: state.core.rootStackParams.categorizationStack.productCatOne.title
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ProductCategoryOneScreenDispatchProps => {
    return {
        mainCategorySearch: (category: string) => dispatch(mainCategorySearch(category))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductCategoryOneScreen)