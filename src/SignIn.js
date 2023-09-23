import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function SignIn() {
    const generateRandomSixDigitNumber = () => {
        const min = 100000; // Minimum 6-digit number (100000)
        const max = 999999; // Maximum 6-digit number (999999)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const randomNumber = generateRandomSixDigitNumber();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [random, setRandom] = useState(randomNumber)
    async function submit(e) {
        e.preventDefault();
        setLoading(true);
        generateRandomSixDigitNumber()
        setRandom(generateRandomSixDigitNumber)
        try {
            const response = await axios.post("http://localhost:8000/signin", {
                email,
                password,
            });

            if (response.data === "exist") {
                NavigateVerify();
                await axios.post('http://localhost:8000/verify', { random, email })

            } else if (response.data === "notexist") {
                alert("User has not signed up");
            }

        } catch (error) {
            console.error("An error occurred:", error);
        } finally {
            setLoading(false);
            setEmail("");
            setPassword("");
        }
    }

    const NavigateVerify = () => {
        navigate("/home", { state: { id: random } });
    }

    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    /> */}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={submit}
                                disabled={loading}
                            >
                                {loading ? "Signing in..." : "Sign in"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Click here to Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
