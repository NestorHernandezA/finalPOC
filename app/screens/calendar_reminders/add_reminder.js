import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Header, Left, Body, Right, Content, Footer, FooterTab, Title, Text, Button, Grid, Row, Col, Item, Input, Icon, Label} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CalendarStore from '../../stores/calendar_store';
import css from '../../layout/css';

export default class AddReminderScreen extends Component {

    constructor(props) {
      super(props);
      this.state = {
        year: "",
        month: "",
        day: "",
        message: ""
      };
      this.addBtnPress = this.addBtnPress.bind(this);
    }

    addBtnPress() {
      CalendarStore.addReminder(this.state.year, this.state.month, this.state.day, this.state.message);
      this.setState({
        year: "",
        month: "",
        day: "",
        message: ""
      });
    }

    render() {
        return (
          <Container>
              <Header>
                <Left>
                  <Button transparent onPress={() => this.props.navigation.navigate("Reminders")}>
                    <Icon name="md-arrow-back" />
                  </Button>
                </Left>
                <Body>
                  <Text style={css.white}>Add Calendar Reminder</Text>
                </Body>
              </Header>
              <KeyboardAwareScrollView ref='scroll'>
                <Grid>
                  <Row>
                    <Col style={css.pad10}>
                      <Text>Add a reminder to the calendar:</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={css.pad10}>
                      <Item floatingLabel>
                          <Label>Year:</Label>
                          <Input keyboardType='numeric' onChangeText={(text) => this.setState({year : text})} value={this.state.year} />
                      </Item>
                    </Col>
                    <Col style={css.pad10}>
                      <Item floatingLabel>
                          <Label>Month:</Label>
                          <Input keyboardType='numeric' onChangeText={(text) => this.setState({month : text})} value={this.state.month} />
                      </Item>
                    </Col>
                    <Col style={css.pad10}>
                      <Item floatingLabel>
                          <Label>Day:</Label>
                          <Input keyboardType='numeric' onChangeText={(text) => this.setState({day : text})} value={this.state.day} />
                      </Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={css.pad10}>
                      <Item regular >
                        <Input placeholder='Medication Reminder' onChangeText={(text) => this.setState({message : text})} value={this.state.message}/>
                      </Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={css.pad10}>
                      <Button onPress={this.addBtnPress}><Text>Add Reminder</Text></Button>
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
