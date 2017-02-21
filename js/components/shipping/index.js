
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Platform } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Content, Text, Button, Icon, Card, CardItem } from 'native-base';

import navigateTo from '../../actions/sideBarNav';
import theme from '../../themes/base-theme';
import styles from './styles';

const {
  popRoute,
} = actions;

class Shipping extends Component {

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
          <Button transparent onPress={() => this.popRoute()} >
            <Icon name="ios-arrow-round-back-outline" style={{ fontSize: 30, lineHeight: 32, paddingRight: 10 }} />
            Shipping
          </Button>
        </Header>
        <Content padder >
          <View style={{ flex: 1 }}>
            <Card foregroundColor="#000" style={{ flex: 1.4, shadowColor: '#ebebeb', borderColor: '#ebebeb' }} >
              <CardItem style={styles.cardHeader}>
                <View style={[styles.rowBetween, styles.statusContainer]} />
                <View style={[styles.rowBetween, styles.statusTextContainer, { marginTop: 0 }]}>
                  <View >
                    <View style={[styles.statusIconView, { backgroundColor: '#42c14f' }]}>
                      <Icon name="ios-log-in" style={styles.statusIcon} />
                    </View>
                    <Text style={styles.statusText}>Login</Text>
                  </View>
                  <View>
                    <View
                      style={[styles.statusIconView,
                        { backgroundColor: theme.brandPrimary, right: -7 }]}
                    >
                      <Icon name="ios-car" style={styles.statusIcon} />
                    </View>
                    <Text style={styles.statusText}>Shipping</Text>
                  </View>
                  <View>
                    <View style={[styles.statusIconView, { backgroundColor: '#1779d2', right: -10 }]}>
                      <Icon name="logo-usd" style={styles.statusIcon} />
                    </View>
                    <Text style={styles.statusText}>Payment</Text>
                  </View>
                </View>
              </CardItem>
            </Card>
            <Card foregroundColor="#000" style={[styles.card, { marginTop: 10, flex: 4.5 }]}>
              <CardItem style={{ marginLeft: 5, marginRight: 5 }}>
                <View style={styles.rowBetween}>
                  <Text style={styles.descText}>
                      Your shipping address
                  </Text>
                  <Icon name="ios-remove-circle-outline" style={styles.closeIcon} />
                </View>
                <View style={{ borderBottomWidth: 1, paddingBottom: 10 }}>
                  <Text style={{ color: '#d0d0d0', fontWeight: '500', marginVertical: 7, fontSize: 14 }}>Primary Address
                  </Text>
                  <Text style={[styles.address, { fontSize: 15 }]}>John Doe
                  </Text>
                  <Text style={[styles.address]}>#48, BBMP Office Road, Near
                  </Text>
                  <Text style={[styles.address]}>St. Joseph School, Virat Nagar,
                  </Text>
                  <Text style={[styles.address]}>Bomanahalli
                  </Text>
                  <Text style={[styles.address]}>Bangalore - 68
                  </Text>
                  <Text style={[styles.address]}>Karnataka, India
                  </Text>
                </View>
                <Button
                  small
                  style={styles.addressButton}
                  textStyle={{ color: theme.brandPrimary }}
                > +2 More Addresses
                </Button>
              </CardItem>
            </Card>
            <Card style={[styles.card]}>
              <CardItem style={{ flex: 1 }}>
                <View style={styles.rowBetween}>
                  <Text style={styles.descText}>
                      Add new address
                  </Text>
                  <Icon name="ios-add-circle-outline" style={styles.closeIcon} />
                </View>
              </CardItem>
            </Card>
            <Button primary block textStyle={{ color: '#fff' }} onPress={() => this.navigateTo('payment')}>Proceed Payment</Button>
          </View>
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

export default connect(mapStateToProps, bindAction)(Shipping);
