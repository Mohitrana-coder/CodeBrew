//Task.js
import React, { Component } from "react"
import { SafeAreaView, View, FlatList, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { Strings, TaskItem, NoRecords, Colors } from '../components';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Header, Icon, Badge } from 'react-native-elements';
import Toast, { DURATION } from 'react-native-easy-toast';
import Geolocation from '@react-native-community/geolocation';
var geodist = require('geodist')
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Descriptions: '',
      showTasks: false,
      noRCtext: 'No Data'

    }
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(info => {
      let { coords } = info
      let { longitude, latitude } = coords
      var current = { lat: parseFloat(latitude), lon: parseFloat(longitude) }
      var codebrew = { lat: 30.704649, lon: 76.717873 }
      var dist = geodist(codebrew, current, { exact: true, unit: 'km', limit: 15 })
      if (!dist) {
        this.setState({ noRCtext: 'You are too far away from Company' })
      }
      this.setState({ showTasks: dist })
    });

  }

  floatingButtonClick = () => {
    this.refs.toast.show('Sorry, functionality is not implemented yet.');

  }
  ItemClick = (events) => {
    let { props } = this
    let { navigation } = props
    let { navigate } = navigation
    navigate(Strings.NavigationKeys.CreateEvent, { events: events })
  }

  customLeftComponent = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.green, borderRadius: wp(100), padding: 2 }}>
          <Icon
            name='star'
            type='antdesign'
            color={Colors.white}
            size={15}
            containerStyle={{ backgroundColor: Colors.green, borderRadius: wp(100), padding: 5 }}
            onPress={() => console.log('hello')} />
        </View>
        <Text style={{ textAlign: 'center', textAlignVertical: 'center', marginLeft: 10, fontSize: 16, fontWeight: 'bold' }}>0</Text>
      </View>
    )
  }

  customRightComponent = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Badge status='error' badgeStyle={{ backgroundColor: Colors.blue, position: 'absolute', right: 7, top: 1 }}></Badge>
          <Icon
            name='notifications-outline'
            type='ionicon'
            color={Colors.black}
            size={25}
            containerStyle={{ paddingHorizontal: 10 }}
            onPress={() => console.log('hello')} />

        </View>

        <Icon
          name='user'
          type='evilicon'
          color={Colors.black}
          size={35}

          onPress={() => console.log('hello')} />
      </View>
    )
  }

  render() {
    let { props, state } = this;
    let { showTasks, noRCtext } = state;
    let { navigation, tasklist } = props;
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column', }}>
        <View style={{ flex: 1 }}>
          <Header
            leftComponent={this.customLeftComponent()}
            placement='left'
            containerStyle={{ backgroundColor: Colors.white, paddingHorizontal: 15, }}
            centerComponent={{ text: Strings.Task.title, style: { color: Colors.blue, fontSize: 12, backgroundColor: Colors.light_blue, borderRadius: 50, paddingHorizontal: 15, paddingVertical: 5 } }}
            rightComponent={this.customRightComponent()}
          />
          <View style={{ flex: 1, justifyContent: 'center', backgroundColor: Colors.white }}>
            {tasklist && tasklist.length > 0 && showTasks ?
              <FlatList
                style={{ margin: 0, marginTop: 50, }}
                data={tasklist}
                renderItem={
                  ({ item, index }) => {
                    return (
                      <TaskItem
                        fullItem={item}
                        {...props}
                        onPress={() =>
                          this.ItemClick(item)}
                      />
                    )
                  }
                }
                keyExtractor={(item, index) => index.toString()}
              />
              :
              <NoRecords text={noRCtext} />
            }
          </View>
          <TouchableOpacity style={{ position: 'absolute', height: 50, aspectRatio: 1, borderRadius: 50, backgroundColor: Colors.blue, bottom: hp(5), right: wp(5), justifyContent: 'center' }}
            onPress={() => this.floatingButtonClick()}>
            <Icon
              name='plus'
              type='antdesign'
              color={Colors.white}
              size={25} />
          </TouchableOpacity>

          <Toast ref="toast" />
        </View>
      </SafeAreaView>
    )
  }
}

function mapStateToProps(state) {
  let { task_data } = state
  let { data } = task_data.data
  let tasklist = data
  return {
    task_data: task_data,
    tasklist: tasklist,
    state
  }
}

export default connect(mapStateToProps)(Task)