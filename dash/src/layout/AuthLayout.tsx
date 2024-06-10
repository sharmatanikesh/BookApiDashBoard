import useTokenStore from "@/stores";
import { Outlet ,Navigate } from "react-router-dom"

const AuthLayout =()=>{

    const token = useTokenStore((state)=>state.token);
    if (token) {
        return <Navigate to={'/dashboard/home'} replace />;
    }

    return (
        <>
        <Outlet/>
        </>
    )
}

export default AuthLayout;