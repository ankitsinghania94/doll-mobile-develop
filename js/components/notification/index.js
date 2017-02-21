
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Content, Text, Button, Icon, Card, CardItem } from 'native-base';

import theme from '../../themes/base-theme';

const {
  popRoute,
} = actions;

class Notification extends Component {

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
      <Container theme={theme} style={{ backgroundColor: theme.defaultBackgroundColor }} >
        <Header style={{ justifyContent: 'flex-start', paddingTop: (Platform.OS === 'ios') ? 23 : 9 }}>
          <Button transparent onPress={() => this.popRoute()} >
            <Icon name="ios-arrow-round-back-outline" style={{ fontSize: 30, lineHeight: 32, paddingRight: 10 }} />
            Notifications
          </Button>
        </Header>

        <Content padder style={{ backgroundColor: 'transparent' }}>
          <Card style={{ marginBottom: 10 }}>
            <CardItem iconLeft>
              <Icon name="ios-notifications" style={{ color: theme.brandPrimary }} />
              <Text style={{ color: theme.brandPrimary,fontWeight: '400' }}>
                  Flat 50% off on Puma FootWear
              </Text>
              <Text note style={{ fontSize: 12,fontWeight: '400', color: theme.brandPrimary, paddingTop: -5 }}>
                  You can tell me his pass is amazing but my pass is amazing too without pressure
              </Text>
            </CardItem>
          </Card>
          <Card style={{ marginBottom: 10 }}>
            <CardItem iconLeft>
              <Icon name="ios-notifications" style={{ color: theme.brandPrimary }} />
              <Text style={{ color: theme.brandPrimary,fontWeight: '400' }}>
                  Flat 50% off on Puma FootWear
              </Text>
              <Text note style={{ fontSize: 12,fontWeight: '400', color: theme.brandPrimary, paddingTop: -5 }}>
                  You can tell me his pass is amazing but my pass is amazing too without pressure
              </Text>
            </CardItem>
          </Card>
          <Card style={{ marginBottom: 10 }} foregroundColor="#000">
            <CardItem iconLeft>
              <Icon name="ios-notifications" />
              <Text style={{fontWeight: '400'}}>Flat 50% off on Puma FootWear</Text>
              <Text note style={{ fontSize: 12, color: '#000', paddingTop: -5,fontWeight: '400' }}>
                  Perhaps the best line of all came at the very end
                  hen asked about Wayne Rooney’s role in the team
              </Text>
            </CardItem>
          </Card>
          <Card style={{ marginBottom: 10 }} foregroundColor="#000">
            <CardItem iconLeft>
              <Icon name="ios-notifications" />
              <Text style={{fontWeight: '400'}}>Flat 50% off on Puma FootWear</Text>
              <Text note style={{ fontSize: 12, color: '#000', paddingTop: -5,fontWeight: '400' }}>
                  Perhaps the best line of all came at the very end
                  when asked about Wayne Rooney’s role in the team
              </Text>
            </CardItem>
          </Card>
          <Card style={{ marginBottom: 10 }} foregroundColor="#000">
            <CardItem iconLeft>
              <Icon name="ios-notifications" />
              <Text style={{fontWeight: '400'}}>Flat 50% off on Puma FootWear</Text>
              <Text note style={{ fontSize: 12, color: '#000', paddingTop: -5,fontWeight: '400' }}>
                  Perhaps the best line of all came at the very end
                  when asked about Wayne Rooney’s role in the team
              </Text>
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
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Notification);
