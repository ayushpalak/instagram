/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Container, Content, List, ListItem, Button,
  InputGroup, Input, Picker, Text, Label, Item, Form,
} from 'native-base';
import {
  TextInput, Platform, KeyboardAvoidingView, InteractionManager,
} from 'react-native';
import {
  Entypo, Ionicons, FontAwesome, FontAwesome5, AntDesign,
  Fontisto, EvilIcons,
  SimpleLineIcons,
  Feather,
} from '@expo/vector-icons';
import { Grid, Row, Col } from 'react-native-easy-grid';
import {
  NUMBER_OF_POSTS, INSTAGRAM_PROFILE_IMAGE_SOURCE, INSTAGRAM_USERID, NUMBER_OF_FOLLOWERS, NUMBER_OF_FOLLOWING, INSTAGRAM_USERNAME, USER_BIO, USER_IMAGES,
} from '../assets/constants';

export default class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      comment: '',
    };
  }

  componentDidMount = () => {
    // this.textInput.focus();
    InteractionManager.runAfterInteractions(() => {
      this.textInput.focus();
    });
  }

  render() {
    return (

      <Col style={{
        paddingLeft: 20, paddingRight: 20,
      }}
      >
        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Col style={{ width: 40 }}>
            <SimpleLineIcons
              name="paper-plane"
              size={28}
              color="grey"
              style={{ transform: [{ rotateZ: '18deg' }] }}
            />
          </Col>

          <Col style={{ width: '75%', paddingLeft: 5 }}>
            <KeyboardAvoidingView behavior="position" enabled>
              <TextInput
                ref={(input) => { this.textInput = input; }}
                placeholder={`Add a comment as ${INSTAGRAM_USERID}...`}
                value={this.state.comment}
                onChangeText={(comment) => this.setState({ comment })}
                blurOnSubmit={false}
              />
            </KeyboardAvoidingView>

          </Col>
          <Col style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
            <Text
              style={{ fontWeight: 'bold', color: '#5496ff', flexWrap: 'wrap' }}
              onPress={
                () => {
                  this.props.updateComment({ user: INSTAGRAM_USERID, comment: this.state.comment });
                  this.setState({ comment: '' });
                }
              }
            >
              Post
            </Text>
          </Col>

        </Row>
      </Col>

    );
  }
}
