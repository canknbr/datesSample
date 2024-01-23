import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ChatDetailScreen from "../screens/ChatDetailScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
const Tabs = createBottomTabNavigator();

const TabNavigators = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#3883f6",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? "#3883f6" : "gray"}
              />
            );
          } else if (route.name === "Chat") {
            return (
              <Ionicons
                name={focused ? "chatbubble" : "chatbubble-outline"}
                size={24}
                color={focused ? "#3883f6" : "gray"}
              />
            );
          } else if (route.name === "Profile") {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? "#3883f6" : "gray"}
              />
            );
          }
        },
      })}>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Chat" component={ChatScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default TabNavigators;
