import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export const Header = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        {/* <img src={require("../../assets/logo_ghiblou.png")} /> */}
      </View>
      <Text variant="headlineMedium" style={styles.headerText}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 4,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    textAlign: "center",
    marginBottom: 12,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
