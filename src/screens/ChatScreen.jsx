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
  useWindowDimensions,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Matches from "../components/Matches";
import { chatData } from "../constant";
import { useNavigation } from "@react-navigation/native";
const ChatScreen = () => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "ios" ? 0 : hp(3),
      }}>
      <View className="px-4">
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => {
            return (
              <>
                <View className="py-4 px-2 border-b border-neutral-300">
                  <Text className="uppercase font-semibold text-neutral-500 tracking-widest">
                    Chat
                  </Text>
                </View>
                <View className="px-2 my-2">
                  <Text className="uppercase font-semibold text-neutral-500 tracking-wider">
                    Matches
                  </Text>
                </View>
                <Matches />
                <View className="rounded-3xl p-4 mb-2 bg-gray-300 flex-row items-center mt-6">
                  <TextInput
                    className="flex-1 text-base mb-1 pb-1 tracking-widest"
                    placeholder="Search"
                    placeholderTextColor={"gray"}
                    style={{
                      fontSize: hp(1.7),
                    }}
                  />
                  <View>
                    <FontAwesome6
                      name="magnifying-glass"
                      size={24}
                      color="gray"
                    />
                  </View>
                </View>
              </>
            );
          }}
          data={chatData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                className="w-full py-3 items-center flex-row border-b border-neutral-300"
                onPress={() => navigation.navigate("ChatDetail", { item })}>
                <View
                  className="w-[17%] justify-center"
                  style={{
                    width: hp(7),
                    height: hp(7),
                  }}>
                  <Image
                    className="rounded-full mr-4"
                    source={item.imgUrl}
                    style={{
                      width: hp(7),
                      height: hp(7),
                    }}
                  />
                </View>
                <View
                  className="w-[82%] mx-2"
                  style={{
                    height: hp(6),
                  }}>
                  <View className="flex-row items-center ">
                    <View className="flex-row justify-center ">
                      <View className="flex-row justify-start">
                        <Text className="font-bold text-base">
                          {item.name}
                          {","}
                        </Text>
                        <Text className="font-bold text-base">{item.age}</Text>
                      </View>
                      {item.isOnline && (
                        <View className="justify-center items-center">
                          <View className="w-2 h-2 bg-orange-600 rounded-full ml-1 justify-center"></View>
                        </View>
                      )}
                    </View>
                    <Text className="ml-auto">{item.timeSent}</Text>
                  </View>
                  <View>
                    <Text>
                      {item.lastMessage.length > 45
                        ? `${item.lastMessage}...`
                        : item.lastMessage}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
