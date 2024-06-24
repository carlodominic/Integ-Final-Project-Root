import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../../assets/image/logo.png";

export default function TeacherDashboard() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="bars" size={30} color="#000" />
        </TouchableOpacity>
        <Image source={Logo} style={styles.logo} />
      </View>
      <Text style={styles.dashboardText}>Dashboard</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={[styles.card, styles.profileCard]}>
          <Icon name="user" size={52} color="#fff" />
          <Text style={styles.cardText}>PROFILE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.notificationCard]}>
          <Icon name="bell" size={50} color="#fff" />
          <Text style={styles.cardText}>NOTIFICATION</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, styles.courseCard]}
          onPress={() => navigation.navigate("TeacherCourseManagement")}
        >
          <Icon name="book" size={40} color="#fff"  />
          <Text style={styles.cardText}>COURSE & STUDENT MANAGEMENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 20,
  },
  logo: {
    width: 150, 
    height: 50, 
    resizeMode: "contain",
    alignItems: "center",
  },
  menuButton: {
    position: "absolute",
    left: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  dashboardText: {
    fontSize: 18,
    margin: 10,
    fontWeight: "500",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    width: "40%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    elevation: 10, 
    borderWidth: 0.3, 
    borderColor: "#000", 
  },
  profileCard: {
    height: 192,
    width: 141,
    backgroundColor: "#b56576",
    marginLeft: 20,
  },
  notificationCard: {
    height: 192,
    width: 141,
    backgroundColor: "#E56b6f",
    marginRight: 20,
  },
  courseCard: {
    width: 296,
    backgroundColor: "#EAAC8B",
  },
  cardText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "semibold",
    textAlign: "center",
    marginTop: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    shadowOpacity: 100,
  },
  homeButton: {},
});
