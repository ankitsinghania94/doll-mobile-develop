
import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Tabs } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import HeaderContent from './../homeHeader';
import TabHome from './tabHome';
import TabOffer from './tabOffer';
import theme from '../../themes/base-theme';

class Home extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Container theme={theme}>
        <Header
          style={{ flexDirection: 'column',
            height: 110,
            elevation: 0,
            paddingTop: (Platform.OS === 'ios') ? 20 : 3,
            justifyContent: 'space-between',
          }}
        >
          <HeaderContent />
        </Header>

        <View >
          <Tabs >
            <TabHome tabLabel="Home" />
            <TabOffer tabLabel="Offers" />
          </Tabs>
        </View>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
