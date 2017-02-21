
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Picker, ActionSheetIOS, Platform } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Content, Text, Button, Icon, Card, CardItem, InputGroup, Input } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  popRoute,
} = actions;

const Item = Picker.Item;
const BUTTONS = [
  'Net Banking',
  'Debit/Credit card',
  'Cash on Delivery',
  'Cancel',
];
const CANCEL_INDEX = 3;
const icici = require('../../../images/icici.png');
const sbi = require('../../../images/sbi.png');
const axis = require('../../../images/axis.png');

class Payment extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      selected1: 'key1',
      selected2: 'pay1',
      clicked: BUTTONS[0],
    };
  }

  onValueChange(key: string, value: string) {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  showActionSheet() {
    const that = this;
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
    },
        (buttonIndex) => {
          const selected = BUTTONS[buttonIndex];
          if (selected !== 'Cancel') {
            that.setState({ clicked: BUTTONS[buttonIndex] });
          }
        }
    );
  }

  render() {
    return (
      <Container theme={theme} style={{ backgroundColor: theme.defaultBackgroundColor }}>
        <Header style={{ justifyContent: 'flex-start', paddingTop: (Platform.OS === 'ios') ? 23 : 9 }}>
          <Button transparent onPress={() => this.popRoute()} >
            <Icon name="ios-arrow-round-back-outline" style={{ fontSize: 30, lineHeight: 32, paddingRight: 10 }} />
            Payment
          </Button>
        </Header>
        <Content padder >
          <View style={{ flex: 1 }}>
            <Card foregroundColor="#000" transparent style={{ shadowColor: '#ebebeb', borderColor: '#ebebeb' }}>
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
            <Card style={[styles.card]}>
              {
                (Platform.OS === 'ios') ?
                  <CardItem button onPress={() => this.showActionSheet()}>
                    <View style={styles.rowBetween}>
                      <Text style={styles.descText}>
                        {this.state.clicked}
                      </Text>
                      <Icon name="ios-arrow-down-outline" style={styles.closeIcon} />
                    </View>
                  </CardItem>
                  :
                    <View style={{ backgroundColor: '#fff', paddingHorizontal: 7 }}>
                      <Picker
                        mode="dropdown"
                        selectedValue={this.state.selected2}
                        onValueChange={() => this.onValueChange('selected2')}
                      >
                        <Item label="Net Banking" value="pay0" />
                        <Item label="Debit/Credit Card" value="pay1" />
                        <Item label="Cash on Delivery" value="pay3" />
                      </Picker>
                    </View>
              }
            </Card>
            <Card style={[styles.card]}>
              <CardItem>
                <Text style={{ color: '#787878', fontSize: 14 }}>Tap to select bank</Text>
                <View style={[styles.rowBetween, { paddingHorizontal: 30, paddingVertical: 15 }]}>
                  <Image style={styles.bankImage} source={icici} />
                  <Image style={styles.bankImage} source={sbi} />
                  <Image style={styles.bankImage} source={axis} />
                </View>
                <Picker
                  selectedValue={this.state.selected1}
                  onValueChange={() => this.onValueChange('selected1')}
                >
                  <Item label="ICICI Bank" value="key0" />
                  <Item label="State Bank of India" value="key1" />
                  <Item label="Axis Bank" value="key3" />
                </Picker>
              </CardItem>
            </Card>
            <Card style={[styles.card]} foregroundColor="#000">
              <CardItem>
                <View style={{ marginBottom: 10 }}>
                  <Text style={styles.labelText}>Card Number *</Text>
                  <InputGroup borderType="regular" >
                    <Input placeholder="0000-0000-0000-0000" placeholderTextColor="#b6b6b6" />
                  </InputGroup>
                </View>
                <View style={{ marginBottom: 10 }}>
                  <Text style={styles.labelText}>Card Name *</Text>
                  <InputGroup borderType="regular" >
                    <Input placeholder="Name written on card" placeholderTextColor="#b6b6b6" />
                  </InputGroup>
                </View>
                <View style={{ flexDirection: 'row', flex: 3 }}>
                  <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={styles.labelText}>MM</Text>
                      <InputGroup borderType="regular" style={{ width: 70, marginRight: 10 }} >
                        <Input placeholder="MM" placeholderTextColor="#b6b6b6" />
                      </InputGroup>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={styles.labelText}>YY</Text>
                      <InputGroup borderType="regular" style={{ width: 70 }} >
                        <Input placeholder="YY" placeholderTextColor="#b6b6b6" />
                      </InputGroup>
                    </View>
                  </View>
                  <View style={{ marginBottom: 10, flex: 1 }}>
                    <View style={{ alignSelf: 'flex-end' }}>
                      <Text style={[styles.labelText, { textAlign: 'left' }]}>CVV</Text>
                      <InputGroup borderType="regular" style={{ width: 70 }}>
                        <Input placeholder="CVV" placeholderTextColor="#b6b6b6" />
                      </InputGroup>
                    </View>
                  </View>
                </View>
              </CardItem>
            </Card>
            <Card style={[styles.card]}>
              <CardItem>
                <View style={styles.rowBetween}>
                  <Text style={styles.descText}>
                      Apply Promo/Wallet
                  </Text>
                  <Icon name="ios-remove-circle-outline" style={styles.closeIcon} />
                </View>
                <Text style={{ color: '#b3b3b3', fontSize: 13, lineHeight: 15, paddingBottom: 5 }}>Available wallet Cash INR 0</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                  <InputGroup borderType="regular" style={{ marginRight: 10, flex: 1 }} >
                    <Input placeholder="Promo code" placeholderTextColor="#b6b6b6" />
                  </InputGroup>
                  <Button primary style={{ height: 40, alignSelf: 'flex-end' }} textStyle={{ color: '#fff' }}> Apply </Button>
                </View>
              </CardItem>
            </Card>
            <Button primary block textStyle={{ color: '#fff' }}>Make Payment</Button>
          </View>
        </Content>
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

export default connect(mapStateToProps, bindAction)(Payment);
