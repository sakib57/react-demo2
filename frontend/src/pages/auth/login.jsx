import { useRef } from "react";
import axiosClient from "../../lib/axiosClient";
import { useStateContext } from "../../contexts/contextProvider";

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {setUser,setToken} = useStateContext()
    const submit = (e) => {
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        axiosClient.post('/login',payload).then(({data})=>{
            setUser(data.user)
            setToken(data.token)
        }).catch((err)=>{
            const errResponse = err.response;
            if(errResponse){
                console.log(errResponse.data.message)
            }
        })
    };
    return (
        <div className="px-48 mt-20 flex justify-center">
            <form onSubmit={submit} className="flex flex-col gap-y-4 w-[480px] p-4 shadow-md">
                <h2 className="text-2xl font-semibold">Login your account</h2>
                <input ref={emailRef} type="email"  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" placeholder="Email"></input>
                <input ref={passwordRef} type="password"  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" placeholder="Password"></input>
                <button className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600">Login</button>
            </form>
        </div>
    );
};

export default Login;
