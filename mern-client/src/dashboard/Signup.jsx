import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {
    const { createUser,loginwithGoggle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert("Welcome!!");
            navigate(from, { replace: true });
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }
const handleRegister = () => {
    loginwithGoggle().then((result) => {
        const user = result.user;
        navigate(from, { replace: true });

    }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
    });
}
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Sign-up</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                        placeholder="Email address"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none">Submit</button>
                                </div>
                                {error && <p className="text-red-500">{error}</p>}
                            </form>
                        </div>
                        <hr className="my-8" />
                        <div className="flex justify-center">
                            <button onClick={handleRegister}className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-4 py-2 hover:bg-gray-100 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" className="mr-2">
                                    <path fill="#4285F4" d="M23.5 6.5c4.12 0 7.26 1.76 9.09 3.4L37.17 6c-2.66-2.53-6.65-5-13.67-5C14.57 1 8.23 4.5 4.66 9.96l6.97 5.7C13.68 11.2 18.2 6.5 23.5 6.5z"/>
                                    <path fill="#34A853" d="M12 20.5c0-1.48.3-2.88.85-4.16L5.89 10.64C4.67 13.26 4 16.2 4 19.5s.67 6.24 1.89 8.86l6.97-5.7C12.3 23.38 12 21.98 12 20.5z"/>
                                    <path fill="#FBBC05" d="M23.5 34.5c-4.74 0-8.83-2.42-11.36-6.09l-6.97 5.7C8.23 39.5 14.57 43 23.5 43c6.2 0 10.86-2.01 14.34-5.5l-6.45-5.35C29.83 33.39 27.32 34.5 23.5 34.5z"/>
                                    <path fill="#EA4335" d="M44 20.5c0-1.5-.13-2.9-.38-4.25H23.5v8.5h11.55c-.5 2.52-1.98 4.68-4.05 6.1l6.45 5.35C41.79 32.88 44 27.95 44 20.5z"/>
                                </svg>
                                <span className="text-gray-700">Login with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
