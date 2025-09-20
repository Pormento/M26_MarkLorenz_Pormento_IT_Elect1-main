import React from "react";
import { View, Text } from "react-native";

export default function MessChat({ text, isMe }) {
  return (
    <View
      style={{
        alignSelf: isMe ? "flex-end" : "flex-start",
        backgroundColor: isMe ? "#0078fe" : "#e5e5ea",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 20,
        marginVertical: 4,
        maxWidth: "75%",
        shadowColor: "#000",
        shadowOpacity: isMe ? 0.2 : 0, 
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: isMe ? 2 : 0,
      }}
    >
      <Text style={{ color: isMe ? "white" : "black", fontSize: 16 }}>
        {text}
      </Text>
    </View>
  );
}

