import React, { Dispatch } from 'react'
import { ScrollView } from 'react-native'
import Styles from './styles'
import { ProductDetailsScreenProps, ProductDetailsScreenState, ProductDetailsScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { RTitleText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-title-text/view';

class ProductDetailsScreen extends React.Component<ProductDetailsScreenProps, ProductDetailsScreenState> {
    constructor(props: ProductDetailsScreenProps, state: ProductDetailsScreenState) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(
            this.props.route.params.id.toString(),
            "edit-3",
            () => {
                // @ts-ignore
                // REASON: state picked up from redux
                
             }
        ))
    }

    

    

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <RTitleText>{this.props.data.name}</RTitleText>
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: ProductDetailsScreenProps): ProductDetailsScreenProps => {
    var selProduct = state.products.headerRecords.filter((product) => product.id == localProps.route.params.id)
    return {
        ...localProps,
        data: selProduct[0].fields
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ProductDetailsScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductDetailsScreen)