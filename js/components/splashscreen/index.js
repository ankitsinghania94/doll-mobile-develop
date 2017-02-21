
import React, { Component } from 'react';
import { Image } from 'react-native';

const launchScreen = require('../../../images/launchscreen.png');

export default class SplashPage extends Component {

  static propTypes = {
    navigator: React.PropTypes.shape({}),
  }
  componentWillMount() {
    const navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'login',
      });
    }, 1500);
  }

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Image source={launchScreen} style={{ flex: 1, height: null, width: null }} />
    );
  }
}
