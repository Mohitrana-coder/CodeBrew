//Task.js
import React, { Component } from "react"
import { SafeAreaView, View, FlatList, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { Strings, TaskItem, NoRecords, Colors } from '../components';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Header, Icon, Badge } from 'react-native-elements';
import Toast, {DURATION} from 'react-native-easy-toast'



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Descriptions: '',

    }
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
    return(
      <View style = {{ flexDirection: 'row'}}>
       <View style = {{ backgroundColor : Colors.white, borderWidth : 1, borderColor: Colors.green, borderRadius: wp(100), padding : 2}}>
         <Icon
            name='star'
            type='antdesign'
            color={Colors.white}
            size={15}
            containerStyle = {{ backgroundColor : Colors.green, borderRadius: wp(100), padding : 5}}
            onPress={() => console.log('hello')} />
       </View>
       <Text style = {{ textAlign:'center', textAlignVertical:'center', marginLeft : 10, fontSize: 16, fontWeight: 'bold'}}>0</Text>
       </View>
    )
  }

  customRightComponent = () => {
    return(
      <View style = {{ flexDirection: 'row'}}>
       <View>
       <Badge status = 'error' badgeStyle = {{ backgroundColor : Colors.blue, position:'absolute',right:7, top: 1}}></Badge>
         <Icon
            name='notifications-outline'
            type='ionicon'
            color={Colors.black}
            size={25}
            containerStyle = {{ paddingHorizontal: 10}}
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
    let { navigation, tasklist } = props;
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1 }}>
          <Header
            leftComponent={this.customLeftComponent()}
            placement='left'
            containerStyle={{ backgroundColor: Colors.white, paddingHorizontal: 15 }}
            centerComponent={{ text: Strings.Task.title, style: { color: Colors.blue, fontSize: 12 , backgroundColor: Colors.light_blue, borderRadius : 50, paddingHorizontal: 15, paddingVertical: 5} }}
            rightComponent= {this.customRightComponent()}
          />
          <View style={{flex: 1, justifyContent:'center', backgroundColor: Colors.white}}>
          <NoRecords />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

function mapStateToProps(state) {
  let { task_data } = state
  console.log('response--00>>'+JSON.stringify(task_data));
  let { data } = task_data.data
  console.log('response--11>>'+JSON.stringify(task_data));
  let tasklist = data
  return {
    task_data: task_data,
    tasklist:tasklist,
    state
  }
}

export default connect(mapStateToProps)(Home)