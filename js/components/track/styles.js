import theme from '../../themes/base-theme';

const React = require('react-native');

const { StyleSheet } = React;


module.exports = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  leftBar: {
    borderLeftWidth: 3,
    paddingLeft: 20,
    position: 'relative',
    alignSelf: 'stretch',
    borderColor: theme.brandPrimary,
  },
  dot: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: theme.brandPrimary,
    left: -31,
    top: 0,
  },
  text: {
    fontSize: 11,
    lineHeight: 15,
  },
});
