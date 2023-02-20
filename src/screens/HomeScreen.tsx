import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";

import { Header } from "../components/Header";

import { useFilms } from "../hooks/useFilms";
import { FilmsList } from "../components/FilmsList";

export const HomeScreen = () => {
  // const babane = useGhibloux("castle in the sky");
  const { data, isLoading, isError } = useFilms();

  if (isLoading) {
    return <Text>Loading…</Text>;
  }

  if (isError) {
    return (
      <View>
        <Text>Error 😕</Text>
      </View>
    );
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
