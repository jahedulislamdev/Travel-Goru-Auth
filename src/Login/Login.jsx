import { Link } from "react-router-dom";
import FacebookLogo from "../assets/images/icons/fb.png"
import GoogleLogo from "../assets/images/icons/google.png"
import { useContext } from "react";
import { DataProvider } from "../Context/ContextProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
   const { userLogin, user, setUser, userLogout } = useContext(DataProvider);
   const handleSubmit = (e) => {
      e.preventDefault();
      const Email = e.target.email.value;
      const Password = e.target.password.value;

      //login user with email and password 
      userLogin(Email, Password)
         .then((res) => {
            //check email verification
            if (!res.user.emailVerified) {
               toast.error("Please verify your email")
               return;
            }
            setUser(res.user)
            console.log(res.user)
            toast.success("Login Successfull")
            e.target.reset();
         })
         .catch((err) => {
            console.error(err)
            if (err.code === "auth/invalid-credential") {
               toast.error("invalid email or password")
            }
         });
   };
   return (
      <div className="md:w-2/6 mt-4 mx-auto">
         <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">Login Your Account</h2>
            <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
               </label>
               <input
                  className="input shadow appearance-none border-b border-gray-500 w-full py-2 px-3 bg-white leading-tight"
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  required
               />
            </div>
            <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
               </label>
               <input
                  className="input shadow appearance-none border-b border-gray-500 w-full py-2 px-3 bg-white mb-3 leading-tight"
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
               />
               <div className="flex justify-between px-1">
                  <label className="flex items-center">
                     <input type="checkbox" className="form-checkbox" />
                     <span className="ms-1 text-sm text-gray-700">Remember Me</span>
                  </label>
                  <Link to={"/forget_password"} className="text-yellow-600">Forget password ?</Link>
               </div>
            </div>
            <div className="flex items-center justify-between">
               {!user ? <button
                  className="bg-yellow-600 hover:bg-yellow-700 text-black w-full font-bold py-3 px-4 transition-colors focus:outline-none focus:shadow-outline"
                  type="submit"
               >
                  Login
               </button> :
                  <button onClick={userLogout}
                     className="bg-yellow-600 hover:bg-yellow-700 text-black w-full font-bold py-3 px-4 transition-colors focus:outline-none focus:shadow-outline"
                     type="submit"
                  >
                     Logout
                  </button>}
            </div>
            <p className="text-sm text-black mt-3 ps-1">Don&apos;t Have an Account ? <Link to={'/register'} className="text-yellow-600">Register</Link></p>
         </form>
         {/* Login with google and facebook */}
         <div className="flex flex-col items-center p-4 mx-auto">
            <div className="flex items-center w-full mb-4 px-6">
               <span className="flex-grow h-px bg-gray-300"></span>
               <span className="px-4 text-gray-500">Or</span>
               <span className="flex-grow h-px bg-gray-300"></span>
            </div>

            {/* Facebook Button */}
            <button className="flex items-center justify-center w-full max-w-sm px-4 py-2 mb-3 text-white bg-blue-600 rounded-full shadow hover:bg-blue-700 transition-colors">
               <img
                  src={FacebookLogo}
                  alt="Facebook logo"
                  className="w-7 h-7 mr-3"
               />
               Continue with Facebook
            </button>
            {/* Google Button */}
            <button className="flex items-center justify-center w-full max-w-sm px-4 py-2 text-black bg-white border rounded-full shadow hover:bg-gray-200 transition-colors">
               <img
                  src={GoogleLogo}
                  alt="Google logo"
                  className="w-6 h-6 mr-3"
               />
               Continue with Google
            </button>
         </div>
         <Toaster position="top-right"
            reverseOrder={true} />
      </div>
   );
};

export default Login;