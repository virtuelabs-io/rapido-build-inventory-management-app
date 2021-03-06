import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';
import Utils from '@virtuelabs-io/rapido-modules/src/commons/utils';

const DEVICE_WIDTH = Math.round(Dimensions.get("window").width-((19.3*Dimensions.get("window").width)/100));

const Styles = StyleSheet.create({
    container: {
       // flex: 1
    },
    backgroundImage: {
        height: 300,
        width: DEVICE_WIDTH,
        marginBottom: 15
    },
    circleDiv: {
        position: "absolute",
        bottom: 15,
        height: 10,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        padding: 20,
    },
    BlackCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "#000000"
    }
})

export default Styles