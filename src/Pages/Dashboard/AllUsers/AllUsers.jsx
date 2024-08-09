import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import useAxios from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users")
      return res.data;
    },
  });

  const handleUserDelete = (user) => {
    const id = user._id;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleMakeAdmin = user =>{
    const id = user._id;
    axiosSecure.patch(`/users/admin/${id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} added as Admin`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
  }

  return (
    <div>
      <SectionTitle
        heading="Manage all Users"
        subHeading="How Many??"
      ></SectionTitle>
      <div className="bg-white p-10">
        <div className="mb-5">
          <h2 className="text-3xl font-semibold">
            Total Users: {users.length}{" "}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-orange-400 text-white">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th> {idx + 1} </th>
                  <td> {user.name} </td>
                  <td> {user.email} </td>
                  <td>
                   
                    {
                        user.role === 'admin' ? <p>Admin</p> :                     <button title="Add as Admin"  onClick={()=>handleMakeAdmin(user)} className="btn bg-orange-400 text-white border-none hover:bg-orange-500">
                        <FaUsers className="text-xl"></FaUsers>
                      </button>
  
                    }
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleUserDelete(user)}
                      className="btn bg-red-500 text-white border-none hover:bg-red-600"
                    >
                      <ImBin className="text-xl"></ImBin>
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
