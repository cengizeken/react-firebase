import React, { useState, useCallback } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const ref = collection(db, "posts");

const AddPost = () => {
  const [body, setBody] = useState(""); //input içerisindeki veriyi almak için bir state oluşturalım
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addDoc(ref, {
        body,
      });
    },
    [body]
  );
  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="What are you working on"
          className="bg-gray-100 p-4 rounded-t-md"
          value={body}
          onChange={(e) => setBody(e.currentTarget.value)}
        ></input>
        <input
          type="submit"
          value="Send"
          className="bg-pink-400 p-4 rounded-b-md"
        ></input>
      </form>
    </div>
  );
};

export default AddPost;
