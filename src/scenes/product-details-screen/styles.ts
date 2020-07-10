import { StyleSheet, Dimensions } from 'react-native';
import Utils from '@virtuelabs-io/rapido-modules/src/commons/utils';

const height = (Number(Dimensions.get("window").height) + 200);
const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: "5%",
        paddingVertical: 10
    },
    pointsCard: {
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    pointsTitle: {
        marginVertical: 7,
        fontSize: 22,
        fontFamily: Utils.getTabTitleFontFamily()
    },
    points: {
        marginBottom: 10,
        marginRight: 20,
        // marginRight: 10,
        fontFamily: Utils.getFontFamily()
    }
})

export default Styles