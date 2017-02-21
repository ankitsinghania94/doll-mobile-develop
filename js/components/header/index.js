import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Icon, View, Button } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import navigateTo from '../../actions/sideBarNav';
import styles from './styles';

const logo = require('../../../images/strapsale-logo.png');

class Header extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <View style={styles.header} >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
          <Image
            source={logo}
            style={{ height: 30, width: 95, resizeMode: 'contain' }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button transparent style={{ paddingHorizontal: 10 }}>
            <Icon name="ios-heart" />
          </Button>
          <Button transparent style={{ paddingHorizontal: 10 }} onPress={() => this.navigateTo('cart')}>
            <Icon name="ios-cart-outline" />
          </Button>
          <Button transparent style={{ paddingLeft: 10 }}>
            <Icon name="md-more" />
          </Button>
        </View>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Header);
