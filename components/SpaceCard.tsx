import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Space = {
  name: string;
  description: string;
  amountOfMembers: number;
  amountOfPosts: number;
};

interface SpaceCardProps {
  space: Space;
}

export function SpaceCard({ space }: SpaceCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text numberOfLines={1} style={styles.label}>
        {space.name}
      </Text>
      <Text numberOfLines={5} style={styles.description}>
        {space.description}
      </Text>
      <View style={styles.postsAndMembers}>
        <Text>posts:{space.amountOfPosts}</Text>
        <Text>members:{space.amountOfMembers}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DA",
    shadowOffset: { width: 0, height: 5 },
    marginVertical: 10,
    elevation: 2,
    position: "relative",
    width: "100%",
    padding: 16,
    height: 180,
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "bold",
    color: "#121827",
    marginBottom: 12,
  },
  description: {
    flex: 1,
    lineHeight: 20,
    color: "#374251",
  },
  postsAndMembers: {
    flexDirection: "row",
    marginTop: "auto",
  },
});
