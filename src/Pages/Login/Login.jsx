import { useContext, useEffect, useRef, useState } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Login = () => {
  const {signInUser} = useAuth() 
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  const axiosSecure = useAxiosSecure()
  // const [user_captcha_value, setUser_captcha_value] = useState('')
  // const [disabled, setDisabled] = useState(true)
  const [error, setError] = useState("");
  const [disabled, setDisabled]= useState(true)

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  // const user_captcha_value = captchaRef.current.value;


  const handleCaptcha = (e) =>{
    const value = e.target.value;
    if (validateCaptcha(value)) {
      // console.log("Captcha is valid");
      setDisabled(false)
      // setDisabled(false)
    } else {
     setDisabled(true)
      // setDisabled(true)
    }
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   
   
    
    signInUser(email, password)
          .then(result =>{ 
            console.log(result.user)
            navigate(from)
            // {
            //   location.state ? navigate(from): navigate('/')
            // }
          })
          .catch(err => console.log(err))
  };
  // const handleCaptchaValue = ()=>{
  //     const value = captchaRef.current.value;
  //     console.log(value);
  // }
  // const handleCaptchaValidate =()=>{

  // }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <LoadCanvasTemplate />
              <input onBlur={handleCaptcha}
                type="text"
                name="captcha"
               
                placeholder="type characters given above"
                className="input input-bordered"
                required
              />
            </div>
            <p> {error} </p>
            {/* <button onClick={handleCaptchaValidate} className="btn btn-xs">Validate</button> */}
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" disabled = {disabled} value="Login" />
            </div>
          </form>
          <p className="mb-5 text-center">New to this Site? Please <Link to='/signUp' className="text-blue-500"> Sign Up </Link> </p>
        <div className="p-5">
          <SocialLogin></SocialLogin>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
