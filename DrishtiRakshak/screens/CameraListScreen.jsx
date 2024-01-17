import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const CameraListScreen = () => {
  const navigation = useNavigation();
  const cameras = [
    {
      id: "1",
      image: require("../assets/cctv-public.png"),
      name: "Shop",
      location: "Bombay Misthaan",
      date: "2023-09-14",
      time: "15:00:00",
    },
    {
      id: "2",
      image: require("../assets/cctv-private.png"),
      name: "House",
      location: "ghaziabad",
      date: "2023-09-14",
      time: "15:15:00",
    },
    {
      id: "3",
      image: require("../assets/cctv-private.png"),
      name: "House",
      location: "Nahargarh Palace",
      date: "2023-09-14",
      time: "15:15:00",
    },
    {
      id: "4",
      image: require("../assets/cctv-public.png"),
      name: "Shop",
      location: "Bombay Misthaan",
      date: "2023-09-14",
      time: "15:00:00",
    },
    {
      id: "5",
      image: require("../assets/cctv-private.png"),
      name: "House",
      location: "Nahargarh Palace",
      date: "2023-09-14",
      time: "15:15:00",
    },
    {
      id: "6",
      image: require("../assets/cctv-private.png"),
      name: "House",
      location: "Nahargarh Palace",
      date: "2023-09-14",
      time: "15:15:00",
    },
  ];

  const handlePress = (item) => {
    const { image, name, message, date, time } = item;
    navigation.navigate("CameraDetails", { image, name, message, date, time });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerTitle}
          onPress={() => navigation.navigate("AddNewDevice")}
        >
          <Text>Add new device</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={cameras}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.messageContainer}
            onPress={() => {
              handlePress(item);
            }}
          >
            <Image style={styles.userImage} source={item.image} />
            <View style={styles.messageContent}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userMessage}>{item.location}</Text>
            </View>
            <View style={styles.dateTime}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  header: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  messageContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  userImage: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderColor: "#000000",
    borderWidth: 1,
  },
  messageContent: {
    flex: 1,
    marginLeft: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  userMessage: {
    fontSize: 16,
    color: "#555555",
  },
  dateTime: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  date: {
    fontSize: 14,
    color: "#777777",
  },
  time: {
    fontSize: 14,
    color: "#777777",
  },
});

export default CameraListScreen;
