import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { IconButton, MD3Colors } from "react-native-paper";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5FCFF",
      }}
    >
      <View style={{ width: "90%" }}>
        <Text style={{ fontWeight: 200, fontSize: 12, textAlign: "center" }}>
          Create unique images and get personalized mentorship and guidance from
          AI.
        </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardTextCon}>
          <Icon name="user" size={30} color="#fff" />
          <Text style={styles.cardText}>Get Mentorship</Text>
        </View>
        <IconButton
          icon="arrow-right"
          iconColor={MD3Colors.primary100}
          size={20}
          style={styles.cardBtn}
          onPress={() => navigation.navigate("ChatScreen", { role: "mentor" })}
        />
      </View>
      {/* Second  */}
      <View style={styles.card}>
        <View style={styles.cardTextCon}>
          <Icon name="image" size={30} color="#fff" />
          <Text style={styles.cardText}>Create Images</Text>
        </View>
        <IconButton
          icon="arrow-right"
          iconColor={MD3Colors.primary100}
          size={20}
          style={styles.cardBtn}
          onPress={() => navigation.navigate("ChatScreen", { role: "image" })}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    margin: 10,
    width: "90%",
    flexDirection: "row",
    backgroundColor: "#4488ff",
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardTextCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardText: {
    marginLeft: 10,
    fontWeight: 900,
    color: "#efefef",
  },
  cardBtn: {
    backgroundColor: "#333",
  },
});
export default HomeScreen;
