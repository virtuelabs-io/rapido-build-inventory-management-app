import * as React from 'react';
import { View, ScrollView, Dimensions, Image } from 'react-native';
import { BackgroundCarouselProps, BackgroundCarouselState } from './types'
import Styles from './styles';
import styles from '../Carousel/Stat/styles';
import { setFilter } from '../../../store/products/actions';

const DEVICE_WIDTH = Math.round(Dimensions.get("window").width - ((19.3 * Dimensions.get("window").width) / 100));
class BackgroundCarousel extends React.Component<BackgroundCarouselProps, BackgroundCarouselState> {
    _isMounted = false;
    // private scrollRef: React.RefObject<React.Component<BackgroundCarouselProps>>;
    constructor(props: BackgroundCarouselProps) {
        super(props);
        this.state = {
            selectedIndex: 0,
            scrollRef: React.createRef()
        }
    }

    setSelectedIndex = (event: any) => {
        // width of the viewSize
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        // get current position of the scroll view
        const contentOffset = event.nativeEvent.contentOffset.x;

        const selectedIndex = Math.floor(contentOffset / viewSize)
        if (this._isMounted) {
            this.setState({ selectedIndex })
        }
    }

    componentDidMount = () => {
        this._isMounted = true;
        setInterval(() => {
            if (this._isMounted) {
                this.setState(prev => ({ selectedIndex: prev.selectedIndex === this.props.images.length - 1 ? 0 : prev.selectedIndex + 1 }),
                    () => {
                        this.state.scrollRef.current.scrollTo({
                            animated: true,
                            y: 0,
                            x: DEVICE_WIDTH * this.state.selectedIndex
                        })
                    })
            }
        }, 2000)
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    focus() {
        this.state.scrollRef.current.focus()
    }

    render(): React.ReactNode {
        const { images } = this.props
        const { selectedIndex } = this.state

        return (
            <View style={{ width: "100%" }} >
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    pagingEnabled
                    onMomentumScrollEnd={this.setSelectedIndex}
                    ref={this.state.scrollRef}>
                    {images.map((image) => (
                        <Image
                            key={image}
                            source={{ uri: image }}
                            // {require("../../../../assets/65-Rajgarhwala-Furnitures-Sofa-full.jpg")}
                            // source={{uri: image}}
                            style={Styles.backgroundImage}
                        />
                    ))}
                </ScrollView>
                <View style={Styles.circleDiv}>
                    {images.map((image, i) => (
                        <View
                            key={i}
                            style={[Styles.BlackCircle, { opacity: i === selectedIndex ? 0.5 : 1 }]} />
                    ))}
                </View>
            </View>
        )
    }
}

export default BackgroundCarousel;