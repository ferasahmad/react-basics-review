import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface SpaceProps {
  spaceName: string;
}

export function Space({ spaceName }: SpaceProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>@</Text>
      <Text>{spaceName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    color: "#121827",
    flexDirection: "row",
    gap: 12,
    padding: 10,
    borderRadius: 8,
  },
});
