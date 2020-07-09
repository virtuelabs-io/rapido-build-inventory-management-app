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
import { mainCategorySearch, subCategorySearch } from '../../store/products/actions';

class ProductCategorySubScreen extends React.Component<ProductCategorySubScreenProps, ProductCategorySubScreenState> {

    state = {
        searchInput: ""
    }
    _isMounted = false

    constructor(props: ProductCategorySubScreenProps, state: ProductCategorySubScreenState) {
        super(props)
        var options = getStackStyles(
            this.props.title,
            "plus",
            () => {
                // @ts-ignore
                // REASON: state picked up from redux
                this.props.navigation.navigate("addProductCat", {
                    title: 'Sub',
                    catId: this.props.route.params.mainCatId
                })
            }
        )

        this.props.navigation.setOptions(options)
    }

    handleCatNavigation = (item: any) => {
        this.props.navigation.navigate("product", {
            title: "Products",
            mainCatId: item.CategoryId,
            subCatId: item.SubCategoryId
        })
    }

    searchText = (searchText: string) => {
        if(this._isMounted) {
            this.setState({ searchInput: searchText })
        }
        console.log(`Searched partial text is ${searchText}`)
        this.props.subCategorySearch(searchText)
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
                            <TouchableOpacity style={Styles.settingsItemContainer} onPress={() => this.handleCatNavigation(item)}>
                                <View style={Styles.settingsInfoContainer}>
                                    <Text style={Styles.itemTextStyle}>   {item.SubCategoryName}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item.SubCategoryId}
                />
            </SafeAreaView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: ProductCategorySubScreenProps): ProductCategorySubScreenProps => {
    return {
        ...localProps,
        data: state.products.subCategoryRecords.filter(product => product.CategoryId == localProps.route.params.mainCatId),
        title: state.core.rootStackParams.categorizationStack.productCatSub.title
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ProductCategorySubScreenDispatchProps => {
    return {
        subCategorySearch: (category: string) => dispatch(subCategorySearch(category))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductCategorySubScreen)