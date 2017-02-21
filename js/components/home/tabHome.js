
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';
import { Content } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

const sale = require('../../../images/sale.png');
const tie = require('../../../images/tie.png');
const necktie = require('../../../images/neckties.png');
const sportShoe = require('../../../images/sport-shoe.png');
const businessMan = require('../../../images/businessman.png');
const hanger = require('../../../images/hanger.png');
const handbag = require('../../../images/handbag.png');
const suitedMan = require('../../../images/suited-man.png');

class TabHome extends Component { // eslint-disable-line react/prefer-stateless-function

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Content style={{ backgroundColor: theme.defaultBackgroundColor }}>
        <TouchableOpacity>
          <View style={styles.Block1}>
            <Image source={sale} style={styles.imgBlock1} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Block2}>
            <Image source={tie} style={styles.imgBlock2} />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <View style={styles.Block3}>
              <Image source={necktie} style={styles.imgBlock3} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Block4}>
              <Image source={sportShoe} style={styles.imgBlock4} />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.Block1}>
            <Image source={businessMan} style={styles.imgBlock1} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Block2}>
            <Image source={hanger} style={styles.imgBlock2} />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <View style={styles.Block3}>
              <Image source={handbag} style={styles.imgBlock3} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Block4}>
              <Image source={suitedMan} style={styles.imgBlock4} />
            </View>
          </TouchableOpacity>
        </View>
      </Content>
    );
  }
}

export default connect(null)(TabHome);
