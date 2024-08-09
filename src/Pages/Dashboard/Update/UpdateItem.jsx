import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';

const UpdateItem = () => {
    const item = useLoaderData()
   
    const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const handleUpdateItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const photo = form.photo.files[0];
    const recipe = form.recipe.value;
    console.log(name, category, recipe);
    const imageData = {
      image: photo,
    };
    
    const imageApiKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const imageApiLink = `https://api.imgbb.com/1/upload?key=${imageApiKey}`

    // const {data} = useQuery({
    //     queryKey:['image'],
    //     queryFn:  ()=>{
    //          axiosPublic
    //         .post(imageApiLink, imageData, {
    //           headers: { "content-type": "multipart/form-data" },
    //         })
    //        .then(res => console.log(res.data))
    //     }
    // })
    // console.log(data);
    axiosPublic
      .post(imageApiLink, imageData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data.data);
        if(res.data.success){
            const product = {
                name,
                category,
                price,
                image: res.data.data.url,
                recipe
              };
           axiosPublic.patch(`/menu/${item._id}`, product)
            .then(res =>{
                if(res.data.modifiedCount > 0){
                    Swal .fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your food updated",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            }) 
        }
      });
   
    // console.log(res.data);
  };
  return (
    <div>
      <h2 className="text-5xl text-center">Add Item</h2>
      <form
        onSubmit={handleUpdateItem}
        className="card-body grid grid-cols-2 bg-gray-200 text-black"
      >
        <div className="form-control col-span-2">
          <label className="label">
            <span className="label-text">Recipe Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={item.name}
            className="input input-bordered text-white"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category*</span>
          </label>
          <input
            defaultValue={item.category}
            type="text"
            placeholder="Category"
            name="category"
            className="input input-bordered text-white"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price*</span>
          </label>
          <input
            type="text"
            defaultValue={item.price}
            placeholder="Price"
            name="price"
            className="input input-bordered text-white"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="textarea"
            defaultValue={item.recipe}
            placeholder="Description"
            name="recipe"

            className="input input-bordered text-white col-span-2 w-full"
          />
        </div>
        <input className="col-span-2" type="file" name="photo" />
        <div className="form-action mt-6">
          <button className="btn btn-primary">
            Update Item <FaEdit></FaEdit>{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;