import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAxios from "../../hooks/useAxiosSecure";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SignUp = () => {
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  // const [photoUrl, setPhotoUrl] = useState("");
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const photoRef = useRef();

  const {
    register,
    watch,
    formState: { errors },
  } = useForm();
  const captchaRef = useRef();
  // const [error, setError] = useState(null);
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
  // console.log(photoRef.current?.value);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
    //  if(file){
    //   setSelectedFile(file)
    //  }
    //  console.log(file);
    //  const imageData = {
    //   image: file
    //  }
    //  axiosPublic.post(imageHostingApi, imageData, {
    //   headers: {"content-type": "multipart/form-data"}
    //  })
    //  .then(res => console.log(res.data.data.url))
    // console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.files[0];
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    // reset()
    const imageData = {
      image: photo,
    };
    // console.log(imageData);
    axiosPublic
      .post(imageHostingApi, imageData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((res) => {
        if (res.data.data.url) {
          const photoUrl = res.data.data.url
          // setPhotoUrl(res.data.data.url);
          createUser(email, password)
            .then((res) => {
              const loggedUser = res.user;
              updateUser(name, photoUrl).then((res) => {
                const userInfo = {
                  name: name,
                  email: email,
                  photo: photoUrl
                };

                axiosPublic.post("/users", userInfo).then((res) => {
                  if (res.data.insertedId) {
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Your work has been saved",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                });
              });
              navigate("/");
              console.log(res);
            })
            .catch((err) => console.log(err));
        } else {
          // setPhotoUrl(null);
        }
      });
    // console.log(photoUrl);

    //  console.log(e.target.photo );
    if (validateCaptcha(captcha)) {
    } else {
      setError("Captcha not matched");
    }
  };

  // const handleSignUp = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(email, password);
  //   const value = captchaRef.current.value;
  //   if (validateCaptcha(value)) {
  //     createUser(email, password)
  //       .then((result) => {
  //         console.log(result.user);
  //         navigate("/");
  //       })
  //       .catch((err) => console.log(err));
  //     console.log("Captcha is valid");
  //     // setDisabled(false)
  //   } else {
  //     setError("Captcha is not valid");
  //     // setDisabled(true)
  //   }
  // };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                onChange={handlePhotoChange}
                // {...register("image")}
                placeholder="photo"
                // ref={photoRef}
                className="input input-bordered"
                name="photo"
              />
              {preview && <img src={preview} alt="" className="w-36" />}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                // {...register('email', {required: true})}
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                //  {...register('password', {pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}/})}
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            {errors.password && <p>Error</p>}
            <p>{error}</p>

            <div className="form-control mt-3">
              <LoadCanvasTemplate />
              <input
                type="text"
                name="captcha"
                // {...register('captcha', {required: true})}

                placeholder="type characters given above"
                className="input input-bordered"
              />
              {errors.captcha && <p>Pleser enter valid captcha</p>}
            </div>

            {/* <button onClick={handleCaptchaValidate} className="btn btn-xs">Validate</button> */}
            <div className="form mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p className="text-center mb-5">
            Aready registered? Please{" "}
            <Link to="/login" className="text-blue-500">
              {" "}
              Login{" "}
            </Link>{" "}
          </p>
          <div className="p-5">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
