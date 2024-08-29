import { IoMdClose } from "react-icons/io";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { useState } from "react";

const PopupForm = ({ isPopupOpen, setIsPopupOpen, isLogin, setIsLogin }) => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 px-2">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
          {isForgotPassword
            ? "Forgot Password"
            : isLogin
            ? "Login"
            : "Register"}
        </h2>
        {isForgotPassword ? (
          <ForgotPasswordForm setIsForgotPassword={setIsForgotPassword} />
        ) : isLogin ? (
          <LoginForm
            setIsForgotPassword={setIsForgotPassword}
            setIsLogin={setIsLogin}
          />
        ) : (
          <RegisterForm
            setIsForgotPassword={setIsForgotPassword}
            setIsLogin={setIsLogin}
          />
        )}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => setIsPopupOpen(false)}
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default PopupForm;
