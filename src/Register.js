import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
export default function Register() {
    const navigate = useNavigate();
    const [interest, setInterest] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/signup", {
                email,
                password,
                FirstName,
                LastName,
                interest
            })
            if (response.data === "exist") {
                alert("User already exists")

            } else if (response.data === "success") {
                NavigateVerify();
                await axios.post('http://localhost:8000/verify', { email })
            }

        } catch (e) {
            console.log(e);
        }
    }
    const NavigateVerify = () => {
        navigate("/home", { state: { id: 'hi' } });
    }
    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Register  your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                First Name
                            </label>
                            <div className="mt-2">
                                <input
                                    value={FirstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    name="text"
                                    type="text"
                                    autoComplete="Name"
                                    required
                                    className="block px-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Last Name
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={LastName}
                                    name="text"
                                    type="text"
                                    autoComplete="Name"
                                    required
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="mt-2 flex flex-row space-x-4">
                            <label className="flex items-center space-x-1">
                                <input type="checkbox" name="inter" id="sports" value="sports" checked={interest === 'sports'} onChange={(e) => setInterest(e.target.value)} />
                                Sports
                            </label>
                            <label className="flex items-center space-x-1">
                                <input type="checkbox" name="inter" id="politics" value="politics" checked={interest === 'politics'} onChange={(e) => setInterest(e.target.value)} />
                                Politics
                            </label>
                            <label className="flex items-center space-x-1">
                                <input type="checkbox" name="inter" id="business" value="business" checked={interest === 'business'} onChange={(e) => setInterest(e.target.value)} />
                                Business
                            </label>
                            <label className="flex items-center space-x-1">
                                <input type="checkbox" name="inter" id="bollywood" value="bollywood" checked={interest === 'bollywood'} onChange={(e) => setInterest(e.target.value)} />
                                Bollywood
                            </label>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="px-2  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                    value={password}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="px-2  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={submit}
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a Member?{' '}
                        <Link to="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Click here to Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
