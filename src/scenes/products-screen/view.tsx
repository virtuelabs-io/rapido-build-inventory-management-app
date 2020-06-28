import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text } from 'react-native'
import Styles from './styles'
import { ProductScreenProps, ProductScreenState, ProductScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';

class ProductScreen extends React.Component<ProductScreenProps, ProductScreenState> {

    constructor(props: ProductScreenProps, state: ProductScreenState) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(
            this.props.route.params.title
        ))
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <View>
                    <Text>Product Screen</Text>
                </View>
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: ProductScreenProps): ProductScreenProps => {
    return {
        ...localProps
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ProductScreenDispatchProps => {
    return {
        
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductScreen)