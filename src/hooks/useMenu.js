import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublice = useAxiosPublic()
  const {data:items=[], isPending, refetch} = useQuery({
    queryKey: ['menu'],
    queryFn: async()=>{
      const res = await axios.get('https://bristo-boss-server-ten.vercel.app/menu')
      return res.data
    }
  })
  // console.log(items);
  // useEffect(() => {
  //   axios.get("https://bristo-boss-server-ten.vercel.app/menu").then((res) => {
  //     setMenu(res.data);
  //     setLoading(false);
  //   });
  // }, []);
  // console.log(menu);
  return [items, isPending, refetch ];
};

export default useMenu;
