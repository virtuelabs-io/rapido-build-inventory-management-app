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
var arr: {
    label: string,
    value: string
}[] = []

const images = [
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];
class ProductDetailsScreen extends React.Component<ProductDetailsScreenProps, ProductDetailsScreenState> {
    _isMounted = false;
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

    componentDidMount() {
        console.log('inside component did mount !!')
        this.setProductSpecification()
    }

    setProductSpecification = () => {
        arr = [
            {
                label: 'Brand Name',
                value: 'Diesel'
            }, {
                label: 'Model number',
                value: 'DZT2009'
            }, {
                label: 'Model Year',
                value: '2018'
            }, {
                label: 'Item Shape',
                value: 'Round'
            }, {
                label: 'Band Material',
                value: 'Leather'
            }, {
                label: 'Band Width',
                value: '24 millimetres'
            }, {
                label: 'Band Colour',
                value: 'Brown'
            }
            , {
                label: 'Band Size',
                value: '22'
            }
        ]

        // this.setState()
    }



    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <RTitleText>{this.props.data.name}</RTitleText>
                <Carousel
                    style='stats'
                    itemsPerInterval={3}
                    items={[{
                        label: 'Price',
                        value: this.props.data.price.toFixed(2) + " " + this.props.data.currency
                    }, {
                        label: 'MRP',
                        value: (this.props.data.price * ((100 + (this.props.data.offer * 100)) / 100)).toFixed(2) + " " + this.props.data.currency
                    }, {
                        label: 'You Save',
                        value: (this.props.data.offer * 100) + "%"
                    }]}
                />


                <Carousel
                    style='stats'
                    itemsPerInterval={3}
                    items={[
                        {
                            label: 'Qty',
                            value: this.props.data.InStockQty
                        }, {
                            label: 'Blocked Qty',
                            value: this.props.data.BlockedQty
                        }, {
                            label: 'Available Qty',
                            value: this.props.data.InStockQty - this.props.data.BlockedQty
                        }
                    ]}
                />



                <Card>
                    <Text style={Styles.pointsTitle}>Product Details</Text>
                    {this.props.data.points.map((point, i) => {
                        return (
                            <View key={i} style={Styles.pointsCard}>
                                <Entypo name="dot-single" size={24} color="black" />
                                <Text style={Styles.points}>{point}</Text>
                            </View>
                        )
                    })
                    }
                </Card>

                <Card>
                    <Text style={Styles.pointsTitle}>Product Descriptions</Text>
                    <View style={Styles.pointsCard}>
                        <Entypo name="dot-single" size={24} color="black" />
                        <Text style={Styles.points}>{this.props.data.description}</Text>
                    </View>
                </Card>

                <Card>
                    <Text style={Styles.pointsTitle}>Images</Text>
                    <BackgroundCarousel images={images} />
                </Card>


                <Text style={Styles.pointsTitle}>Product Specifications</Text>
                <Carousel
                    style='stats'
                    itemsPerInterval={2}
                    items={arr} />

















                {/* <Carousel
                    style='slide'
                    items={[{
                        title: 'Welcome, swipe to continue.',
                    }, {
                        title: 'About feature X.',
                    }, {
                        title: 'About feature Y.',
                    }]}
                />  */}
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