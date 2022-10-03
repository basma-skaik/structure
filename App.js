import { ScrollView, StyleSheet, View } from "react-native";
import Header from "./Components/Header";
import QuestionsSection from "./Components/QuestionsSection";
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{ paddingVertical: 10 }}>
        <QuestionsSection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
