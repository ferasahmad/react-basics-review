// 4B5563

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface DetailProps {
  text: string;
}

export function Detail({ text }: DetailProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.icon}></View>
      <Text style={styles.label}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
  },
  icon: {
    height: 20,
    width: 20,
    backgroundColor: "red",
  },
  label: {
    color: "#4B5563",
  },
});
