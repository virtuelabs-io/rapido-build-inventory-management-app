import React, { Dispatch } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Styles from './styles'
import { ProductDetailsScreenProps, ProductDetailsScreenState, ProductDetailsScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { RTitleText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-title-text/view';
import { Card } from '@virtuelabs-io/rapido-modules/src/components/atoms/card/view';
import { Entypo } from '@expo/vector-icons';
import { RText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-text/view';

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
                <Card>
                    <Text style={Styles.pointsTitle}>Product Details</Text>
                    {this.props.data.points.map((point) => {
                        return (
                            <View style={Styles.pointsCard}>
                                <Entypo name="dot-single" size={24} color="black" />
                                <Text style={Styles.points}>{point}</Text>
                            </View>
                        )
                    })
                    }
                </Card>
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: ProductDetailsScreenProps): ProductDetailsScreenProps => {
    var selProduct = state.products.headerRecords.filter((product) => product.id == localProps.route.params.id)
    console.log(selProduct[0].fields.points)
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