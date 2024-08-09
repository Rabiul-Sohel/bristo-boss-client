import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()

    const handleGoogleSignIn = () =>{
        googleSignIn()
            .then(res => {
                console.log(res.user);
                const userInfo={
                    email: res.user.email,
                    name: res.user.displayName
                }
                
                navigate('/', {state: {from: location}})
                axiosPublic.post('/users', userInfo)
                    .then(res => console.log(res.data))

            })
    }
  return (
    <div>
      <div className="divider"></div>
      <button onClick={handleGoogleSignIn} className="btn">
        <FaGoogle></FaGoogle>
        Google 
      </button>
    </div>
  );
};

export default SocialLogin;
