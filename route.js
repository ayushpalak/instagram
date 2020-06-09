/* eslint-disable no-use-before-define */
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
  StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import { INSTAGRAM_USERNAME } from './assets/constants';

export const loginOptions = () => ({
  headerShown: true,

});


export const headerOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: '#f5f5f5',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    // fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
  },
  title: INSTAGRAM_USERNAME,
  headerShown: false,
  // headerLeft: () => (
  //   <TouchableOpacity onPress={() => {}} style={styles.headerLeftStyle}>
  //     <FontAwesome name="home" size={24} color="#ff72c7" />
  //   </TouchableOpacity>
  // ),
  // headerRight: () => (
  //   <TouchableOpacity
  //     onPress={() => { }}
  //     style={styles.headerRightStyle}
  //   >
  //     <FontAwesome name="sign-out" size={24} color="#ff72c7" />
  //   </TouchableOpacity>
  // ),
});

const styles = StyleSheet.create({
  headerLeftStyle: {
    // left: Dimensions.get('window').height < 667 ? '8%' : '70%',
    // width: '100%',
    marginLeft: 20,
  },
  headerRightStyle: {
    // right: Dimensions.get('window').height < 667 ? '8%' : '50%',
    // width: '100%',
    marginRight: 20,
  },
});
