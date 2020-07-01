import { StyleSheet } from 'react-native';
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';
import Utils from '@virtuelabs-io/rapido-modules/src/commons/utils';

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        flex: 1,
        margin: 10,
        marginTop: 10
    },
    viewInput: {
        justifyContent: 'flex-start',
        alignItems: "stretch",
        flexWrap: 'nowrap',
        width: "100%",
        flexDirection: 'row',
        marginBottom: 10
    },
    input: {
        borderRadius: 10,
        borderWidth: 2,
        width: '60%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
        borderColor: 'black',
        fontFamily: Utils.getFontFamily(),
        fontSize: 15
    }
})

export default Styles