import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

// You can import from local files

// or any pure javascript modules available in npm
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";

import { Header } from "../components/Header";

export default function App() {
  const [text, setText] = React.useState("");
  return (
    <View>
      <View>
        <Header title={"Studio Ghiblou"}></Header>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: "#784ff3",
    padding: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#784ff3",
    padding: 10,
    color: "white",
  },
  input: {
    margin: 10,
  },
  term: {
    margin: 24,
    fontSize: 15,
    textAlign: "center",
    padding: 10,
    color: "grey",
  },
  btn: {
    margin: 25,
  },
});
