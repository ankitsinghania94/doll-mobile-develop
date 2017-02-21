
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, ActionSheetIOS, Picker, Platform } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Content, Text, Button, Icon, Card, CardItem } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './style';

const {
  popRoute,
} = actions;

const Item = Picker.Item;
const BUTTONS = [
  'Women',
  'Men',
  'Kids',
  'Cancel',
];
const CANCEL_INDEX = 3;
const product1 = require('../../../images/product1.png');
const product2 = require('../../../images/product2.png');
const product3 = require('../../../images/product3.png');
const product4 = require('../../../images/product4.png');

class Product extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      clicked: BUTTONS[0],
      list: true,
      selected1: 'key1',
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

  toggleView() {
    this.setState({
      list: !this.state.list,
    });
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
    const items = [
      {
        image: product1,
        name: 'Leather Shoes',
        price: 'INR 5200',
        exPrice: 'INR 7700',
        discount: '25% off',
      },
      {
        image: product2,
        name: 'Tie and Cufflinks',
        price: 'INR 768',
        exPrice: 'INR 1700',
        discount: '60% off',
      },
      {
        image: product3,
        name: 'Ladies Handbag',
        price: 'INR 1200',
        exPrice: 'INR 1700',
        discount: '5% off',
      },
      {
        image: product4,
        name: 'Leather Belt',
        price: 'INR 800',
        exPrice: 'INR 1600',
        discount: '50% off',
      },
    ];
    return (
      <Container theme={theme} style={{ backgroundColor: theme.defaultBackgroundColor }}>
        <Header style={{ justifyContent: 'flex-start', paddingTop: (Platform.OS === 'ios') ? 23 : 9 }}>
          <Button transparent onPress={() => this.popRoute()} >
            <Icon name="ios-arrow-round-back-outline" style={{ fontSize: 30, lineHeight: 32, paddingRight: 10 }} />
            Products
          </Button>
        </Header>

        <Content padder style={{ backgroundColor: 'transparent' }}>
          <View style={styles.buttonContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Button onPress={() => this.toggleView()} style={styles.topButtons}>
                <Icon name={(this.state.list) ? 'ios-grid-outline' : 'ios-list'} />
              </Button>
              <Button style={[styles.topButtons, { marginLeft: 10 }]}>
                <Icon name="ios-podium" />
              </Button>
            </View>
            {
              (Platform.OS === 'ios') ?
                <Button iconRight onPress={() => this.showActionSheet()} style={styles.topButtons}>
                  {this.state.clicked}
                  <Icon name="ios-arrow-down-outline" style={{ fontSize: 20, lineHeight: 26 }} />
                </Button>
                :
                  <View style={styles.pickerContainer}>
                    <Picker
                      mode="dropdown"
                      style={{ height: 45, padding: 5 }}
                      selectedValue={this.state.selected1}
                      onValueChange={() => this.onValueChange('selected1')}
                    >
                      <Item label="Men" value="key0" />
                      <Item label="Women" value="key1" />
                      <Item label="Kids" value="key3" />
                    </Picker>
                  </View>
            }
          </View>
          <Card
            dataArray={items}
            transparent
            foregroundColor="#000"
            style={styles.card}
            renderRow={item =>
              <CardItem style={{ padding: 10, marginBottom: 10, backgroundColor: '#fff' }} >
                <Image source={item.image} style={styles.productItem} />
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                  <Text style={styles.counterText}>{item.name}</Text>
                  <Text style={{ color: theme.brandPrimary }}>{item.price}</Text>
                  <View style={styles.descContainer}>
                    <Text style={[styles.fadedText, { textDecorationLine: 'line-through' }]}>{item.exPrice}</Text>
                    <Text style={styles.fadedText}>{item.discount}</Text>
                  </View>
                </View>
              </CardItem>
              }
          />
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

export default connect(mapStateToProps, bindAction)(Product);
