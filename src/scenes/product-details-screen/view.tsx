import React, { Dispatch } from 'react'
import { ScrollView, Text, View, Image, Dimensions } from 'react-native'
import Styles from './styles'
import { ProductDetailsScreenProps, ProductDetailsScreenState, ProductDetailsScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { RTitleText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-title-text/view';
import { Card } from '@virtuelabs-io/rapido-modules/src/components/atoms/card/view';
import { Entypo } from '@expo/vector-icons';
import { RText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-text/view';
import { Carousel } from '../../components/organisms/Carousel';
import BackgroundCarousel from '../../components/organisms/Background-carousel/view';



const { height } = Dimensions.get("window");

const images = [
    "1",
    "2",
    "3",
    "4",
    '../../../assets/65-Rajgarhwala-Furnitures-Sofa-full.jpg',
];
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

    onContentSizeChange = (contentWidth: any, contentHeight: any) => {
        this.setState({ screenHeight: contentHeight })
    }







    render(): React.ReactNode {
        const enableScroll = true //Number(this.state.screenHeight) > height
        return (
            <ScrollView style={Styles.screen}
                scrollEnabled={enableScroll}
                onContentSizeChange={this.onContentSizeChange}>
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

                <Card>
                <Text style={Styles.pointsTitle}>Images</Text>
                    <BackgroundCarousel images={images} />
                </Card>

                {/* <Carousel
                    style='stats'
                    itemsPerInterval={3}
                    items={[{
                        label: 'TODAY',
                        value: 1,
                    }, {
                        label: 'THIS WEEK',
                        value: 39,
                    }, {
                        label: 'THIS MONTH',
                        value: 120,
                    }, {
                        label: 'YESTERDAY',
                        value: 3,
                    }, {
                        label: 'LAST WEEK',
                        value: 25,
                    }, {
                        label: 'LAST MONTH',
                        value: 175,
                    }]}
                />

                <Carousel
                    style='slide'
                    items={[{
                        title: 'Welcome, swipe to continue.',
                    }, {
                        title: 'About feature X.',
                    }, {
                        title: 'About feature Y.',
                    }]}
                /> */}

                



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