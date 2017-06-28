import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Container,
  CheckBox,
  Header,
  Left,
  Body,
  Right,
  Content,
  Footer,
  FooterTab,
  Title,
  Text,
  Button,
  Item,
  Input,
  Icon,
  Form,
  Label,
  Radio,
  ListItem,
  Picker
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import css from '../layout/css';

export default class ProfileScreen extends Component {

    constructor(props) {
      super(props);
      this.state = {
        diabetic: false,
        male: true,
        female: false,
        country: "USA"
      };

      this.toggleDiabetic = this.toggleDiabetic.bind(this);
      this.toggleGender = this.toggleGender.bind(this);
      this.onCountryChange = this.onCountryChange.bind(this);
    }

    toggleDiabetic() {
      this.setState({
        diabetic: !this.state.diabetic
      });
    }

    toggleGender() {
      this.setState({
        male: !this.state.male,
        female: !this.state.female
      });
    }

    onCountryChange(value: string) {
      this.setState({
        country: value
      });
    }

    render() {
        return (
          <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Text style={css.white}>My Health Profile</Text>
            </Body>
          </Header>


          <KeyboardAwareScrollView ref='scroll'>
              <Grid>
                <Row style={css.pad10}>
                  <Col>
                    <Form>
                      <Item fixedLabel>
                          <Label>First Name:</Label>
                          <Input placeholder="First Name" />
                      </Item>
                      <Item fixedLabel>
                          <Label>Last Name:</Label>
                          <Input placeholder="Last Name" />
                      </Item>
                    </Form>
                  </Col>
                </Row>
                <Row style={css.pad10}>
                  <Col>
                    <Item floatingLabel>
                        <Label>Age:</Label>
                        <Input keyboardType='numeric' value="25" />
                    </Item>
                  </Col>
                  <Col>
                    <Item floatingLabel>
                        <Label>Height (cm):</Label>
                        <Input keyboardType='numeric' value="180" />
                    </Item>
                  </Col>
                  <Col>
                    <Item floatingLabel>
                        <Label>Weight (kg):</Label>
                        <Input keyboardType='numeric' value="68" />
                    </Item>
                  </Col>
                </Row>
                <Row style={css.pad10}>
                  <Col style={css.pad10}>
                    <CheckBox checked={this.state.diabetic} onPress={() => this.toggleDiabetic()} />
                    <Text>Diabetic?</Text>
                  </Col>
                  <Col>
                    <ListItem>
                      <Radio selected={this.state.male} onPress={() => this.toggleGender()} />
                      <Text>Male</Text>
                    </ListItem>
                    <ListItem>
                      <Radio selected={this.state.female} onPress={() => this.toggleGender()} />
                      <Text>Female</Text>
                    </ListItem>
                  </Col>
                </Row>
                <Row style={css.pad10}>
                  <Col>
                    <Text>Country:</Text>
                    <Picker
                        supportedOrientations={['portrait','landscape']}
                        iosHeader="Select Race"
                        mode="dropdown"
                        selectedValue={this.state.country}
                        onValueChange={this.onCountryChange}>
                        <Item label="Canada" value="Canada" />
                        <Item label="Japan" value="Japan" />
                        <Item label="UK" value="UK" />
                        <Item label="USA" value="USA" />
                   </Picker>
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
