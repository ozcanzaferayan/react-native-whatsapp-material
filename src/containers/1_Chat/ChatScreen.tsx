import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet, Button } from "react-native";
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const ChatScreen = ({ navigation }: any) => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://hwasampleapi.firebaseio.com/chats.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <FlatList
      style={{ flex: 1 }}
      data={data}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: StyleSheet.hairlineWidth,
            backgroundColor: Colors.hairline,
          }}
        ></View>
      )}
      keyExtractor={(item) => {
        return item.image;
      }}
      renderItem={({ item }) => {
        console.log(item);
        return (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              padding: Spacing.padding,
            }}
            onPress={() => navigation.navigate("ChatDetail", { chat: item })}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: Spacing.profileImage,
                height: Spacing.profileImage,
                borderRadius: Spacing.radius_circle,
                marginEnd: Spacing.padding,
              }}
            />
            <View style={{ flex: 1, justifyContent: "space-evenly" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: Spacing.font_L }}>{item.name}</Text>
                <Text
                  style={{
                    fontSize: Spacing.font_S,
                    color: Colors.textFaded,
                  }}
                >
                  {item.date}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: Spacing.font,
                    color: Colors.textFaded,
                  }}
                  numberOfLines={1}
                >
                  {item.message}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ChatScreen;
