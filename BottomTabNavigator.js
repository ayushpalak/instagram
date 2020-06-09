/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  FontAwesome, AntDesign, Entypo, MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Homescreen from './screens/Homescreen';
import Likescreen from './screens/Likescreen';
import Profilescreen from './screens/Profilescreen';
import Searchscreen from './screens/Searchscreen';
import Addscreen from './screens/Addscreen';
import Postscreen from './screens/Postscreen';


const Tab = createBottomTabNavigator();

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="profile" component={Profilescreen} />
      <ProfileStack.Screen name="post" component={Postscreen} />
    </ProfileStack.Navigator>
  );
}

function ProfilescreenHOC({ navigation }) {
  return (
    // <Homescreen navigation={navigation} />
    <ProfileStackScreen navigation={navigation} />
  );
}

function HomescreenHOC({ navigation }) {
  return (
    <Homescreen navigation={navigation} />
  );
}

function LikescreenHOC({ navigation }) {
  return (
    <Likescreen navigation={navigation} />
  );
}

function SearchscreenHOC({ navigation }) {
  return (
    <Searchscreen navigation={navigation} />
  );
}
function AddscreenHOC({ navigation }) {
  return (
    <Addscreen navigation={navigation} />
  );
}


export default function TabNavigator() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              if (focused) {
                return <Entypo name="home" size={24} color="black" />;
              }
              return <AntDesign name="home" size={24} color="black" />;
            case 'Search':
              if (focused) {
                return <FontAwesome name="search" size={24} color="black" />;
              }
              return <AntDesign name="search1" size={24} color="black" />;
            case 'Add':
              if (focused) {
                return <MaterialIcons name="add-box" size={24} color="black" />;
              }
              return <Octicons name="diff-added" size={24} color="black" />;
            case 'Like':
              if (focused) {
                return <AntDesign name="heart" size={24} color="black" />;
              }
              return <AntDesign name="hearto" size={24} color="black" />;

            case 'Profile':
              if (focused) {
                return (
                  <Image
                    source={require('./assets/profilepic.jpg')}
                    style={{
                      width: 25, height: 25, borderRadius: 500, borderWidth: 2, borderColor: 'black',
                    }}
                  />
                );
              }
              return (
                <Image
                  source={require('./assets/profilepic.jpg')}
                  style={{ width: 25, height: 25, borderRadius: 500 }}
                />
              );

            default:
              iconName = focused ? 'home' : 'home';
          }
          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} key={route.name} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ff72c7',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}
    >
      <Tab.Screen name="Profile" component={ProfilescreenHOC} />
      <Tab.Screen name="Home" component={HomescreenHOC} />
      <Tab.Screen name="Search" component={SearchscreenHOC} />
      <Tab.Screen name="Add" component={AddscreenHOC} />
      <Tab.Screen name="Like" component={LikescreenHOC} />


    </Tab.Navigator>

  );
}
