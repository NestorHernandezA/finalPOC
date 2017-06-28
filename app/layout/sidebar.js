import React from "react";
import { Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Grid,
  Col,
  Row
} from "native-base";
import css from '../layout/css';

const menuItems = [
  {
    label: "Profile",
    route: "Profile",
    icon: "person"
  },
  {
    label: "Calendar Reminders",
    route: "Reminders",
    icon: "calendar"
  },
  {
    label: "Log Off",
    route: "Login",
    icon: "key"
  }
];

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <Container>
        <Content>
          <Grid>
            <Row style={{justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../img/big_pharma_video_game_logo.png')}  />
            </Row>
            <Row>
              <List
                dataArray={menuItems}
                renderRow={menuItem => {
                  return (
                    <ListItem
                      button
                      onPress={() => this.props.navigation.navigate(menuItem.route)}
                    >
                      <Icon name={menuItem.icon} />
                      <Text style={{marginLeft: 5}}>{menuItem.label}</Text>
                    </ListItem>
                  );
                }}
              />
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}
