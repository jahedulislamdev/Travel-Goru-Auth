import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataProvider } from '../Context/ContextProvider';
import toast, { Toaster } from 'react-hot-toast';
import { sendEmailVerification } from 'firebase/auth';

const Registration = () => {
   const { userRegistration, setUser } = useContext(DataProvider)
   const handleSubmit = (e) => {
      e.preventDefault();
      setUser(null); // Reset user state based on user interaction
      const UserData = new FormData(e.currentTarget);
      const Email = UserData.get('email');
      const password = UserData.get('password');
      const ConfirmPassword = UserData.get('ConfirmPassword');
      // const LName = UserData.get('LName');
      const remember = e.target.remembering.checked;

      //Essential Validation after form submission
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      if (!passwordRegex.test(password)) {
         toast.error("Password must be 6+ characters with at least one letter and number");
         return;
      } else if (password !== ConfirmPassword) {
         toast.error("Password does not match");
         return;
      } else if (remember === false) {
         toast.error("accept our terms and conditions")
         return;
      }
      // Create user with email and password
      userRegistration(Email, password)
         .then((res) => {
            //varified email after registration
            sendEmailVerification(res.user)
               .then(() => {
                  alert("Email verification link sent to your email")
               })
               .catch(err => console.error(err))
            toast.success("user create successfully")
         })
         .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
               toast.error("Email already in use")
            }
         })
   };
   return (
      <div className='p-3'>
         <form className="max-w-md mx-auto bg-white p-8 my-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">Create Your Account</h2>
            <div className="mb-4">
               <input
                  className="shadow appearance-none border-b border-gray-500 rounded w-full py-2 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline"
                  name="FName"
                  type="text"
                  placeholder="First Name"
                  required
               />
            </div>
            <div className="mb-4">
               <input
                  className="shadow appearance-none border-b border-gray-500 rounded w-full py-2 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline"
                  name="LName"
                  type="text"
                  placeholder="Last Name"
                  required
               />
            </div>
            <div className="mb-4">
               <input
                  className="shadow appearance-none border-b border-gray-500 rounded w-full py-2 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  required
               />
            </div>
            <div className="mb-4">
               <input
                  className="shadow appearance-none border-b border-gray-500 rounded w-full py-2 px-3 bg-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
               />
               <input
                  className="shadow appearance-none border-b border-gray-500 rounded w-full py-2 px-3 bg-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="ConfirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  required
               />
               <div>
                  <label className="flex items-center">
                     <input type="checkbox" name='remembering' className="form-checkbox" />
                     <span className="ms-1 text-xs md:text-sm text-gray-700">Accept Our Terms and Conditions</span>
                  </label>
               </div>
            </div>
            <div className="flex items-center justify-between">
               <button
                  className="bg-yellow-600 hover:bg-yellow-700 text-black w-full font-semibold py-2 md:py-3 px-4 transition-colors focus:outline-none focus:shadow-outline"
                  type="submit"
               >
                  Registration
               </button>
            </div>
            <p className="text-xs md:text-sm text-black mt-3 ps-1">Don&apos;t Have an Account ? <Link to={'/login'} className="text-yellow-600">Login</Link></p>
         </form>
         <Toaster position="top-right"
            reverseOrder={true} />
      </div>
   );
};

export default Registration;