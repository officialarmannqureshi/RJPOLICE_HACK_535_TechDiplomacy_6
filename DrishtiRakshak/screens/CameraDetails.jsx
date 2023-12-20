import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function CameraDetails() {
  const route = useRoute();
  const { image, name, message, date, time } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.senderName}>{name}</Text>
        <Text style={styles.messageText}>{message}</Text>
        <Text>Lattitude</Text>
        <Text>Longitude</Text>
        <Text>Status of Operation</Text>
        <Text style={styles.dateTimeText}>
          {date} At {time}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#600EE6",
    marginBottom: 20,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  senderName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  messageText: {
    fontSize: 18,
    textAlign: "center",
    color: "#444",
    marginBottom: 20,
  },
  dateTimeText: {
    fontSize: 16,
    color: "#777",
  },
});

export default CameraDetails;