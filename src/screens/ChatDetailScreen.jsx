import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
  Octicons,
} from "@expo/vector-icons";
const ChatDetailScreen = () => {
  const navigation = useNavigation();
  const {
    params: { item },
  } = useRoute();

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "ios" ? 0 : hp(3),
      }}>
      <View className="justify-between items-center flex-row w-full p-4 border-b border-neutral-300">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-full flex-row items-center">
          <Ionicons name="chevron-back" size={24} color="black" />
          <View className="border-2 rounded-full border-red-400 mr-2 ml-4">
            <Image
              className="rounded-full"
              source={item.imgUrl}
              style={{
                width: hp(5),
                height: hp(5),
              }}
            />
          </View>
          <View className="justify-center items-start">
            <Text className="font-bold text-base">
              {item.name}
              {","}
              {item.age}
            </Text>
          </View>
          <MaterialCommunityIcons
            style={{
              marginLeft: "auto",
            }}
            name="dots-horizontal"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View className="w-full h-full">
        <Text className="text-center uppercase text-neutral-400 pt-4">
          Today
        </Text>
        <FlatList
          data={item.chat}
          contentContainerStyle={{
            paddingBottom: hp(15),
          }}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: item.sender === "me" ? "row-reverse" : "row",
                  padding: 10,
                  paddingVertical: item.sender === "me" ? 13 : 3,
                }}>
                <View
                  style={{
                    width: "auto",
                    maxWidth: "70%",
                  }}>
                  <View
                    style={{
                      borderBottomRightRadius: item.sender === "me" ? 0 : 20,
                      borderBottomLeftRadius: item.sender === "me" ? 20 : 0,
                      backgroundColor:
                        item.sender === "me" ? "#171717" : "#3b82f6",
                      padding: 10,
                      borderRadius: 10,
                    }}>
                    <Text className="text-white text-base leading-5">
                      {item.message}
                    </Text>
                  </View>
                  {item.sender === "me" && (
                    <Text className="text-xs font-semibold text-neutral-500 text-right mt-2">
                      {"Read"} {item.timestamp}
                    </Text>
                  )}
                </View>
              </View>
            );
          }}
        />
      </View>
      <View className="absolute w-full flex-row justify-between items-center px-4 pb-12 pt-2 bg-white bottom-16">
        <View className="flex-row items-center rounded-2xl bg-neutral-200 px-3 py-3 w-[85%]">
          <TextInput
            className="h-6 flex-1"
            placeholder="Write your message here"
            placeholderTextColor={"gray"}
          />
          <View className="flex-row justify-center items-center space-x-1">
            <FontAwesome name="photo" size={24} color="gray" />
            <Feather name="smile" size={24} color="black" />
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#3b82f6",
            padding: 10,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Octicons name="paper-airplane" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatDetailScreen;

const styles = StyleSheet.create({});
