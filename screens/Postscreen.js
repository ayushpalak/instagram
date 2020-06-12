/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, useState } from 'react';
import {
  Image, Dimensions,
} from 'react-native';
import {
  Content,
  Text,
} from 'native-base';
import {
  Entypo, FontAwesome5, AntDesign,

  SimpleLineIcons,

} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Grid, Row, Col } from 'react-native-easy-grid';


const { height } = Dimensions.get('window');

const RenderImage = (props) => (
  <Col>
    <Image
      source={{ uri: props.postProps.url }}
      resizeMode="cover"
      style={{ width: '100%', height: height * 0.5 }}
    />
  </Col>
);

const RenderPostAttributesActions = (props) => (
  <Row style={{ paddingLeft: 10 }}>
    <Col>
      <Row style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Col>
          <Text>
            Liked by
            {' '}
            <Text style={{ fontWeight: 'bold' }}>
              {`${props.postProps.likedBy.slice(0, 2).join(', ')} and ${props.likes} others.`}
            </Text>
          </Text>
        </Col>
      </Row>
    </Col>
  </Row>
);

const RenderPostAttributesCaption = (props) => (
  <Row style={{ paddingHorizontal: 10 }}>
    <Col>
      <Row style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text style={{ fontWeight: 'bold' }}>
          {props.postProps.likedBy[0]}
          {' '}
          <Text style={{ fontWeight: '400' }}>{props.postProps.caption}</Text>
        </Text>
      </Row>
    </Col>
  </Row>
);

const RenderPostAttributes = (props) => (
  <>
    <RenderPostAttributesActions
      postProps={props.postProps}
      likes={props.likes}
      setLikes={props.setLikes}
    />
    <RenderPostAttributesCaption
      postProps={props.postProps}
      likes={props.likes}
      setLikes={props.setLikes}
    />
  </>
);


const RenderImageAction = (props) => {
  const [iconName, setIconName] = useState('hearto');
  const [iconColor, setIconColor] = useState('black');
  const navigation = useNavigation();
  return (
    <Row style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
      <Col size={40}>
        <Row>
          <Col style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
            <AntDesign
              name={iconName}
              onPress={() => {
                setIconName(iconName === 'heart' ? 'hearto' : 'heart');
                setIconColor(iconColor === 'black' ? 'red' : 'black');
                if (props.liked) {
                  props.setLikes(props.likes + 1);
                  props.setLiked(false);
                } else {
                  props.setLikes(props.likes - 1);
                  props.setLiked(true);
                }
              }}
              size={28}
              color={iconColor}
            />
          </Col>
          <Col style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
            <FontAwesome5
              name="comment"
              size={28}
              color="black"
              onPress={() => navigation.push('comment', props.postProps)}
              style={{ transform: [{ rotateY: '180deg' }], paddingBottom: 2 }}
            />
          </Col>
          <Col style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
            <SimpleLineIcons
              name="paper-plane"
              size={28}
              color="black"
              style={{ transform: [{ rotateZ: '18deg' }], paddingBottom: 2 }}
            />
          </Col>
        </Row>
      </Col>
      <Col size={70} style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
        <AntDesign
          name="tago"
          size={28}
          color="black"
          style={{ marginRight: 10 }}
        />
      </Col>

    </Row>
  );
};

const RenderBottom50 = (props) => {
  // const [likes, setLikes] = useState(Math.ceil(Math.random() * 1000));
  const [likes, setLikes] = useState(
    props.postProps.comments.length + Math.ceil(Math.random() * 1000),
  );
  const [liked, setLiked] = useState('false');
  return (
    <Row>
      <Col>
        <RenderImageAction
          postProps={props.postProps}
          likes={likes}
          setLikes={setLikes}
          setLiked={setLiked}
          liked={liked}
        />
        <RenderPostAttributes
          postProps={props.postProps}
          likes={likes}
          setLikes={setLikes}
          setLiked={setLiked}
          liked={liked}
        />
      </Col>
    </Row>
  );
};

class Postscreen extends Component {
  render() {
    return (
      <Content>
        <Grid>
          <Col style={{ marginVertical: 10 }}>
            <Row style={{ paddingVertical: 10, marginHorizontal: 10 }}>
              <Col style={{
                width: 40, alignItems: 'center', justifyContent: 'center',
              }}
              >
                <Image
                  source={{ uri: this.props.postProps.url }}
                  resizeMode="cover"
                  style={{
                    alignSelf: 'center',
                    height: 30,
                    width: 30,
                    borderRadius: 500,
                  }}
                />
              </Col>
              <Col style={{ paddingLeft: '1%' }}>
                <Row style={{
                  justifyContent: 'flex-start', alignItems: 'flex-end',
                }}
                >
                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{this.props.postProps.likedBy[0]}</Text>
                </Row>
                <Row style={{
                  justifyContent: 'flex-start', alignItems: 'flex-start',
                }}
                >
                  <Text style={{ fontSize: 10 }}>Disney World</Text>
                </Row>
              </Col>
              <Col style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                <Entypo name="dots-three-vertical" size={24} color="grey" />
              </Col>
            </Row>
            <Row>
              <RenderImage postProps={this.props.postProps} />
            </Row>
            <Row>
              <RenderBottom50 postProps={this.props.postProps} />
            </Row>
          </Col>
        </Grid>
      </Content>
    );
  }
}

export default Postscreen;
