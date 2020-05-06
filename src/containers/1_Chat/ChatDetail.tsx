import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function ChatDetail({ route, navigation }: any) {
  const chat = route.params.chat;
  navigation.setOptions(options(chat));
  return <Text>Detail</Text>;
}

export default ChatDetail;

const options = (chat: any) => {
  return {
    headerStyle: {
      backgroundColor: Colors.primary,
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerTintColor: Colors.textInverted,
    headerTitle: () => (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginStart: -Spacing.padding_XXL,
        }}
      >
        <Image
          source={{ uri: chat.image }}
          style={{
            width: 32,
            height: 32,
            borderRadius: Spacing.radius_circle,
            marginEnd: Spacing.padding,
          }}
        />
        <Text
          style={{
            color: Colors.textInverted,
            fontSize: Spacing.font_L,
            fontWeight: "500",
          }}
        >
          {chat.name}
        </Text>
      </View>
    ),
    headerRight: () => (
      <View style={{ flexDirection: "row", padding: Spacing.padding }}>
        <TouchableOpacity style={{ marginEnd: Spacing.padding_L }}>
          <MaterialCommunityIcons
            name={"video"}
            size={Spacing.icon_AppBar}
            color={Colors.textInverted}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginEnd: Spacing.padding_L }}>
          <MaterialCommunityIcons
            name={"phone"}
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
};
