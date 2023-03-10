import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export const Header = ({ title }: { title: string }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../../assets/logo_ghiblou.png")}
            style={styles.logo}
          />
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
