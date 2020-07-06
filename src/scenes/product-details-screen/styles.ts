import { StyleSheet } from 'react-native';
import Utils from '@virtuelabs-io/rapido-modules/src/commons/utils';

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: "5%",
        paddingVertical: 10,
    },
    pointsCard: {
        flexDirection: 'row'
    },
    pointsTitle: {
        marginVertical: 7,
        fontSize: 22,
        fontFamily: Utils.getTabTitleFontFamily()
    },
    points: {
        marginBottom: 10,
        marginHorizontal: 10
    }
})

export default Styles