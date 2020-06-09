/* eslint-disable react/prefer-stateless-function */
import React, { Component, useState } from 'react';
import { Image, Dimensions, Alert } from 'react-native';
import {
  Container, Content, List, ListItem, Button,
  InputGroup, Input, Picker, Text,
} from 'native-base';
import {
  Entypo, Ionicons, FontAwesome5, AntDesign,
  Fontisto,
} from '@expo/vector-icons';


import { Grid, Row, Col } from 'react-native-easy-grid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {
  NUMBER_OF_POSTS, NUMBER_OF_FOLLOWERS, NUMBER_OF_FOLLOWING, INSTAGRAM_USERNAME, USER_BIO, USER_IMAGES,
} from '../assets/constants';

const { width, height } = Dimensions.get('window');
const marginHorizontal = 10;
const RenderProfilePicture = () => (
  <Col
    size={20}
    style={{ justifyContent: 'center', alignItems: 'flex-start' }}
  >
    <Col style={{
      width: width * 0.16, height: width * 0.16, borderRadius: 500, resizeMode: 'contain',
    }}
    >
      <Image
        source={require('../assets/profilepic.png')}
        resizeMode="cover"
        style={{
          alignSelf: 'center',
          height: '100%',
          width: '100%',
          borderRadius: 500,
        }}
      />
    </Col>
  </Col>
);

const RenderSingleGridImage = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        width: width / 3,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderBottomWidth: 1,
      }}
      onPress={() => { navigation.push('post'); }}
    >
      <Image
        source={{ uri: props.uri }}
        resizeMode="cover"
        style={{
          // use this to maintain aspect ratio
          // width: (width - 2 * marginHorizontal) * 0.33,
          // height: (width - 2 * marginHorizontal) * 0.33,
          width: '100%',
          height: '100%',
        }}
      />
    </TouchableOpacity>
  );
};
const RenderGridRow = (props) => (
  <Row
    style={{
      height: width / 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',
    }}
  >
    <Col style={{
      width: width / 3, borderColor: 'white', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderBottomWidth: 1,
    }}
    >
      <RenderSingleGridImage uri={props.ImageRow[0]} />
    </Col>
    <Col style={{
      width: width / 3, borderColor: 'white', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderBottomWidth: 1,
    }}
    >
      <RenderSingleGridImage uri={props.ImageRow[1]} />
    </Col>
    <Col style={{
      width: width / 3, borderColor: 'white', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1,
    }}
    >
      <RenderSingleGridImage uri={props.ImageRow[2]} />
    </Col>
  </Row>
);

const RenderImageGrid = () => {
  const row = [];
  const numberOfRows = Math.floor(USER_IMAGES.length / 3);

  for (let i = 0; i < numberOfRows + 1; i++) {
    row.push(
      <RenderGridRow
        ImageRow={[USER_IMAGES[i * 3], USER_IMAGES[i * 3 + 1], USER_IMAGES[i * 3 + 2]]}

      />,
    );
  }

  return row;
};
const TopSection = () => (
  <Row size={20}>
    {RenderProfilePicture()}
    <Col size={80} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
      <Row style={{
        alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginVertical: '1.5%',
      }}
      >
        <Col style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
          <Row style={{
            alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginVertical: '1.5%',
          }}
          >
            <Text style={{ fontWeight: 'bold' }}>{NUMBER_OF_POSTS}</Text>
          </Row>
          <Row style={{ marginTop: '-5%' }}>
            <Text note>Posts</Text>
          </Row>
        </Col>
        <Col style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
          <Row style={{
            alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginVertical: '1.5%',
          }}
          >
            <Text style={{ fontWeight: 'bold' }}>{NUMBER_OF_FOLLOWERS}</Text>
          </Row>
          <Row style={{ marginTop: '-5%' }}>
            <Text note>Followers</Text>
          </Row>
        </Col>
        <Col style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
          <Row style={{
            alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginVertical: '1.5%',
          }}
          >
            <Text style={{ fontWeight: 'bold' }}>{NUMBER_OF_FOLLOWING}</Text>
          </Row>
          <Row style={{ marginTop: '-5%' }}>
            <Text note>Following</Text>
          </Row>
        </Col>
      </Row>
      <Row style={{ marginVertical: '1.5%' }}>
        <Col size={90} style={{ marginHorizontal: 4 }}>
          <Button block style={{ backgroundColor: '#5496ff', borderRadius: 5, height: 'auto' }}><Text style={{ textTransform: 'capitalize' }}>Follow</Text></Button>
        </Col>
        <Col size={10} style={{ marginRight: 4, backgroundColor: 'sky' }}>
          <Button block style={{ backgroundColor: '#5496ff', borderRadius: 5, height: 'auto' }}><Entypo name="triangle-down" size={18} color="white" /></Button>
        </Col>
      </Row>
    </Col>
  </Row>
);
const MiddleSection = () => (
  <Row>
    <Col>
      <Row style={{ height: 24 }}>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>
          {INSTAGRAM_USERNAME}
        </Text>
      </Row>
      <Row style={{ marginBottom: '5%' }}>
        <Text>{USER_BIO.slice(0, 150)}</Text>
      </Row>
    </Col>
  </Row>
);

const BottomSection = (props) => (

  <Row>

    <Col>
      <Row style={{
        justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Col style={{
          justifyContent: 'center', alignItems: 'center', borderBottomColor: 'black', borderBottomWidth: 0.5,
        }}
        >
          <Fontisto style={{ marginBottom: '5%' }} name="nav-icon-grid" size={18} color="black" />
        </Col>
        <Col style={{
          justifyContent: 'center', alignItems: 'center', borderBottomColor: 'black',
        }}
        >
          <AntDesign style={{ marginBottom: '5%' }} name="tagso" size={24} color="black" />
        </Col>
      </Row>
      {RenderImageGrid(props).map((item) => item)}

    </Col>

  </Row>

);
class Profilescreen extends Component {
  render() {
    // this.props.navigation.navigate('post');
    return (
      <Container>
        <Content>
          <Grid>
            <Col style={{ marginHorizontal }}>
              {TopSection()}
              {MiddleSection()}
              {BottomSection()}
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default Profilescreen;
