import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Carousel from "react-native-snap-carousel";
import { Feather } from "@expo/vector-icons";
import { datesData } from "../constant";
import DatesCard from "../components/DatesCard";
import { LinearGradient } from "expo-linear-gradient";
const HomeScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView
      className="bg-white flex-1 justify-between"
      style={{
        paddingTop: Platform.OS === "ios" ? 0 : hp(2),
      }}>
      <View className="w-full flex-row items-center justify-between px-4 mb-8">
        <View className="items-center justify-center">
          <Image
            className="rounded-full"
            source={require("../../assets/images/profile.jpg")}
            style={{
              width: hp(4.5),
              height: hp(4.5),
            }}
          />
        </View>
        <View>
          <Text className="font-semibold text-2xl text-center uppercase">
            Dates Sample
          </Text>
        </View>
        <View className="bg-black/10 p-2 rounded-full items-center justify-center">
          <TouchableOpacity>
            <Feather name="bell" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="pb-4">
        <View className="mx-4 mb-4">
          <Text
            style={{
              fontFamily: "SpaceGroteskBold",
            }}
            className="text-2xl font-semibold capitalize">
            Find Your Love
          </Text>
        </View>
        <View>
          <Carousel
            data={datesData}
            renderItem={({ item }) => <DatesCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.6}
            inactiveSlideScale={0.86}
            sliderWidth={width}
            itemWidth={width * 0.8}
            slideStyle={{ display: "flex", alignItems: "center" }}
            autoplay={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
