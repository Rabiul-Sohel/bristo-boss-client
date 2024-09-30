import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loadingImg from '../assets/others/cupcake.gif'


const PrivateRout = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return (
            <div className="min-h-[70vh] flex justify-center items-center w-1/2 mx-auto">
                <div>
                    <img src={loadingImg} alt="" />
                    <h6 className="text-2xl font-semibold font-serif">Welcome to Bistro Boss Restaurant</h6>
                </div>
            </div>
        )
    }
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to='/login'></Navigate>
};

export default PrivateRout;