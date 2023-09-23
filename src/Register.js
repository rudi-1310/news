import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate();
    const [interests, setInterests] = useState([]);
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
                interests
            });

            if (response.data === "exist") {
                alert("User already exists");
            } else if (response.data === "success") {
                NavigateVerify();
                await axios.post('http://localhost:8000/verify', { email });
            }
        } catch (e) {
            console.error(e);
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
                        Register your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                First Name
                            </label>
                            <div className="mt-2">
                                <input
                                    value={FirstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    name="firstName"
                                    type="text"
                                    autoComplete="given-name"
                                    required
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                Last Name
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={LastName}
                                    name="lastName"
                                    type="text"
                                    autoComplete="family-name"
                                    required
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="mt-2 flex flex-row space-x-4">
                            <label className="flex items-center space-x-1">
                                <input
                                    type="checkbox"
                                    name="interest"
                                    id="sports"
                                    value="sports"
                                    checked={interests.includes('sports')}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setInterests([...interests, 'sports']);
                                        } else {
                                            setInterests(interests.filter((interest) => interest !== 'sports'));
                                        }
                                    }}
                                />
                                Sports
                            </label>
                            <label className="flex items-center space-x-1">
                                <input
                                    type="checkbox"
                                    name="interest"
                                    id="politics"
                                    value="politics"
                                    checked={interests.includes('politics')}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setInterests([...interests, 'politics']);
                                        } else {
                                            setInterests(interests.filter((interest) => interest !== 'politics'));
                                        }
                                    }}
                                />
                                Politics
                            </label>
                            <label className="flex items-center space-x-1">
                                <input
                                    type="checkbox"
                                    name="interest"
                                    id="business"
                                    value="business"
                                    checked={interests.includes('business')}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setInterests([...interests, 'business']);
                                        } else {
                                            setInterests(interests.filter((interest) => interest !== 'business'));
                                        }
                                    }}
                                />
                                Business
                            </label>
                            <label className="flex items-center space-x-1">
                                <input
                                    type="checkbox"
                                    name="interest"
                                    id="bollywood"
                                    value="bollywood"
                                    checked={interests.includes('bollywood')}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setInterests([...interests, 'bollywood']);
                                        } else {
                                            setInterests(interests.filter((interest) => interest !== 'bollywood'));
                                        }
                                    }}
                                />
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
