import * as React from "react";
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Button,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import TopBarNavigator from "./src/navigation/TopBarNavigator";
import Spacing from "./src/constants/Spacing";
import Colors from "./src/constants/Colors";
import Constants from "expo-constants";
import ChatDetail from "./src/containers/1_Chat/ChatDetail";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();

const optionsTopBar = {
  headerTitle: Constants.manifest.name,
  headerStyle: {
    backgroundColor: Colors.primary,
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerTintColor: Colors.textInverted,
  headerRight: () => (
    <View style={{ flexDirection: "row", padding: Spacing.padding }}>
      <TouchableOpacity style={{ marginEnd: Spacing.padding }}>
        <MaterialIcons
          name={"search"}
          size={Spacing.icon_AppBar}
          color={Colors.textInverted}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons
          name={"more-vert"}
          size={Spacing.icon_AppBar}
          color={Colors.textInverted}
        />
      </TouchableOpacity>
    </View>
  ),
};

export default function App() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    console.log("clicked");
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={optionsTopBar}
            name="Root"
            component={TopBarNavigator}
          />
          <Stack.Screen
            name="ChatDetail"
            component={ChatDetail}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
