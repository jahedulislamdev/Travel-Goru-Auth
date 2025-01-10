import { useContext, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { DataProvider } from "../Context/ContextProvider";
import { useNavigate } from "react-router-dom";

const ForgetPass = () => {
   const { resetPassword } = useContext(DataProvider);
   const navigate = useNavigate();
   const emailRef = useRef(null);
   const handleForgetPassword = () => {
      const Email = emailRef.current.value || "";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!Email) {
         toast.error("Please Provide an Email ")
         return;
      } else if (!emailRegex.test(Email)) {
         toast.error("invalid Email Address")
         return;
      }
      // send reset password email 
      resetPassword(Email)
         .then(() => {
            toast.success("Verification email send, Check your Mailbox")
            navigate("/")
         })
         .catch(() => toast.error("Faild to send Varification email"));
   }
   return (
      <div className="flex justify-center items-center h-96">
         <div className="bg-gray-400 p-8 rounded-lg shadow-md space-y-4">
            <p className="text-lg text-gray-800">Enter your Varified Email Address: </p>
            <input ref={emailRef} type="email" name="email" className="input w-full bg-gray-300 text-black" placeholder="Example@email.com" />
            <button onClick={handleForgetPassword} className="text-black py-3 bg-yellow-600 hover:bg-yellow-700 transition-colors w-full rounded">Send</button>
         </div>
         <Toaster position="top-right" />
      </div>
   );
};

export default ForgetPass;