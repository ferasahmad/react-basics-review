import { formatDate } from "@/utilities/formatDate";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

interface Post {
  id: string;
  title: string;
  description: string;
  totalComments: number;
  totalLikes: number;
  totalDislikes: number;
  authorUsername: string;
  createdAt: string;
  space: Space;
}

type Space = {
  id: string;
  name: string;
  isPrivate: boolean;
};

interface PostProps {
  post: Post;
}

export function Post({ post }: PostProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.postDetails}>
        <Text style={styles.spaceNameAndDate}>
          #{post.space.name} · {formatDate(post.createdAt)}
        </Text>
        <Text style={styles.label}>{post.title}</Text>
        <TouchableOpacity>
          <Text style={styles.username}>Posted by @{post.authorUsername}</Text>
        </TouchableOpacity>
        <Text style={styles.description} numberOfLines={10}>
          {post.description}
        </Text>
      </View>
      <LinearGradient
        style={styles.actions}
        colors={["rgba(255,255,255, 0)", "#F3F4F6", "#F3F4F6"]}
      >
        <Text style={styles.stats}>Comments: {post.totalComments}</Text>
        <View style={styles.likesAndDislikes}>
          <Text style={styles.stats}>Likes:{post.totalLikes} </Text>
          <Text style={styles.stats}>Dislikes:{post.totalDislikes}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DA",
    marginVertical: 10,
    position: "relative",
  },
  postDetails: {
    margin: 16,
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "bold",
    color: "#121827",
    marginBottom: 12,
  },
  spaceNameAndDate: {
    fontSize: 12,
    marginBottom: 12,
  },
  username: {
    fontSize: 13,
    color: "#4B5563",
    marginBottom: 24,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: "#374251",
    marginBottom: 12,
  },
  actions: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    paddingTop: 50,
    bottom: 0,
    right: 0,
    left: 0,
  },
  likesAndDislikes: {
    flexDirection: "row",
  },
  stats: {
    fontSize: 14,
    color: "#4B5563",
  },
});
