import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AuthLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>} />
        </Route>
        <Route path="/" element={<AuthLayout></AuthLayout>}>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
