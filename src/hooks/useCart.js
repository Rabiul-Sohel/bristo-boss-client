import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { data } from "autoprefixer";
import useAxiosPublic from "./useAxiosPublic";

const useCart = () => {
  // const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic()
  
  const { user } = useAuth();
  console.log(user);
  const {
    isPending,
    error,
    refetch,
    data: cart,
    isLoading,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/carts?email=${user?.email}`)
      return res.data;
    },
  });
  console.log(cart);
  return [cart, refetch, isLoading];
};

export default useCart;
