import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user, loading} = useAuth()
    const axiosSecure = useAxiosSecure()
    console.log(user);
    const {data:isAdmin, isPending} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled:  !loading, 
        queryFn: async()=>{
            console.log('asking or checking is admin', user);
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res?.data
            // console.log(res?.data);
        }
    })
    console.log(isAdmin);
    return [isAdmin, isPending]
};

export default useAdmin;