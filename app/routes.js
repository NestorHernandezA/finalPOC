import React from 'react';
import {DrawerNavigator, TabNavigator, StackNavigator} from 'react-navigation';
import {Button, Icon} from 'native-base';

//import screen components
import DrawerMenu from "./layout/drawer_menu";
import Sidebar from "./layout/sidebar";
import LoginScreen from "./screens/login";
import ProfileScreen from "./screens/profile";
import RemindersScreen from "./screens/calendar_reminders/reminders";
import AddReminderScreen from "./screens/calendar_reminders/add_reminder";


export const RootRoute = DrawerNavigator({
    Login: { screen: LoginScreen },
    Profile: { screen: ProfileScreen },
    Reminders: { screen: RemindersScreen },
      AddReminder: { screen: AddReminderScreen }

  },
  {
    contentComponent: props => <Sidebar {...props}/>
  }
);


/*
const DrawerMenuNav = DrawerNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'User Profile',
      }
    },
    Login: { screen: LoginScreen }

  },
  {
    contentComponent: props => <Sidebar />
  }
);

export const RootRoute = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'POC Log In'
    }
  },
  Profile: {
    screen: DrawerMenuNav
  }
});
*/
