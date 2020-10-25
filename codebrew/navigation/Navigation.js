//Navigation.js
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header, Icon, Badge } from 'react-native-elements';


import { Task, Strings, Home, Colors } from '../../codebrew';
import { Image } from 'react-native';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


function NoRecordsStack() {
    return (
        <Stack.Navigator
            initialRouteName={Strings.NavigationKeys.Home}
            screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={Strings.NavigationKeys.Home} component={Home} />
        </Stack.Navigator>
    );
}

function TaskStack() {
    return (
        <Stack.Navigator
            initialRouteName={Strings.NavigationKeys.Task}
            screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={Strings.NavigationKeys.Task} component={Task} />
        </Stack.Navigator>
    );
}




function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                style: {
                    position: 'absolute',
                    top: 88, width: '100%',height: 50, 
                }
            }} >
                
                <Tab.Screen
                    name="Tasks"
                    component={TaskStack}
                    options={{
                        tabBarLabel: 'My Tasks'}}
                    />
                    <Tab.Screen
                    name="Assigned"
                    component={NoRecordsStack}
                    options={{ tabBarLabel: 'Assigned' }}
                    />
                    <Tab.Screen
                    name="Completed"
                    component={NoRecordsStack}
                    options={{ tabBarLabel: 'Completed' }}
                    />
                   
                    
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default App;