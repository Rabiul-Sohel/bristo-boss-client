import { IoWalletSharp } from "react-icons/io5";
import useAuth from "../../../hooks/useAuth";
import { FaCalendarDays, FaPhoneVolume, FaStar } from "react-icons/fa6";
import { AiTwotoneShop } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import useMenu from "../../../hooks/useMenu";
import { HiShoppingCart } from "react-icons/hi2";
import { MdShoppingCart } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BiSolidFoodMenu } from "react-icons/bi";
import profileImg from '../../../assets/others/profile.png'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, } from 'recharts'
import {
  BarChart,
  Bar,

  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,

} from 'recharts';


const UserHome = () => {
  const { user } = useAuth()
  const [items] = useMenu()
  const axiosSecure = useAxiosSecure()
  const { data: userStat = {} } = useQuery({
    queryKey: ['user-state'],
    queryFn: async () => {
      const response = await axiosSecure.get(`/user-state?email=${user?.email}`)
      return response.data
    }
  })
  console.log(userStat);
  const pieChartData = userStat.result?.map((data) => {
    return {
      name: data.title,
      value: data.amount
    }
  })
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  console.log(pieChartData);
  return (
    <div className=" py-12 ">
      <h2 className="text-3xl uppercase font-serif">
        <span>Hi, Welcome Back! </span>
      </h2>
      <div className="flex gap-5 my-5">
        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white flex justify-center items-center rounded-md gap-3 py-8 w-full">
          <BiSolidFoodMenu className="text-3xl" />
          <div>
            <h5 className="text-2xl font-bold"> {items.length} </h5>
            <p>Menu</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white flex justify-center items-center rounded-md gap-3 py-8 w-full">
          <BsShop className="text-3xl " />
          <div>
            <h5 className="text-2xl font-bold">30</h5>
            <p>Shop</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white flex justify-center items-center rounded-md gap-3 py-8 w-full" >
          <FaPhoneVolume className="text-3xl" />
          <div>
            <h5 className="text-2xl font-bold">03</h5>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex uppercase font-serif mt-8">
          <div className="bg-[#FFEDD5] flex-1 text-center p-20 space-y-4 ">

            <img className="  border-[#D1A054] border-4 w-44 h-44 rounded-full  mx-auto  " src={user?.photoURL || profileImg} alt="" />

            <h4 className="text-3xl font-semibold"> {user?.displayName} </h4>
          </div>
          <div className="flex-1 bg-[#FEF9C3] p-20 ">
            <h5 className="text-3xl  font-semibold    mb-8 ">Your Activities</h5>
            <div className=" font-serif space-y-2">
              <p className="flex  gap-2 items-center text-xl font-semibold text-[#0088FE]"> <MdShoppingCart /> Orders: {userStat?.payments + userStat?.bookings}  </p>
              <p className="flex  gap-2 items-center text-xl font-semibold text-[#00C4A1]"> <FaStar /> Reviews: {userStat?.reviews}  </p>
              <p className="flex  gap-2 items-center text-xl font-semibold text-[#FFBB28]"> <FaCalendarDays /> Booking: {userStat?.bookings}  </p>
              <p className="flex  gap-2 items-center text-xl font-semibold text-[#FF8042]"> <IoWalletSharp /> Payment: {userStat?.payments}  </p>
            </div>
          </div>
        </div>
        <div className="flex items-center ">
          <PieChart className="" width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {userStat.result?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip></Tooltip>
            <Legend></Legend>
          </PieChart>

          <BarChart
            width={500}
            height={300}
            data={userStat.result}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="quantity" fill="#8884d8" >
              {/* {
                userStat.result.map((entry, index) => (

                  <Cell key={index} fill={COLORS[index]}></Cell>

                ))
              } */}
            </Bar>
            <Bar dataKey="amount" fill="#82ca9d">
              {/* {
                userStat.result.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}

                  ></Cell>
                ))
              } */}
            </Bar>
          </BarChart>

        </div>
      </div>
    </div>
  );
};

export default UserHome;