import { StyleSheet, Dimensions } from 'react-native';

const DEFAULT_COLOR = '#6c0e16';

const window = Dimensions.get('window');
const imageWidth = (window.width/4)+30;
const imageHeight = window.width/2;

export const styles = StyleSheet.create({
    body: {
      flex: 1,
    },
    scene: {
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    child: {
      width: window.width/3,
      alignItems: 'center',
      height: imageHeight+35,
      marginTop: 10
    },
    logo: {
      width: 100,
      height: 50,
      marginBottom: 5,
    },
    row: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: 50,
      textAlign: 'right'
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: 50,
      marginLeft: 10,
      marginRight: 10,
    },
    header: {
      backgroundColor: DEFAULT_COLOR
    },
    tabInitial: {
      width: window.width,
    },
    tab: {
      backgroundColor: DEFAULT_COLOR,
    },
    textoItem: {
      textAlign: 'right',
      textAlignVertical: 'center',
      color: '#555'
    },
  });