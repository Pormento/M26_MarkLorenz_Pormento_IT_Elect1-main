import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import MessChat from "./MessChat";

export default function ScreenChat() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello Mcair", sender: "bot" },
    { id: "2", text: "HAHAHAHHAHAAHA", sender: "me" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { id: Date.now().toString(), text: input, sender: "me" };
    setMessages([newMessage, ...messages]);
    setInput("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MessChat text={item.text} isMe={item.sender === "me"} />
          )}
          inverted
          contentContainerStyle={{ padding: 10 }}
        />

        
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            borderTopWidth: 1,
            borderColor: "#ddd",
            backgroundColor: "#f9f9f9",
          }}
        >
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type a message"
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 25,
              paddingHorizontal: 15,
              paddingVertical: 8,
              backgroundColor: "white",
            }}
          />
          <TouchableOpacity
            onPress={sendMessage}
            style={{
              marginLeft: 10,
              backgroundColor: "#0078fe",
              paddingHorizontal: 20,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
