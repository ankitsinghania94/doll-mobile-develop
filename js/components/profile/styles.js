

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

const deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
    width: null,
    height: deviceHeight / 3,
  },
  topCard: {
    backgroundColor: '#fff',
    height: 140,
    alignSelf: 'stretch',
    position: 'relative',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: 'visible',
  },
  thumbnail: {
    alignSelf: 'center',
    top: (deviceHeight / 3) - 60,
    left: (deviceWidth / 2) - 60,
    borderWidth: 1,
    borderColor: '#fff',
    width: 120,
    height: 120,
    position: 'absolute',
    borderRadius: 60,
  },
  header: {
    color: '#000',
    bottom: 20,
    fontWeight: '500',
  },
  header2: {
    color: '#000',
    bottom: 20,
  },
  card: {
    margin: 10,
    paddingVertical: 30,
    backgroundColor: '#fff',
  },
});
