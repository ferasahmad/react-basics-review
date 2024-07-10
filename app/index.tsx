import { Input } from "@/components/Input";
import { Post } from "@/components/Post";
import { Space } from "@/components/Space";
import { SpaceCard } from "@/components/SpaceCard";
import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";

const post = {
  id: "thr_clydcg5cq002v07mca1hf08y7",
  title: "What is websim ai? What does the product do?",
  description:
    "Short answer: WebSim AI is a platform that allows users to create web apps and projects using AI models like Claude or GPT-4o. It enables users to create full-fledged applications from text prompts, with features like front-end UI, code, and design[1][2][3].\n\nResearching more...\n\nWebSim AI is an interactive simulation platform that lets users create fully functional internet websites and applications using advanced AI models like Claude and GPT-4o. By inputting simple text descriptions or commands, users can generate complete web projects, including the front-end UI and code, instantly. This tool is particularly useful for users who want to develop their ideas without needing extensive coding skills[1][3][4][5].",
  citations: [
    "https://www.youtube.com/watch?v=clduHTg61IE",
    "https://websim.ai/c/lyIIJIEemsdt7wnJC",
    "https://www.linkedin.com/pulse/websimai-glimpse-future-internet-deane-jessep-1b8sc",
    "https://www.yahoo.com/tech/meet-websim-ai-playground-lets-054526608.html",
    "https://www.tomsguide.com/ai/meet-websim-the-ai-playground-that-lets-you-make-anything-you-can-imagine-in-seconds",
  ],
  author: "google-oauth2|117997763652513580115",
  authorUsername: "SteepGold",
  createdAt: "2024-07-08T18:56:54.556Z",
  totalComments: 0,
  totalLikes: 0,
  totalDislikes: 0,
  userAction: null,
  space: {
    id: "spc_clx55x148000007mcetcv58b0",
    name: "startups",
    isPrivate: false,
  },
};

export default function Index() {
  const [search, setSearch] = useState("");
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "white",
          padding: 25,
        }}
      >
        <Input
          value={search}
          setValue={setSearch}
          placeholder="Search Spaces"
        />
        <Post post={post} />
        <Space spaceName={post.space.name} />
        <Space spaceName={post.space.name} />
        <Space spaceName={post.space.name} />
        <SpaceCard
          space={{
            name: "startups",
            description:
              "All things startups things startups things startups things startups things startups things startups things startups things startups things startups  things startups things startups things startups things startups things startups  things startups things startups things startups things startups things startups  things startups things startups things startups things startups things startups",
            amountOfMembers: 5000,
            amountOfPosts: 132000,
          }}
        />
      </View>
    </ScrollView>
  );
}
