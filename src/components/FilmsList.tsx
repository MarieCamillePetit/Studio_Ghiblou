import { View, FlatList } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import React from "react";
import { formatFilmsToArray } from "./formatFilmsToArray";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { Routes } from "../navigation/Routes";

interface RenderItemProps {
  item: {
    key: string;
    value: {
      music: string;
      poster: string;
      release: string;
      director: string;
      genre: string;
      synopsis: string;
      reviews: {
        imdb: string;
      };
      // character?: [];
    };
  };
}

const ButtonSeeMore = ({
  props: [title, poster, release, genre, music, synopsis, director, reviews],
}: any) => {
  const navigation = useNavigation<any>();
  return (
    <Card.Actions>
      <Button
        onPress={() =>
          navigation.navigate(Routes.MOVIE_SCREEN_DETAIL, {
            title,
            poster,
            release,
            genre,
            music,
            synopsis,
            director,
            reviews,
          })
        }
      >
        See more!
      </Button>
    </Card.Actions>
  );
};

export const renderItem = (props: RenderItemProps) => {
  const title = props.item.key;
  const poster = props.item.value.poster;
  const release = props.item.value.release;
  const genre = props.item.value.genre;
  const music = props.item.value.music;
  const synopsis = props.item.value.synopsis;
  const director = props.item.value.director;
  const reviews = props.item.value.reviews.imdb;

  return (
    <SafeAreaView>
      <View
        style={{
          marginBottom: 12,
          padding: 2,
        }}
      >
        <Card>
          <Card.Title
            titleVariant="displaySmall"
            title={title}
            titleStyle={{
              textAlign: "center",
              textTransform: "capitalize",
            }}
          />
          <Card.Cover source={{ uri: `${poster}` }} style={{ margin: 10 }} />
          <Card.Content>
            <Text variant="labelLarge">Release : {release}</Text>
            <Text variant="bodyMedium">Genres : {genre}</Text>
          </Card.Content>
          <ButtonSeeMore
            props={[
              title,
              poster,
              release,
              genre,
              music,
              synopsis,
              director,
              reviews,
            ]}
          />
        </Card>
      </View>
    </SafeAreaView>
  );
};

interface FilmsListProps {
  data: RenderItemProps[];
}

export const FilmsList = ({ data }: FilmsListProps) => {
  const films = formatFilmsToArray(data);

  return (
    <View>
      <FlatList
        data={films}
        renderItem={renderItem}
        keyExtractor={(film) => film.key}
      />
    </View>
  );
};
