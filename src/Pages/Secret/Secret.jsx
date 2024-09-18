import React, { useContext } from 'react';
import useAuth from '../../hooks/useAuth';
import useAdmin from '../../hooks/useAdmin';

const Secret = () => {
    // const {user, logout} = useAuth()
    // const [isAdmin] = useAdmin()
    return (
        <div>
            <h2>This is secret page</h2>
        </div>
    );
};

export default Secret;