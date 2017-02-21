
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { View, Text, Icon, List, ListItem, Content, Button } from 'native-base';

import navigateTo from '../../actions/sideBarNav';
import theme from '../../themes/base-theme';
import styles from './style';
//import main_menu from '../../Data/main_menu';

const cover = require('../../../images/cover-default.png');
const profile = require('../../../images/profile-default.png');
const data = require('../../Data/main_menu');

class SideBar extends Component {

  static propTypes = {
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  subMenu(obj) {
    if(obj.items)
    return (
      <Icon name= "md-add" />
    )
    else {
      return <View />

    }
  }

  test() {
    console.log("test");
  }
  menuData() {
    return data.main_menu.items.map((obj,i) => {
              return(
                    <List foregroundColor={'#000'} style={styles.list} key = {i}>
                      <ListItem button onPress={()=>{obj.items ? this.subMenu(obj) : this.test()}} iconRight={obj.items ? true : false} style={styles.links}>
                          <Text style={styles.linkText} >{obj.title}</Text>
                          {this.subMenu(obj)}
                      </ListItem>
                    </List>
              )
           });
         }

  render() {
    console.log(data.main_menu.items);
    return (
      <Content theme={theme} style={{ backgroundColor: '#fff' }} >
            {this.menuData()}
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(SideBar);
