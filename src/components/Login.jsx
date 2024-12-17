import { useState } from "react"
import { Link } from "react-router-dom"
import { FaGoogle } from "react-icons/fa6";
export default function Login() {
    const [message, setMessage] = useState("");
    return (
        <div className="h-[calc(100vh-120px)] flex justify-center items-center ">
            <div className="w-full max-w-sm mx-auto bg-white shadow-md px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-semibold mb-2">Login</h2>

                <form action="">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-small font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter email" className="shadow appearance-none w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow"/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-small font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter password" className="shadow appearance-none w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow"/>
                    </div>
                    <div>
                        {message && <p className="text-red-500 text-xs mb-3 italic">{ message }</p>}
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-8 py-2 focus:outline-none">Login</button>
                    </div>
                </form>
                <p className="align-baseline text-sm font-medium mt-4 mb-2">Don't have an account? <Link to="/register" className="text-blue-500 hover:text-blue-700">Register</Link></p>

                <div>
                    <button className="w-full flex flex-wrap justify-center items-center bg-secondary hover:bg-blue-700 text-white font-bold px-4 py-2 rounded hover:outline-none">
                        <FaGoogle className="mr-2"/>
                        <span>Sing in with google</span>
                    </button>
                </div>
            </div>
        </div>
    )
}