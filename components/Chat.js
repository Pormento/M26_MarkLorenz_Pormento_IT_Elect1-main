import React, { useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Chat = () => {
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState("");

  // re-use
  const Message = ({text, isSender}) => (
    <View style={[styles.message, isSender ? styles.sender : styles.receiver]}> 
      <Text style={styles.text}>{text}<Text/>
    </View> 
  );

  // handle
  const handleSend = () => {
    if (input.trim()) {
      setMessage.([...messages, { id: Date.now().toString(), text: input, isSender: true}]);
      setInput("");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Message text={item.text} isSender={item.isSender}/>}
        contentContainerStyle={styles.chatContainer}
      />
    
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
        />
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  chatContainer: {  padding: 10 },
  message: {
    padding:  10,
    marginVertical: 5,
    borderRadius: 12,
    maxWidth: "80%",
  },
  sender: { alignSelf: "flex-end", backgroundColor: "#DCF8C6" },
  receiver: { alignSelf: "flex-start", backgroundColor: "#ECECEC" },
  text: { fontSize: 16 },
  inputContainer: {
    flexDirection: "row",
    padding: 8,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    flex: 1,
    bakcgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  button: {
    marginLeft: 8,
    bakcgroundColor: "#007AFF",
    borderRadius: 20,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  button: { color: "#fff", fontWeight: "bold" },
});

export default Chat;
