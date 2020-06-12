import React, { Component } from 'react';
import {
  Container, Content, List, ListItem, Button,
  InputGroup, Input, Picker,
} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import { USER_IMAGES_WITH_PROP } from '../assets/constants';
import Postscreen from './Postscreen';

class Homescreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          {
            USER_IMAGES_WITH_PROP.map((item, index) => <Postscreen key={index} navigation={this.props.navigation} postProps={USER_IMAGES_WITH_PROP[index]} />)
          }
        </Content>
      </Container>
    );
  }
}

export default Homescreen;
