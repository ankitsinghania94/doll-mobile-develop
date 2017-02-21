const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  Block1: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
  },
  imgBlock1: {
    width: deviceWidth,
    height: deviceWidth / 1.8,
  },
  Block2: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    position: 'relative',
    width: deviceWidth - 10,
    height: deviceWidth / 4,
  },
  imgBlock2: {
    position: 'absolute',
    width: deviceWidth - 10,
    height: deviceWidth / 4,
    top: 0,
  },
  Block3: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginRight: 0,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    position: 'relative',
    width: (deviceWidth / 2) - 5,
    height: (deviceWidth / 2) - 10,
  },
  imgBlock3: {
    position: 'absolute',
    width: (deviceWidth / 2) - 5,
    height: (deviceWidth / 2) - 10,
    top: 0,
  },
  Block4: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginRight: 0,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    position: 'relative',
    width: (deviceWidth / 2) - 10,
    height: (deviceWidth / 2) - 10,
  },
  imgBlock4: {
    position: 'absolute',
    width: (deviceWidth / 2) - 10,
    height: (deviceWidth / 2) - 10,
    top: 0,
  },
});
