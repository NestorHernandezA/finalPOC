import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Container, Header, Left, Body, Right, Content, Footer, FooterTab, Title, Text, Button, Grid, Row, Col, Item, Input} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import css from '../layout/css';

export default class LoginScreen extends Component {

    constructor(props) {
      super(props);
    }
    render() {
        return (
          <Container>
              <Header>
                <Left />
                <Body>
                  <Text style={css.white}>My Health Login</Text>
                </Body>
              </Header>
              <KeyboardAwareScrollView ref='scroll'>
                <Grid style={{alignItems: 'center', justifyContent: 'flex-start'}}>
                  <Row >
                    <Col style={{justifyContent: 'center', alignItems: 'center' }}>
                      <Image source={require('../img/big_pharma_video_game_logo.png')}   />
                    </Col>
                  </Row>
                  <Row style={css.pad10}>
                    <Col>
                      <Item rounded>
                        <Input placeholder='Username' />
                      </Item>
                    </Col>
                  </Row>
                  <Row style={css.pad10}>
                    <Col>
                      <Item rounded>
                        <Input placeholder='Password' secureTextEntry />
                      </Item>
                    </Col>
                  </Row>
                  <Row style={css.pad10}>
                    <Col>
                      <Button full rounded onPress={ () => this.props.navigation.navigate('Profile')}>
                        <Text>Log In</Text>
                      </Button>
                    </Col>
                  </Row>
                </Grid>
              </KeyboardAwareScrollView>
              <Footer>

                    <FooterTab>
                        <Button full>
                            <Text>Copyright 2017</Text>
                        </Button>
                    </FooterTab>

              </Footer>

          </Container>

        );
    }
}
