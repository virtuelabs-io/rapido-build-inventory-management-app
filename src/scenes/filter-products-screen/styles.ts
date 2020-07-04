import { StyleSheet } from 'react-native';
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';

export const Styles = StyleSheet.create({
  screen: {
        flex: 1,
        paddingHorizontal: "5%",
        backgroundColor: Colors.secondary
    },
    buttonContianer: {
        paddingVertical: 10,
        paddingHorizontal: "10%"
    }
})

export default Styles