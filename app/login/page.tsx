import Image from "next/image";
import { useState } from "react";
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="w-full min-h-screen flex flex-col bg-gray-100 
        justify-center items-center">
            <div className="w-100 border border-gray-500 bg-white shadow-md
            rounded-md flex flex-col gap-2 p-4 relative justify-center items-center pt-16">
                <div className="w-30 h-30 overflow-hidden rounded-full absolute -top-18">
                    <Image src="/image/org.jpg" alt="logo" width={100} height={100} className="w-full" />
                </div>
                <h1 className="text-3xl text-center text-black">LOGIN ADMIN</h1>
                <div className="flex flex-col gap-2 relative w-full">
                    <input 
                        type="text" 
                        className="pl-25 z-1 p-2 border border-gray-300 w-full focus:outline-none focus:border-gray-700 rounded-lg focus:shadow-md transition-all" 
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />            
                    <span className="absolute top-0 p-2 z-0 bg-gray-200 rounded-s-lg text-black">Username</span>
                </div>
                <div className="flex flex-col gap-2 relative w-full">
                    <input 
                        type="password" 
                        className="pl-25 z-1 p-2 border border-gray-300 pr-12 w-full focus:outline-none focus:border-gray-700 rounded-lg focus:shadow-md transition-all" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="absolute top-0 p-2 z-0 bg-gray-200 rounded-s-lg text-black">Password</span>

                    </div>
 
                </div>
                <button className="bg-blue-600 text-white w-16 h-16 rounded-full shadow-[0_5px_0_#000] active:-translate-y-2 transition-all duration-200 w-full text-4xl font-bold">
                    LOGIN</button>
            </div>
        
    );
}
export default LoginPage