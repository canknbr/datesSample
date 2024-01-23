import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [fontsLoaded, fontsError] = useFonts({
    SpaceGroteskSemiBold: require("../font/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskBold: require("../font/SpaceGrotesk-Bold.ttf"),
    SpaceGroteskRegular: require("../font/SpaceGrotesk-Regular.ttf"),
    SpaceGroteskMedium: require("../font/SpaceGrotesk-Medium.ttf"),
    SpaceGroteskLight: require("../font/SpaceGrotesk-Light.ttf"),
  });
  const onLayoutView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View
      onLayout={onLayoutView}
      className="flex-1"
      style={{
        width: wp(100),
      }}>
      <View
        className="justify-center items-center"
        style={{
          width: wp(100),
          height: hp(100),
        }}>
        <View
          className="justify-center items-center my-4"
          style={{
            width: wp(100),
          }}>
          <Image
            source={require("../../assets/HeartIcon.png")}
            style={{
              width: wp(100),
              height: hp(40),
              resizeMode: "contain",
            }}
          />
        </View>
        <View className="w-full p-6 px-10">
          <Text
            className="tracking-widest leading-none"
            style={{
              fontSize: wp(10),
              fontFamily: "SpaceGroteskSemiBold",
            }}>
            Embrace
          </Text>
          <Text
            className="tracking-widest w-[70%] leading-none"
            style={{
              fontSize: wp(10),
              fontFamily: "SpaceGroteskSemiBold",
            }}>
            A New Way of Dating
          </Text>
          <Text
            className="text-gray-800 leading-6 tracking-wider w-[60%] mt-2"
            style={{
              fontSize: wp(3),
              fontFamily: "SpaceGroteskMedium",
            }}>
            We combine edge technologies with a modern approach to matchmaking
          </Text>
        </View>
        <View className="w-full px-10">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Tabs");
            }}
            className="bg-orange-400 p-4 rounded-xl flex-row justify-center items-center w-[45%]">
            <Text
              className="text-white font-bold mr-2"
              style={{
                fontSize: wp(4),
                fontFamily: "SpaceGroteskMedium",
              }}>
              Get Started
            </Text>
            <Feather name="arrow-up-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
