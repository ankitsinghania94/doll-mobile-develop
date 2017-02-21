const React = require('react-native');

const { StyleSheet, Dimensions,Platform } = React;

module.exports = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width,
    marginLeft: (Platform.OS === 'ios') ? undefined : -15
  },
});
