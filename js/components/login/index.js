
import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Text, InputGroup, Input, Button, Icon, View } from 'native-base';

import login from './login-theme';
import styles from './styles';

const {
  replaceAt,
} = actions;

const logo = require('../../../images/logo.png');

class Login extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      scroll: false,
    };
  }

  replaceRoute(route) {
    this.props.replaceAt('login', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container>
        <Content theme={login} style={{ backgroundColor: login.backgroundColor }} >
          <Image source={logo} style={styles.shadow} />
          <View style={styles.inputContainer}>
            <View style={{ marginBottom: 20 }}>
              <InputGroup>
                <Icon name="ios-person" />
                <Input
                  placeholder="Email"
                  onChangeText={email => this.setState({ email })}
                />
              </InputGroup>
            </View>

            <View style={{ marginBottom: 20 }}>
              <InputGroup >
                <Icon name="ios-unlock-outline" />
                <Input
                  placeholder="Password"
                  secureTextEntry
                  onChangeText={password => this.setState({ password })}
                />
              </InputGroup>
            </View>

            <Button transparent style={styles.forgot} textStyle={{ fontSize: 14, textDecorationLine: 'underline' }}>
                    Forgot Login details?
            </Button>
            <Button style={styles.login} onPress={() => this.replaceRoute('home', { email: this.state.email, password: this.state.password })}>
                Login
            </Button>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 20 }}>
            <Button style={[styles.logoButton, { backgroundColor: '#3541A9' }]}>
              <Icon name="logo-facebook" />
            </Button>
            <Button style={[styles.logoButton, { backgroundColor: '#b63a48' }]}>
              <Icon name="logo-google" />
            </Button>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text>Do not have an account? </Text>
            <Button
              transparent
              style={styles.transparentButton}
              textStyle={{ lineHeight: (Platform.OS === 'ios') ? 15 : 18, textDecorationLine: 'underline' }}
            >
              Sign up here
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}


function bindActions(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Login);
