  
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  container: {
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#fbfbfb',
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#fcfcfc',
    shadowOpacity: 1,
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 5
    },
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    // justifyContent: 'center'
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