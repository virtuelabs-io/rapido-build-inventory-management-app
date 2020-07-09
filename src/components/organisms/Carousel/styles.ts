  
import { StyleSheet } from 'react-native'
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';

export const styles = StyleSheet.create({
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  container: {
    justifyContent: 'center',
    width: '100%',
    backgroundColor: Colors.secondary,
    shadowColor: Colors.palePrimary,
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 0
  },
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden'
  },
  bullets: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 20,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  imageViewer: {
    justifyContent: 'center'
  }
});

export default styles;