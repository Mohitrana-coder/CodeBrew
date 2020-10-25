// Splash.js
import React, { Component } from 'react';
import { View, PermissionsAndroid, Image } from 'react-native';
import { Navigation } from '../../codebrew';
import { Icon } from 'react-native-elements'
import { Colors } from '../components';
import { setTaskData } from '../redux';
import { connect } from 'react-redux';
import { logo } from '../assets';
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    }
  }
  componentDidMount() {
    this.checkPermission();
    this.getTaskFromApi();
    setTimeout(() => {
      this.setState({ visible: false })
    }, 3000)

  }

  checkPermission = async() => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Code Brew",
          message:
            "Location permission required to get better results.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

   getTaskFromApi = async () => {
    try {
       const response = await fetch('https://my-json-server.typicode.com/vijaysharma0207/demo/posts');
       const json = await response.json();
       let { dispatch } = this.props
       dispatch(setTaskData(json))
       console.log("---Task-data---", json);
     } catch (error) {
       console.error("----error----",error);
     }
  };

  render() {
    let { visible } = this.state;
    return (
      visible ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor : Colors.white }}>
          <Image style = {{ height: 200, width: 200}} source = { logo} resizeMode = 'contain'></Image>
        </View>
        :
        <Navigation />
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(Splash)