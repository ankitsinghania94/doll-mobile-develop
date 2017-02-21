
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Platform } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Content, Text, Button, Icon, Card, CardItem, Thumbnail } from 'native-base';

import navigateTo from '../../actions/sideBarNav';
import theme from '../../themes/base-theme';
import styles from './styles';

const cartItem1 = require('../../../images/cart-item1.png');
const cartItem2 = require('../../../images/cart-item2.png');

const {
  popRoute,
} = actions;

class MyOrder extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Container theme={theme} style={{ backgroundColor: theme.defaultBackgroundColor }}>
        <Header style={{ justifyContent: 'flex-start', paddingTop: (Platform.OS === 'ios') ? 23 : 9 }}>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-round-back-outline" style={{ fontSize: 30, lineHeight: 32, paddingRight: 10 }} />
            My Order
          </Button>
        </Header>
        <Content padder>
          <Card foregroundColor="#000" style={styles.card}>
            <CardItem style={styles.cardHeader}>
              <View style={styles.rowBetween}>
                <View>
                  <Text style={styles.orderID}>OrderID: 9809608703 </Text>
                  <Text style={styles.placedON}>Placed On: 23 August 2016</Text>
                </View>
                <Button small onPress={() => this.navigateTo('shipping')} style={{ backgroundColor: '#cdcdcd' }}>DETAILS</Button>
              </View>
            </CardItem>
            <CardItem>
              <View style={styles.cardTop}>
                <Thumbnail source={cartItem1} size={100} square />
                <View style={{ flex: 1, paddingLeft: 15 }}>
                  <Text style={styles.descText}>
                    Wool Blend Coat {'\n'}Long Cashmere Trench
                  </Text>
                  <View style={[styles.rowBetween, { paddingTop: 15 }]}>
                    <View>
                      <Text style={styles.fadeDesc}>Status:</Text>
                      <Text style={[styles.fadeDesc, { color: '#219f2e' }]}>Delivered Successfully</Text>
                      <Text style={styles.fadeDesc}>Last update: 24 August 2016</Text>
                      <Text style={styles.fadeDesc}>Delivered on: 25 August 2016</Text>
                    </View>
                    <Icon name="ios-refresh" style={styles.refreshIcon} />
                  </View>
                </View>
              </View>
              <View style={[styles.rowBetween, { position: 'relative', margin: 30, marginBottom: 0 }]}>
                <View style={styles.statusBar} />
              </View>
              <View style={[styles.rowBetween, styles.statusTextContainer, { marginTop: 15 }]}>
                <View>
                  <Icon name="ios-checkmark-circle" style={[styles.statusIcon, { position: 'absolute', top: -33, left: 15 }]} />
                  <Text style={styles.statusText}>PLACED</Text>
                </View>
                <View>
                  <Icon name="ios-checkmark-circle" style={[styles.statusIcon, { position: 'absolute', top: -33, left: 35 }]} />
                  <Text style={styles.statusText}>DISPATCHED</Text>
                </View>
                <View>
                  <Icon name="ios-checkmark-circle" style={[styles.statusIcon, { position: 'absolute', top: -33, right: 15 }]} />
                  <Text style={styles.statusText}>DELIVERED</Text>
                </View>
              </View>
              <Button small primary onPress={() => this.navigateTo('track')} style={{ alignSelf: 'flex-end', marginTop: 15 }} textStyle={{ color: '#fff' }}>TRACK</Button>
            </CardItem>
          </Card>
          <Card foregroundColor="#000" style={styles.card}>
            <CardItem style={styles.cardHeader}>
              <View style={styles.rowBetween}>
                <View>
                  <Text style={styles.orderID}>OrderID: 9809608704 </Text>
                  <Text style={styles.placedON}>Placed On: 22 August 2016</Text>
                </View>
                <Button small onPress={() => this.navigateTo('shipping')} style={{ backgroundColor: '#cdcdcd' }}>DETAILS</Button>
              </View>
            </CardItem>
            <CardItem >
              <View style={styles.cardTop}>
                <Thumbnail source={cartItem2} size={100} square />
                <View style={{ flex: 1, paddingLeft: 15 }}>
                  <Text style={styles.descText}>
                    Party wear Gown {'\n'}Smooth Satin Material
                  </Text>
                  <View style={[styles.rowBetween, { paddingTop: 15 }]}>
                    <View>
                      <Text style={styles.fadeDesc}>Status:</Text>
                      <Text style={[styles.fadeDesc, { color: '#e0c50b' }]}>In Transit</Text>
                      <Text style={styles.fadeDesc}>Last update: 24 August 2016</Text>
                      <Text style={styles.fadeDesc}>Expected date: 25 August 2016</Text>
                    </View>
                    <Icon name="ios-refresh" style={styles.refreshIcon} />
                  </View>
                </View>
              </View>
              <View style={[styles.rowBetween, { position: 'relative', margin: 30, marginBottom: 0 }]}>
                <View style={styles.statusBar} />
              </View>
              <View style={[styles.rowBetween, styles.statusTextContainer, { marginTop: 15 }]}>
                <View>
                  <Icon name="ios-checkmark-circle" style={[styles.statusIcon, { position: 'absolute', top: -33, left: 15 }]} />
                  <Text style={styles.statusText}>PLACED</Text>
                </View>
                <View>
                  <Icon name="ios-checkmark-circle" style={[styles.statusIcon, { position: 'absolute', top: -33, left: 35 }]} />
                  <Text style={styles.statusText}>DISPATCHED</Text>
                </View>
                <View>
                  <Icon name="ios-clock" style={[styles.statusIcon, { position: 'absolute', top: -33, right: 15, color: '#e0c50b' }]} />
                  <Text style={styles.statusText}>IN TRANSIT</Text>
                </View>
              </View>
              <Button small primary onPress={() => this.navigateTo('track')} style={{ alignSelf: 'flex-end', marginTop: 15, justifyContent: 'center' }} textStyle={{ color: '#fff' }}>TRACK</Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(MyOrder);
