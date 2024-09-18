import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bristo-boss-server-ten.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;