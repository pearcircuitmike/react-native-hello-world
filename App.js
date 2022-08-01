import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAvoidingView } from "react-native-web";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>To do:</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go */}
          <Task text={"Text 1"} />
          <Task text={"Text 2"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
