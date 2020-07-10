import React, { Dispatch } from 'react'
import { ScrollView, Text, View, Image, Dimensions } from 'react-native'
import Styles from './styles'
import { ProductAddScreenProps, ProductAddScreenState, ProductAddScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { RTitleText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-title-text/view';
import { Card } from '@virtuelabs-io/rapido-modules/src/components/atoms/card/view';
import { Entypo } from '@expo/vector-icons';
import { RText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-text/view';
import { Carousel } from '../../components/organisms/Carousel';
import BackgroundCarousel from '../../components/organisms/Background-carousel/view';


class ProductAddScreen extends React.Component<ProductAddScreenProps, ProductAddScreenState> {
    _isMounted = false;
    constructor(props: ProductAddScreenProps, state: ProductAddScreenState) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(
            this.props.route.params.title
        ))
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <View>
                    <Text>New Product Added</Text>
                </View>
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: ProductAddScreenProps): ProductAddScreenProps => {
    
    return {
        ...localProps
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ProductAddScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductAddScreen)