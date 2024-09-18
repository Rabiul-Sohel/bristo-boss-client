import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";


const PaymentHistory = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const {data:payments=[]} = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/payments/${user?.email}`)
            return res.data 
        }
    })
    console.log(payments);
    return (
        <div>
          <h3>Total Payments: {payments.length} </h3>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Price </th>
        <th>Transaction Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
            payments.map((payment, idx) => <tr key={payment._id} className="">
        
                <th> {idx + 1} </th>
                <td> {payment.price} </td>
                <td> {payment.transactionId} </td>
                <td> {payment.status} </td>
              </tr>)
        }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;