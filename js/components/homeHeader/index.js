
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Icon, View, Button, InputGroup, Input } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import navigateTo from '../../actions/sideBarNav';
import theme from '../../themes/base-theme';
import styles from './styles';

const logo = require('../../../images/doll_main_logo_v2.png');

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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch', marginLeft: 2, marginRight: 2, paddingBottom: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Button transparent style={{ paddingRight: 15 }} onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </View>
          <Image source={logo} style={{ height: 30, width: 95, resizeMode: 'contain' }} />
          <View style={{ flexDirection: 'row' }}>
            <Button transparent style={{ paddingHorizontal: 10 }} onPress={() => this.navigateTo('cart')}>
              <Icon name="md-briefcase" />
            </Button>
            <Button transparent style={{ paddingLeft: 10 }}>
              <Icon name="md-more" />
            </Button>
          </View>
        </View>
        <InputGroup borderType="regular" style={{ marginHorizontal: 10, borderColor: 'transparent', backgroundColor: '#fff' }} >
          <Icon name="ios-search" style={{ color: theme.brandPrimary }} />
          <Input placeholder="Find your deal" placeholderTextColor={theme.brandPrimary} />
        </InputGroup>
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
