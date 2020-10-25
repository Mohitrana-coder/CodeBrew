//NoRecords.js
import React, { Component } from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import { Colors, Fontsize, Strings } from '../constants';
import { Icon } from 'react-native-elements';
import { logo } from '../../assets';
export default class NoRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render = () => {
    let { text, marginTopvalue, showImg, imgIcon } = this.props
    return (
      <View style={{ height: null, width: null, justifyContent: 'center', alignItems: 'center', marginTop: marginTopvalue, backgroundColor : Colors.white }}>
        <Image style = {{ height: 100, width: 100, marginBottom : 20}} source = {logo} resizeMode = 'contain'></Image>
        <Text textBreakStrategy={'simple'} textBreakStrategy={'simple'} style={styles.textStyle}>
          {text ? text : Strings.Task.norecord}
        </Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.headingblack,
    fontSize: Fontsize.norcsize
  }
});