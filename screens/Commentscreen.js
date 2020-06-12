/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container, Content, Text,
} from 'native-base';
import {
  AntDesign,

} from '@expo/vector-icons';

import { Grid, Row, Col } from 'react-native-easy-grid';
import CommentInput from './CommentInput';
import {
  INSTAGRAM_PROFILE_IMAGE_SOURCE_URI,
  INSTAGRAM_PROFILE_IMAGE_SOURCE, INSTAGRAM_USERID,
  USER_IMAGES_WITH_PROP,
} from '../assets/constants';

const RenderPostAttributesCaption = (props) => (
  <>
    <Row style={{ paddingHorizontal: 10 }}>
      <Col style={{ width: 40, alignItems: 'flex-start', paddingVertical: 5 }}>
        <Image
          source={INSTAGRAM_PROFILE_IMAGE_SOURCE}
          style={{
            width: 30, height: 30, borderRadius: 500,
          }}
        />

      </Col>
      <Col>
        <Row style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text style={{ fontWeight: 'bold' }}>
            {INSTAGRAM_USERID}
            {' '}
            <Text style={{ fontWeight: '100' }}>{props.caption}</Text>
          </Text>
        </Row>
      </Col>
    </Row>
    <Row style={{ marginVertical: 15 }}>
      <Text
        note
        style={{
          width: '100%',
          marginLeft: 50,
          fontSize: 12,
          borderTopWidth: 0.2,
          borderTopColor: 'grey',
          paddingTop: 15,
        }}
      >
        Load more comments
      </Text>
    </Row>
  </>
);

const Comment = (props) => (
  <Row style={{
    paddingHorizontal: 10,
  }}
  >
    <Col style={{ width: 40, alignItems: 'flex-start', paddingVertical: 15 }}>
      <Image
        source={{
          uri: props.addedBySelf
            ? INSTAGRAM_PROFILE_IMAGE_SOURCE_URI
            : USER_IMAGES_WITH_PROP[Math.floor(Math.random() * 10)].url,
        }}
        style={{
          width: 30, height: 30, borderRadius: 500,
        }}
      />

    </Col>
    <Col
      style={{
        borderTopWidth: 0.2,
        borderTopColor: 'grey',
        paddingVertical: 10,
        width: '100%',
      }}
    >
      <Row>
        <Col size={80}>
          <Row style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Text style={{ fontWeight: 'bold' }}>
              {props.userId}
              {' '}
              <Text style={{ fontWeight: '100' }}>{props.comment}</Text>
            </Text>
          </Row>
          <Row style={{ marginVertical: 10 }}>
            <Col style={{ width: 30, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text note style={{ fontSize: 12 }}>{props.timestamp}</Text>
            </Col>
            {props.likes !== '0' ? (
              <Col style={{ width: 50, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text note style={{ fontSize: 12 }}>{`${props.likes} likes`}</Text>
              </Col>
            ) : null}
            <Col style={{
              justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 4,
            }}
            >
              <Text note style={{ fontSize: 12 }}>Reply</Text>
            </Col>
          </Row>
        </Col>
        <Col
          size={20}
        >
          <Row>
            <Col style={{
              justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10, marginLeft: 10,
            }}
            >
              <AntDesign
                name="hearto"
                size={15}
                color="black"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>

);

const RenderComments = (props) => <Comment {...props} />;


export default class Commentscreen extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      user_image_with_prop: this.props.route.params,
    };
  }

  updateComment = (comment) => {
    const old_user_image_with_prop = { ...this.state.user_image_with_prop };
    const { comments } = old_user_image_with_prop;
    const updatedComments = comments.concat({
      ...comment, addedBySelf: true, likes: 0, timestamp: '0s',
    });
    const new_user_image_with_prop = { ...old_user_image_with_prop, comments: updatedComments };
    this.setState({
      user_image_with_prop: new_user_image_with_prop,
    });
  }

  render() {
    return (
      <Container>
        <Grid>
          <Col>
            <Row size={90}>
              <Content>
                <Col style={{ paddingVertical: 10, paddingLeft: 20 }}>
                  <RenderPostAttributesCaption caption={this.state.user_image_with_prop.caption} />
                  {
                    this.state.user_image_with_prop.comments.map((commentObj) => (
                      <RenderComments
                        key={Math.random() * 100}
                        comment={commentObj.comment}
                        userId={commentObj.user}
                        addedBySelf={commentObj.addedBySelf}
                        likes={commentObj.likes}
                        timestamp={commentObj.timestamp}
                      />
                    ))
                  }
                </Col>
              </Content>
            </Row>
            <Row size={10}>
              <Col>

                <CommentInput ref={this.myRef} updateComment={this.updateComment} />

              </Col>
            </Row>
          </Col>
        </Grid>
      </Container>
    );
  }
}
