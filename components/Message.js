import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";

const Message = ({ content, isOwnMessage, time, imageUrl = null }) => {
  const curTime = new Date(time);

  return (
    <View
      style={[
        styles.messageContainer,
        isOwnMessage ? styles.outgoingMessage : styles.incomingMessage,
      ]}
    >
      <Text style={styles.messageText}>{content}</Text>

      {imageUrl && (
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: imageUrl,
            }}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.downloadButton}
            onPress={() => Linking.openURL(imageUrl)}
          >
            <Text style={styles.downloadButtonText}>Download</Text>
          </TouchableOpacity>
        </View>
      )}
      <Text style={styles.timeText}>{curTime.toDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  outgoingMessage: {
    backgroundColor: "#007BFF",
    alignSelf: "flex-end",
  },
  incomingMessage: {
    backgroundColor: "#333",
    alignSelf: "flex-start",
  },
  messageText: {
    color: "#fff",
    fontSize: 16,
  },
  timeText: {
    color: "#999",
    fontSize: 12,
    alignSelf: "flex-end",
    marginTop: 3,
  },

  //Image
  imageContainer: {
    backgroundColor: "#fff",
    padding: 4,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  downloadButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 5,
  },
  downloadButtonText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Message;
