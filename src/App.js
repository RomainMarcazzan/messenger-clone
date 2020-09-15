import React, { useEffect, useState } from "react";
import "./App.css";
import { FormControl, Input } from "@material-ui/core";
import Message from "./components/Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("MERCI DE MARQUER VOTRE NOM"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt="logo"
      />
      <h1>Messenger Clone</h1>
      <h2>Bienvenu(e) {username} </h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Ecrire un message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="app__iconButton"
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
            disabled={!input}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map((message) => (
          <Message
            key={message.id}
            username={username}
            message={message.message}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
