import * as React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Card, Text } from "react-native-paper";
import { HeaderBack } from "../components/HeaderBack";

export const DetailScreen = ({ route }: any) => {
  const title = route.params.title;
  const poster = route.params.poster;
  const release = route.params.release;
  const genre = route.params.genre;
  const music = route.params.music;
  const synopsis = route.params.synopsis;
  const director = route.params.director;
  const reviews = route.params.reviews;

  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderBack title={"Studio Ghiblou"}></HeaderBack>

        <Card style={{ margin: 10 }}>
          <Card.Title
            titleVariant="displaySmall"
            title={title}
            titleStyle={{
              textAlign: "center",
              textTransform: "capitalize",
            }}
          />
          <Card.Cover
            source={{ uri: `${poster}` }}
            style={{
              margin: 5,
            }}
          />
          <Card.Content>
            <Text variant="labelLarge" style={{ margin: 5 }}>
              Release : {release}
            </Text>
            <Text variant="labelLarge" style={{ margin: 5 }}>
              Genres : {genre}
            </Text>
            <Text variant="labelLarge" style={{ margin: 5 }}>
              Director : {director}
            </Text>
            <Text variant="labelLarge" style={{ margin: 5 }}>
              Music : {music}
            </Text>
            <Text variant="labelLarge" style={{ margin: 5 }}>
              Synopsis : {synopsis}
            </Text>
            <Text variant="labelLarge" style={{ margin: 5 }}>
              Reviews : {reviews}
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};
