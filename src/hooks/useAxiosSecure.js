import axios from "axios";
import useAuth from "./useAuth";

const useAxiosSecure = () => {
  // const { signOutUser } = useAuth();
  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    // withCredentials: true,
    headers: { token: localStorage.getItem("access-token") },
  });

  axiosSecure.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
     (err) => {
      console.log(err);
      // if (err.response.status === 401 || err.response.status === 403) {
      //    signOutUser()
      //     .then((res) => {
      //       console.log("signOUt automatically");
      //       localStorage.removeItem("access-token");
      //     })
      //     .catch((err) => console.log(err));
      // }
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
