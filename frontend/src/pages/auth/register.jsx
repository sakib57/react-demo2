import { useRef } from "react";
import axiosClient from "../../lib/axiosClient";
import { useStateContext } from '../../contexts/contextProvider'


const Register = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const {setUser,setToken} = useStateContext()
    const submit = (e) => {
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        axiosClient.post('/register',payload).then(({data})=>{
            setUser(data.user)
            setToken(data.token)
        }).catch((err)=>{
            const errResponse = err.response
            if(errResponse && errResponse.status === 422){
                console.log(errResponse.data.error)
            }
        })
        console.log(payload);
    };
    return (
        <div className="px-48 mt-20 flex justify-center">
        <form onSubmit={submit} className="flex flex-col gap-y-4 w-[480px] p-4 shadow-md">
            <h2 className="text-2xl font-semibold">Create a new account</h2>
            <input ref={nameRef} type="text"  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" placeholder="Name"></input>
            <input ref={emailRef} type="email"  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" placeholder="Email"></input>
            <input ref={passwordRef} type="password"  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" placeholder="Password"></input>

            <button type="submit" className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600">Register</button>
        </form>
    </div>
    )
  }
  
  export default Register