const React = require('react-native');

const { StyleSheet, Platform } = React;

module.exports = StyleSheet.create({
  container: {
    width: null,
    height: null,
    flex: 1,
  },
  card: {
    borderWidth: 0,
    marginBottom: 14,
  },
  cardTop: {
    flexDirection: 'row',
    position: 'relative',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  descText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 5,
  },
  rateText: {
    color: '#000',
    alignSelf: 'flex-end',
  },
  closeIcon: {
    color: '#000',
    fontSize: 24,
    right: 0,
    top: -8,
    position: 'absolute',
  },
  bottomDesc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 5,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counterIcon: {
    color: '#000',
    fontSize: 16,
    lineHeight: 15,
  },
  counterText: {
    color: '#000',
    fontSize: 14,
    lineHeight: 15,
    marginTop: (Platform.OS === 'android') ? -3 : 0,
    marginHorizontal: 4,
  },
});
