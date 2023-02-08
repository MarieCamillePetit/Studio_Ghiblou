import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";

import { Header } from "../components/Header";
import { fetchGhibli, useGhibloux } from "../hooks/useGhiblou";

import { useFilms } from "../hooks/useFilms";
import { FilmsList } from "../components/FilmsList";

export const HomeScreen = () => {
  // const babane = useGhibloux("castle in the sky");
  const { data, isLoading, isError } = useFilms();

  if (isLoading) {
    return <Text>Loading…</Text>;
  }

  if (isError) {
    return <Text>Error 😕</Text>;
  }

  return (
    <SafeAreaView>
      <View>
        <View>
          <Header title={"Studio Ghiblou"}></Header>
        </View>
      </View>
      <FilmsList data={data} />
    </SafeAreaView>
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
