import React, { Dispatch } from 'react'
import { ScrollView, View, TouchableWithoutFeedback, Text, FlatList } from 'react-native'
import { ListItem, SearchBar, Avatar } from "react-native-elements";
import { List, Body } from 'native-base'
import Styles from './styles'
import { AddProductCategoryScreenParamProps, AddProductCategoryScreenState, AddProductCategoryScreenDispatchProps, AddProductCategoryScreenProps  } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import { Order } from '@virtuelabs-io/rapido-modules/src/components/organisms/order/view';
import { Product } from '../../components/organisms/product/view';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@virtuelabs-io/rapido-modules/src/components/atoms/card/view';
import { DetailsHolder } from '@virtuelabs-io/rapido-modules/src/components/molecules/detail-holder/view';
import { ItemDetails } from '@virtuelabs-io/rapido-modules/src/components/molecules/item-details/view';
import { DetailsHeader } from '@virtuelabs-io/rapido-modules/src/components/molecules/detail-header/view';
import { MultiLineInput } from '@virtuelabs-io/rapido-modules/src/components/atoms/multi-line-input/view';
import { EditHolder } from '@virtuelabs-io/rapido-modules/src/components/molecules/edit-holder/view';
import { RText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-text/view';
import { RButton, Search } from '@virtuelabs-io/rapido-modules/src/components/atoms';

class AddProductCategoryScreen extends React.Component<AddProductCategoryScreenProps, AddProductCategoryScreenState> {

    state = {
        addCategory: ""
    }

    constructor(props: AddProductCategoryScreenProps, state: AddProductCategoryScreenState) {
        super(props)
        var options = getStackStyles(
            this.props.title
        )

        this.props.navigation.setOptions(options)
    }

    handleCatNavigation = (item: any) => {
        this.props.navigation.navigate("product", {
            title: item
        })
    }

    handleAddCategory = (partialAssignee: string) => {
        this.setState({ addCategory: partialAssignee })
        console.log(`Searched partial text is ${partialAssignee}`)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.container}>
                <Card>
                    <DetailsHolder name="Category Level" value={this.props.route.params.title} />
                    
                    <View style={Styles.viewInput}>
                        <RText>New Category</RText>
                        <TextInput style={Styles.input} value={this.state.addCategory}
                        onChangeText={this.handleAddCategory} />
                    </View>
                    <RButton name="Save" onPress={() => console.log()} />
                    
                </Card>
            </View>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: AddProductCategoryScreenProps): AddProductCategoryScreenProps => {
    return {
        ...localProps,
        data: state.products.categoryRecords,
        title: state.core.rootStackParams.productStack.addProductCat.title
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): AddProductCategoryScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(AddProductCategoryScreen)