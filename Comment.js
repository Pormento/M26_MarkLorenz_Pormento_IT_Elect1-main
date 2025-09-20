import React, { useState } from "react";
import { View, TextInput, Button, ScrollView, Image, Text, SafeAreaView } from "react-native";

export default function Comment() {
  const [comments, setComments] = useState([
    { id: "c1", user: "Ultra Nerd", text: "if u type ur gay", time: "2h ago", avatar: "https://api.dicebear.com/7.x/adventurer/png?size=150&seed=Galaxy" },
    { id: "c2", user: "Nickerrrr", text: "....", time: "1h ago", avatar: "https://api.dicebear.com/7.x/adventurer/png?size=150&seed=John" },
  ]);

  const [input, setInput] = useState("");

  const handleAddComment = () => {
    if (!input.trim()) return;
    setComments([
      ...comments,
      { id: Date.now().toString(), user: "You", text: input, time: "Just now", avatar: "https://i.pravatar.cc/150?img=1" },
    ]);
    setInput("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        {comments.map((c) => (
          <View key={c.id} style={{ flexDirection: "row", marginBottom: 10 }}>
            <Image
              source={{ uri: c.avatar }}
              style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold" }}>{c.user}</Text>
              <Text>{c.text}</Text>
              <Text style={{ fontSize: 12, color: "gray" }}>{c.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={{ flexDirection: "row", padding: 10, borderTopWidth: 1, borderColor: "#ddd" }}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Add a comment"
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 20,
            paddingHorizontal: 15,
            marginRight: 10,
          }}
        />
        <Button title="Post" onPress={handleAddComment} />
      </View>
    </SafeAreaView>
  );
}
