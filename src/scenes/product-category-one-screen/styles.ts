import { StyleSheet } from 'react-native';
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';
import Utils from '@virtuelabs-io/rapido-modules/src/commons/utils';

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        // paddingHorizontal: "50",
        // paddingTop: 5
    },
    container: {
        flex: 1
    },
    settingsItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: Colors.codes.silver
    },
    settingsInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    itemTextStyle: {
        fontFamily: Utils.getFontFamily(),
        fontSize: 22
    }
})

export default Styles