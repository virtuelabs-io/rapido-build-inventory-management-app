import { StyleSheet } from 'react-native'
import Utils from '@virtuelabs-io/rapido-modules/src/commons/utils';
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';

export const styles = StyleSheet.create({
  stat: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
    flexBasis: '33%',
    flex: 1,
    borderRadius: 10,
    maxWidth: '33%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary
  },
  statText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
    fontFamily: Utils.getFontFamily()
  },
  statHold: {
    width: '100%',
    marginBottom: 8
  },
  statLabel: {
    width: '100%',
    textAlign: 'left',
    fontSize: 11,
    paddingTop: 5,
    fontFamily: Utils.getFontFamily()
  },
});

export default styles;