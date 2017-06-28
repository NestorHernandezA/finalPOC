/* used this calendar library https://github.com/christopherdro/react-native-calendar */

import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Content, Footer, FooterTab, Title, Text, Button, Grid, Col, Item, Input, Card, CardItem, Icon, Fab} from 'native-base';
import Calendar from 'react-native-calendar';
import CalendarStore from '../../stores/calendar_store';
import css from '../../layout/css';

export default class RemindersScreen extends Component {

    constructor(props) {
      super(props);
    }

    componentWillMount() {
      this.setState({
        reminders: CalendarStore.getReminders(),
        message: CalendarStore.getMessage()
      });
      this.handleDateSelect = this.handleDateSelect.bind(this);
    }

    handleDateSelect(date) {
      var date = date.split('T')[0];
      this.setState({
        message: CalendarStore.getMessage(date)
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
                  <Text style={css.white}>Medication Reminders</Text>
                </Body>

              </Header>
              <Content contentContainerStyle={{flex: 1}} style={{padding: 5}}>
                <Calendar
                  eventDates={this.state.reminders}
                  showEventIndicators={true}
                  onDateSelect={this.handleDateSelect}
                />
                <Card>
                  <CardItem>
                    <Body>
                      <Text>
                          {this.state.message}
                      </Text>
                    </Body>
                  </CardItem>
              </Card>
              <Fab
                  containerStyle={{ marginLeft: 10 }}
                  style={{ backgroundColor: '#5067FF' }}
                  position="bottomRight"
                  onPress={() => this.props.navigation.navigate("AddReminder")}>
                    <Icon name="add" />
              </Fab>
              </Content>
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
