
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, ScrollView, Platform } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, View, Text, Button, Icon, Card, CardItem } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  popRoute,
} = actions;

const cover = require('../../../images/cover-default.png');
const profile = require('../../../images/profile-default.png');

class Profile extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    return (
      <Container theme={theme} style={{ backgroundColor: theme.defaultBackgroundColor }}>
        <View style={{ backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} >
          <Image source={cover} style={styles.container} >
            <Button transparent onPress={() => this.popRoute()} style={{ marginTop: (Platform.OS === 'ios') ? 15 : 0, paddingLeft: 15 }} >
              <Icon name="ios-arrow-round-back-outline" style={{ fontSize: 30, lineHeight: 32, paddingRight: 10 }} />
              Account
            </Button>
          </Image>

          <View style={styles.topCard}>
            <View />
            <Text style={styles.header}>John Doe</Text>
            <Text style={styles.header2}>doe@sahusoft.com</Text>
          </View>

          <Image source={profile} style={styles.thumbnail} />

          <ScrollView >
            <Card foregroundColor="#000" transparent>
              <CardItem style={styles.card}>
                <Text style={{ fontSize: 18, lineHeight: 21 }}>My Orders</Text>
              </CardItem>
              <CardItem style={[styles.card, { marginTop: 0 }]}>
                <Text style={{ fontSize: 18, lineHeight: 21 }}>My Returns</Text>
              </CardItem>
              <CardItem style={[styles.card, { marginTop: 0 }]}>
                <Text style={{ fontSize: 18, lineHeight: 21 }}>My Wallet</Text>
              </CardItem>
              <CardItem style={[styles.card, { marginTop: 0 }]}>
                <Text style={{ fontSize: 18, lineHeight: 21 }}>Saved Adress</Text>
              </CardItem>
            </Card>
          </ScrollView>
        </View>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Profile);
