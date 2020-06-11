/* eslint-disable no-use-before-define */
import React from 'react';
import {
  FontAwesome, Entypo, Ionicons, SimpleLineIcons,
} from '@expo/vector-icons';

import {
  StyleSheet, TouchableOpacity, Alert, Image, Dimensions,
} from 'react-native';
import { Container, Text } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { INSTAGRAM_USERNAME, INSTAGRAM_USERID, INSTAGRAM_PROFILE_IMAGE_SOURCE } from './assets/constants';

const { width, height } = Dimensions.get('window');

export const loginOptions = () => ({
  headerShown: true,

});


export const headerOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: 'white',
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

export const postHeaderOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    // fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
  },
  title: 'Posts',
  headerShown: true,
  headerLeft: () => (
    <Ionicons
      style={styles.headerLeftStyle}
      name="md-arrow-back"
      size={24}
      color="black"
      onPress={() => navigation.goBack()}
    />

  ),
  headerRight: () => (
    <TouchableOpacity
      onPress={() => { }}
      style={styles.headerRightStyle}
    />
  ),
});

export const commentHeaderOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    // fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
    marginLeft: -44,
  },
  title: 'Comments',
  headerShown: true,
  headerLeft: () => (
    <Ionicons
      style={styles.headerLeftStyle}
      name="md-arrow-back"
      size={24}
      color="black"
      onPress={() => navigation.goBack()}
    />
  ),
});

export const profileHeaderOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    // fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
    marginLeft: -44,
  },
  title: INSTAGRAM_USERID,
  headerShown: true,
  headerLeft: () => (
    <Ionicons
      style={styles.headerLeftStyle}
      name="md-arrow-back"
      size={24}
      color="black"
      onPress={() => navigation.goBack()}
    />
  ),
});

export const homeHeaderOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
    // marginLeft: -44,
  },
  title: INSTAGRAM_USERID,
  headerShown: true,
  headerLeft: () => (
    <SimpleLineIcons style={{ paddingLeft: 10 }} name="camera" size={24} color="black" />
  ),
  headerRight: () => (
    <SimpleLineIcons
      name="paper-plane"
      size={24}
      color="black"
      style={{ transform: [{ rotateZ: '18deg' }], paddingRight: 10, paddingTop: 6 }}
    />
  ),
});

const styles = StyleSheet.create({
  headerLeftStyle: {
    // left: Dimensions.get('window').height < 667 ? '8%' : '70%',
    width: '100%',
    marginLeft: 20,
  },
  headerRightStyle: {
    // right: Dimensions.get('window').height < 667 ? '8%' : '50%',
    width: '100%',
    marginRight: 10,
  },
});
