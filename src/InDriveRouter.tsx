import { BrowserRouter, Route, Routes } from "react-router";
import Users from "./pages/Users";
import LoginSignUp from "./pages/LoginSignUp";

const InDriveRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/loginsignup" element={<LoginSignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default InDriveRouter;
