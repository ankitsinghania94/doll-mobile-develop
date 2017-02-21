
import theme from '../../themes/base-theme';

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
    marginBottom: 15,
        // flex: 1
  },
  descText: {
    color: '#000',
    fontSize: 14,
  },
  cardHeader: {
    backgroundColor: '#ebebeb',
    borderColor: '#ebebeb',
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 8,
  },
  closeIcon: {
    color: '#000',
    fontSize: 18,
    alignSelf: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderID: {
    color: '#000',
    fontWeight: '500',
    fontSize: 14,
  },
  placedON: {
    color: '#000',
    fontSize: 12,
    lineHeight: 15,
  },
  fadeDesc: {
    fontSize: 11,
    lineHeight: 15,
    color: '#b0b0b0',
  },
  statusContainer: {
    alignSelf: 'stretch',
    borderTopWidth: 3,
    borderColor: '#dbdbdb',
    marginHorizontal: 15,
    marginBottom: 0,
    marginTop: 25,
  },
  statusIconView: {
    borderRadius: 20,
    height: 40,
    width: 40,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: (Platform.OS === 'ios') ? 5 : 7,
    top: -21,
  },
  statusIcon: {
    fontSize: 24,
    lineHeight: 27,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  statusText: {
    color: theme.brandPrimary,
    fontSize: 12,
    textAlign: 'center',
    marginTop: -17,
  },
  statusTextContainer: {
    marginHorizontal: 10,
    marginTop: -15,
    marginBottom: 10,
  },
  address: {
    color: '#000',
    fontWeight: '500',
    lineHeight: 16,
    fontSize: 12,
  },
  addressButton: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
    paddingHorizontal: 40,
    backgroundColor: '#dfdfdf',
  },
});
