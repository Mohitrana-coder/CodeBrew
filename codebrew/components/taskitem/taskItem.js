//TaskItem.js
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Badge, colors, ListItem } from 'react-native-elements'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { GlobalStyle, Colors } from '../constants';
import Moment from 'moment';
import Pie from 'react-native-pie'

class TaskItem extends Component {

    getTimeInFormat_Method = (created_at) => {
        return Moment(created_at).format('hh:mm A')
    }

    getFormatedDate_Method = (created_at) => {
        return Moment(created_at).format('MMM DD')
    }
    render() {
        let { fullItem, onPress } = this.props
        let { title, description, hoursAssigned, hoursCompletedTillNow, created_at, reopen_count, completed} = fullItem;
        let formatedTime = this.getTimeInFormat_Method(created_at);
        let formatedDate = this.getFormatedDate_Method(created_at);
        let c1 = parseInt(hoursCompletedTillNow) > parseInt(hoursAssigned) ? Colors.red : Colors.white
        let c2 = parseInt(hoursCompletedTillNow) > parseInt(hoursAssigned) ? Colors.dark_red : Colors.green
        let brew = parseInt(hoursCompletedTillNow) > parseInt(hoursAssigned) ? parseInt(hoursAssigned)/parseInt(hoursCompletedTillNow)*100 : parseInt(hoursCompletedTillNow)/parseInt(hoursAssigned)*100
        return (
           
            <ListItem style={[styles.itemStyle, GlobalStyle.shadowStyle,{backgroundColor: c1}]} containerStyle={{backgroundColor: c1}}>
     
      <ListItem.Content style={{backgroundColor: c1, padding: 0}}>
          <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between',}}>
              <View>
          <ListItem.Title style = {{ fontSize : 16, color : Colors.black, fontWeight: 'bold'}}>{title}</ListItem.Title>
        <View  style = {{ flexDirection: 'row', paddingTop: 10}}>
          <Text style = {{ fontSize : 13, color : Colors.black}}>{`${formatedTime} - `}</Text>
          <Text style = {{ fontSize : 13, color : Colors.black}}>{formatedDate}</Text>
        </View>

         {   reopen_count ?
            <View style = {{ flexDirection : 'row', alignItems: 'center', paddingTop: 10}}>
                <Badge status = 'error' badgeStyle = {{ backgroundColor : 'red', marginRight: 5}}></Badge>
            <Text style = {{ fontSize : 13, color : Colors.black, fontWeight: 'bold'}}>{`RE-OPEN TASK (${reopen_count})`}</Text>
            </View> : undefined
        }
        </View>
        <View style = {{ height: '100%', alignItems: 'center'}}>
        <View style={{ borderColor: c2, borderWidth:1 , width: 42, justifyContent: 'center', alignSelf: 'flex-end', aspectRatio: 1, borderRadius: 42}} >
        <Pie
              radius={20}
              sections={[
                {
                  percentage: 100,
                  color: c1,
                },
                {
                  percentage: brew,
                  color: c2,
                },
                
              ]}
              strokeCap={'butt'}
            />
            </View>
                     <Text style = {{ fontSize : 10, color : Colors.blue, fontWeight: 'bold', paddingVertical: 10, textAlign: 'left'}}>{`MARK COMPLETE`}</Text>
   
</View>
          </View>
        

        
        
      </ListItem.Content>
    </ListItem>
        );
    }
}
const styles = StyleSheet.create({
    itemStyle: {
        marginHorizontal: wp(3),
        marginVertical: wp(2),
        overflow: 'hidden',
    },
});
export default TaskItem;