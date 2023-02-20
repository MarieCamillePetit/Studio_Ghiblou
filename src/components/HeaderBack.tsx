import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export const HeaderBack = ({ title }: { title: string }) => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text
            style={{ paddingTop: 13 }}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.goBack();
            }}
          >
            ⬅️ Back
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text variant="headlineMedium" style={styles.headerText}>
            {title}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  headerText: {
    textAlign: "center",
    margin: 1,
  },
  logo: {
    width: 50,
    height: 55,
  },
});
