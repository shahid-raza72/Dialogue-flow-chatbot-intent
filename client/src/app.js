import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.css";

export default function App() {
  const [message, updateMessage] = useState("Loading...");
  const [list, updateList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => {
        updateMessage("success");
        updateList(res.data);
      })
      .catch((err) => {
        updateMessage("Failed");
      });
  }, []);

  return (
    <div>
      <h1>Hello I am Triny</h1>
      <div>{message}</div>
      {list.map((intent, index) => (
        <div className="intent" key={index}>
          {intent.displayName}
        </div>
      ))}
    </div>
  );
}