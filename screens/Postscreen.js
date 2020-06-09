/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import {
  Container, Content, List, ListItem, Button,
  InputGroup, Input, Picker, Text,
} from 'native-base';
import {
  Entypo, Ionicons, FontAwesome5, AntDesign,
  Fontisto,
} from '@expo/vector-icons';


import { Grid, Row, Col } from 'react-native-easy-grid';
import {
  NUMBER_OF_POSTS, NUMBER_OF_FOLLOWERS, NUMBER_OF_FOLLOWING, INSTAGRAM_USERNAME, USER_BIO, USER_IMAGES,
} from '../assets/constants';

const { width, height } = Dimensions.get('window');
class Postscreen extends Component {
  render() {
    return (
        <Container>
            <Content>
                
            </Content>
      </Container>
    );
  }
}

export default Postscreen;
