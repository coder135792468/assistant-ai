import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  Text,
} from "react-native";
import { Button, ActivityIndicator, MD2Colors } from "react-native-paper";
import Message from "../components/Message";
import { getMessage } from "../utils/routes";
import { prompt } from "../utils/contants";

const ChatScreen = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  const role = route?.params?.role || "mentor";

  const textMsg = async () => {
    const newMsgs = [
      ...messages,
      {
        role: "user",
        content: value,
        time: Date.now(),
        isOwnMessage: true,
        imageUrl: null,
      },
    ];
    setMessages(newMsgs);
    setValue("");
    const curMsgs = newMsgs.map((msg) => {
      return {
        role: msg.role,
        content: msg.content,
      };
    });
    const res = await getMessage([
      prompt[role],
      ...curMsgs,
      {
        role: "user",
        content: value,
      },
    ]);

    setMessages([
      ...newMsgs,
      {
        role: "system",
        content: res.content,
        time: Date.now(),
        isOwnMessage: false,
        imageUrl: null,
      },
    ]);
  };

  const imageMsg = async () => {
    const newMsgs = [
      ...messages,
      {
        role: "user",
        content: value,
        time: Date.now(),
        isOwnMessage: true,
        imageUrl: null,
      },
    ];
    setMessages(newMsgs);

    setValue("");
    const res = await getImage(newMsgs[newMsgs.length - 1].content);
    setMessages([
      ...newMsgs,
      {
        role: "system",
        content: null,
        time: Date.now(),
        isOwnMessage: false,
        imageUrl: res.data[0].url,
      },
    ]);
  };
  const sendMessage = async () => {
    try {
      setLoading(true);
      if (role === "mentor") {
        await textMsg();
      } else {
        await imageMsg();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.chatScreen}>
      <ScrollView style={styles.chatContainer}>
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </ScrollView>
      {messages.length === 0 && (
        <View style={{ ...styles.chatContainer, ...styles.nomsg }}>
          <Text style={{ fontWeight: 200, fontSize: 20 }}>
            Start Your Conversation
          </Text>
          <Image source={require("../assets/empty.png")} style={styles.image} />
        </View>
      )}
      <View style={styles.chatBox}>
        <TextInput
          style={styles.inputBox}
          onChangeText={(newText) => setValue(newText)}
          value={value}
          placeholder="Type something.."
        />
        <Button disabled={loading} mode="contained" onPress={sendMessage}>
          {loading ? (
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          ) : (
            "Send"
          )}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatScreen: {
    flex: 1,
  },
  nomsg: {
    alignItems: "center",
    justifyContent: "center",
  },
  chatContainer: {
    flex: 1,
  },
  chatBox: {
    height: 70,
    backgroundColor: "#dfdfdf",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputBox: {
    backgroundColor: "#fff",
    width: "60%",
    margin: 10,
    padding: 10,
    borderRadius: 40,
  },

  //image
  image: {
    width: 200,
    height: 200,
    position: "relative",
    top: -200,
  },
});

export default ChatScreen;
