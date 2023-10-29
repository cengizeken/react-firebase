import { useState } from "react";
import { useCallback } from "react"; //component içerisinde fonksiyon kullanabilmek için bu hook u kullanıyoruz
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      if (!email || !password) {
        return;
      }
      e.preventDefault(); //Girilen email adrsinin yüklenen sayfada kalması için
      //console.log("email", email, "password", password);
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          //alert("you have signed up");
          updateProfile(auth.user, {displayName:name})
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [name, email, password]
  ); //ilk parametre çağırmak istediğimiz fonksiyon, 2 .parametre ise
  //dependencies array

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl">Create new account</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
        <input
         type="text"
         className="p-4 bg-gray-100 rounded-md"
         placeholder="Enter your name"
         value={name}
         onChange={(e) =>{setName(e.currentTarget.value)}}
        >
         </input>
        <input
          type="email"
          placeholder="Enter Your e-mail address"
          className="p-4 bg-gray-100 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter Your password"
          className="p-4 bg-gray-100 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        ></input>
        <input
          type="submit"
          value="sign up"
          placeholder="Enter Your password"
          className="p-4 bg-green-400 rounded-md"
        ></input>
        <Link to = "/sign-in"> Have already an account?Sign In</Link>
      </form>
      
    </div>
  );
};

export default SignUp;
