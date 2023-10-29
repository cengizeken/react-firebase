import { useCallback, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password) return;

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          //alert("You Have signed in successfully");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [email, password]
  );
  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
        <input
          type="email"
          className="p-4 bg-gray-100 rounded-md"
          placeholder="Enter Your e-mail"
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
        <Link to="/forgot-password" className="ml-auto">Forgot Password?</Link>
        <input
          type="submit"
          className="p-4 bg-yellow-400 rounded-md"
          value="sign in"
        ></input>
        <Link to="/sign-up">Don't have any account? Sign Up</Link>
      </form>
    </div>
  );
};

export default SignIn;
