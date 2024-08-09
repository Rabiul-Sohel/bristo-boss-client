import React from 'react';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({children}) => {
    const [isAdmin, isPending] = useAdmin()
    const location = useLocation()
    const {user} = useAuth()
    if(isPending){
        return <div> <h2 className='text-4xl'>Loading</h2> </div>
    }
    if(isAdmin && user ){
        return children
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default AdminRoute;