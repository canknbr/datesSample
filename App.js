import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppNavigator from "./src/navigator/AppNavigator";

const App = () => {
  return (
    <>
      <StatusBar />
      <AppNavigator />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
