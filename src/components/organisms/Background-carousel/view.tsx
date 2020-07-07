import * as React from 'react';
import { View, ScrollView, Dimensions, Image } from 'react-native';
import { BackgroundCarouselProps, BackgroundCarouselState } from './types'
import Styles from './styles';
import styles from '../Carousel/Stat/styles';
import { setFilter } from '../../../store/products/actions';

const DEVICE_WIDTH = Dimensions.get("window").width-(10*Dimensions.get("window").width/100);

class BackgroundCarousel extends React.Component<BackgroundCarouselProps, BackgroundCarouselState> {
    scrollRef = React.createRef();
    constructor(props: BackgroundCarouselProps) {
        super(props);

        this.state = {
            selectedIndex: 0
        }
        
    }

    setSelectedIndex = (event: any) => {
        // width of the viewSize
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        // get current position of the scroll view
        const contentOffset = event.nativeEvent.contentOffset.x;

        const selectedIndex = Math.floor(contentOffset / viewSize)
        this.setState({ selectedIndex })
    }

    render(): React.ReactNode {
        const { images } = this.props
        const { selectedIndex } = this.state

        return (
                <View style={{ width: "100%"}} >
                <ScrollView 
                    showsHorizontalScrollIndicator={false}
                    horizontal 
                    pagingEnabled 
                    onMomentumScrollEnd={this.setSelectedIndex}>
                    {images.map((image) => (
                        <Image 
                            key={image}
                            source={require("../../../../assets/65-Rajgarhwala-Furnitures-Sofa-full.jpg")}
                            // source={{uri: image}}
                            style={Styles.backgroundImage}
                        />
                    ))}
                </ScrollView>
                <View style={Styles.circleDiv}>
                    {images.map((image, i) => (
                        <View 
                            key={i}
                            style={[Styles.whiteCircle, {opacity: i === selectedIndex ? 0.5 : 1}]} />
                    ))}
                </View>
            </View>
        )
    }
}

export default BackgroundCarousel;