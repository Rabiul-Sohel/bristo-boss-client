import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRout = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    if(loading){
        return <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
    }
    if(user){
        return children
    } 
    return <Navigate state={{from: location}}  to='/login'></Navigate>
};

export default PrivateRout;