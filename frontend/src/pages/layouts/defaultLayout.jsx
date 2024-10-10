import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/contextProvider";
import axiosClient from "../../lib/axiosClient";
import { useEffect } from "react";

const DefaultLayout = () => {
    const { user,setUser,token, setToken } = useStateContext();

    useEffect(()=>{
        axiosClient.get('/user').then(({data})=>{
            setUser(data)
        })
    },[])

    if (!token) {
        return <Navigate to="/login" />;
    }

    const onLogout = (e) =>{
        e.preventDefault()
        axiosClient.get('/logout').then(()=>{
            setUser(null)
            setToken(null)
        })
        console.log("logout")
    }
    return (
        <div>
            <header className="flex justify-center items-center h-12 shadow-md w-full">
                <div className="flex items-center justify-between w-[1280px] px-12">
                    <div>Logo</div>
                    <div className="flex items-center gap-3">
                        <h2>{user.name}</h2>
                        <button onClick={onLogout} className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600">
                            Logout
                        </button>
                    </div>
                </div>
            </header>
            <Outlet />
        </div>
    );
};

export default DefaultLayout;
