import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { profileData } from "../constant";
const ProfileScreen = () => {
  const { width, height } = useWindowDimensions();
  const data = profileData[0];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="relative bg-white flex-1"
      contentContainerStyle={{
        paddingBottom: hp(5),
      }}>
      <View>
        <Image
          source={data.imgUrl}
          className=""
          style={{
            width: wp(100),
            height: hp(60),
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        />
      </View>

      <View className="w-full absolute flex-row justify-end items-center pt-12">
        <View className="p-2 rounded-full bg-black/40 mr-5 justify-between">
          <AntDesign name="camerao" size={28} color="white" />
        </View>
      </View>
      <View className="w-full justify-start items-start px-6 space-y-4 mt-6">
        <View className="flex-row space-x-2 justify-between w-full items-center">
          <View className="flex-row">
            <Text className="text-black text-center font-bold text-xl">
              {data.name}
              {","}
            </Text>
            <Text className="text-black text-center font-bold text-xl">
              {data.age}
            </Text>
          </View>
          <Text className="text-neutral-600 text-lg">Edit</Text>
        </View>
        <View>
          <View className="flex-row">
            {data?.hobbies.map((dt, index) => {
              return (
                <View
                  key={index}
                  style={{
                    borderRadius: 16,
                    padding: 8,
                    paddingHorizontal: 12,
                    marginRight: 5,
                    backgroundColor: "#d3d3d3",
                  }}>
                  <Text className="text-slate-900 text-base">{dt}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <Text className="text-sm text-slate-900 uppercase font-semibold">
          BIO
        </Text>
        <Text className="text-sm tracking-wider leading-6 text-slate-900 mb-2">
          {data.bio}
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
