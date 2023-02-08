import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";
// You can import from local files

import { Header } from "../components/Header";
import { fetchGhibli } from "../hooks/useGhiblou";
import { useQuery } from "@tanstack/react-query";

interface GhiblouProps {
  title: string;
  poster: string;
  genre: string;
  release: string;
  director: string;
}

interface RenderItemProps {
  item: GhiblouProps;
}

const renderItem = (props: RenderItemProps) => {
  const ghib = props.item;

  return (
    <View>
      <Text>Title : {ghib.title}</Text>
    </View>
  );
};

export const HomeScreen = () => {
  const { isInitialLoading, isError, data } = useQuery(
    ["ghibloux"],
    fetchGhibli
  );
  console.log("yolo", data);
  if (isInitialLoading) {
    return <Text>Loading…</Text>;
  }

  if (isError) {
    return <Text>Error 😕</Text>;
  }

  if (data.results === undefined) {
    return <Text>Not Found</Text>;
  }

  return (
    <>
      <View>
        <View>
          <Header title={"Studio Ghiblou"}></Header>
        </View>
      </View>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(ghib) => ghib.title}
        />
      </SafeAreaView>
    </>
  );
};

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
