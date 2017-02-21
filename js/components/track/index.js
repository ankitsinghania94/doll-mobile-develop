
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Platform } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Content, Text, Button, Icon, Card, CardItem } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  popRoute,
} = actions;

class Track extends Component {

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
        <Header style={{ justifyContent: 'flex-start', paddingTop: (Platform.OS === 'ios') ? 23 : 9 }}>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-round-back-outline" style={{ fontSize: 30, lineHeight: 32, paddingRight: 10 }} />
            Order_number: 9809608703
          </Button>
        </Header>

        <Content padder>
          <Card style={{ marginBottom: 10 }} foregroundColor="#000">
            <CardItem style={{ padding: 27 }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.leftBar]} />
                <View>
                  <View>
                    <View style={styles.dot} />
                    <Text style={{ color: '#000', marginBottom: 7, backgroundColor: 'transparent' }}>DELIVERED
                    </Text>
                  </View>
                  <Text note style={[styles.text, { color: '#000' }]}>Industry: My pass is amazing too with.</Text>
                  <Text note style={[styles.text, { color: '#909090' }]}>24 October 2016</Text>
                  <Text note style={[styles.text, { color: '#000', marginTop: 6 }]}>Industry: My pass is amazing too with.</Text>
                  <Text note style={[styles.text, { color: '#909090' }]}>24 October 2016</Text>
                  <Text note style={[styles.text, { color: '#000', marginTop: 6 }]}>Industry: My pass is amazing too with.</Text>
                  <Text note style={[styles.text, { color: '#909090' }]}>24 October 2016</Text>
                  <View>
                    <View style={[styles.dot, { top: 8 }]} />
                    <Text style={{ color: '#000', marginVertical: 7 }}>DISPATCHED</Text>
                  </View>
                  <Text note style={[styles.text, { color: '#000' }]}>Industry: My pass is amazing too with.</Text>
                  <Text note style={[styles.text, { color: '#909090' }]}>25 October 2016</Text>
                  <Text note style={[styles.text, { color: '#000', marginTop: 6 }]}>Industry: My pass is amazing too with.</Text>
                  <Text note style={[styles.text, { color: '#909090' }]}>25 October 2016</Text>
                  <Text note style={[styles.text, { color: '#000', marginTop: 6 }]}>Industry: My pass is amazing too with.</Text>
                  <Text note style={[styles.text, { color: '#909090' }]}>25 October 2016</Text>
                  <View>
                    <View style={[styles.dot, { top: 10 }]} />
                    <Text style={{ color: '#000', marginTop: 7 }}>PLACED</Text>
                  </View>
                </View>
              </View>
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

export default connect(mapStateToProps, bindAction)(Track);
