import React, { Dispatch } from 'react'
import { ScrollView, View, Text, FlatList } from 'react-native'
import Styles from './styles'
import { ProductCategorySubScreenProps, ProductCategorySubScreenState, ProductCategorySubScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from '@virtuelabs-io/rapido-modules/src/components/atoms/search/view';
import { Feather } from '@expo/vector-icons';
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';
import { mainCategorySearch } from '../../store/products/actions';

class ProductCategorySubScreen extends React.Component<ProductCategorySubScreenProps, ProductCategorySubScreenState> {

    state = {
        searchInput: ""
    }

    constructor(props: ProductCategorySubScreenProps, state: ProductCategorySubScreenState) {
        super(props)
        var options = getStackStyles(
            this.props.title,
            "plus",
            () => {
                // @ts-ignore
                // REASON: state picked up from redux
                this.props.navigation.navigate("addProductCat", {
                    title: 'Main'
                })
            }
        )

        this.props.navigation.setOptions(options)
    }

    handleCatNavigation = (item: any) => {
        this.props.navigation.navigate("product", {
            title: item
        })
    }

    searchText = (searchText: string) => {
        this.setState({ searchInput: searchText })
        console.log(`Searched partial text is ${searchText}`)
        this.props.mainCategorySearch(searchText)
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

const mapStatetoProps = (state: AppState, localProps: ProductCategorySubScreenProps): ProductCategorySubScreenProps => {
    return {
        ...localProps,
        data: state.products.categoryRecords,
        title: state.core.rootStackParams.productStack.productCatSub.title
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ProductCategorySubScreenDispatchProps => {
    return {
        mainCategorySearch: (category: string) => dispatch(mainCategorySearch(category))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductCategorySubScreen)