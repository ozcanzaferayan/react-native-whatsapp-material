import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarOptions,
} from "@react-navigation/material-top-tabs";
import * as React from "react";
import { View, Text } from "react-native";
import ChatScreen from "../containers/1_Chat/ChatScreen";
import StatusScreen from "../containers/2_StatusScreen";
import CallsScreen from "../containers/3_CallsScreen";
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import { createStackNavigator } from "@react-navigation/stack";
import ChatDetail from "../containers/1_Chat/ChatDetail";

function TopBarNavigator() {
  const Tab = createMaterialTopTabNavigator();

  const tabBarOptions: MaterialTopTabBarOptions = {
    labelStyle: { fontSize: Spacing.font_TabIndicator, fontWeight: "bold" },
    style: {
      backgroundColor: Colors.primary,
    },
    indicatorStyle: {
      borderColor: Colors.textInverted,
      borderBottomWidth: Spacing.border_TabIndicator,
    },
    activeTintColor: Colors.textInverted,
  };

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Sohbetler" component={ChatScreen} />
      <Tab.Screen name="Durum" component={StatusScreen} />
      <Tab.Screen name="Aramalar" component={CallsScreen} />
    </Tab.Navigator>
  );
}
export default TopBarNavigator;
