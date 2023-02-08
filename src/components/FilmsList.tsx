import { View, FlatList } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import { formatFilmsToArray } from "./formatFilmsToArray";

interface RenderItemProps {
  item: {
    key: string;
    value: {
      music: string;
      poster: string;
      rating: string;
      release: string;
      reviews: {
        imdb: string;
        rottenTomatoes: string;
      };
      character?: [];
    };
  };
}

const renderItem = (props: RenderItemProps) => {
  const title = props.item.key;
  const music = props.item.value.music;

  return (
    <View
      style={{
        backgroundColor: "rgba(255,255,255,0.9)",
        marginBottom: 12,
        padding: 8,
      }}
    >
      <Text variant="displaySmall">{title}</Text>
      <Text variant="bodyMedium">Music by {music}</Text>
    </View>
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
