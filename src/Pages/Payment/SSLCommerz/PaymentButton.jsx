import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const PaymentButton = ({ amount }) => {
    const { user } = useAuth()
    const [cart, refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const handlePayment = async () => {
        const payment = {
            email: user?.email,
            products: cart.length,
            price: amount,
            cartIds: cart.map(singleCart => singleCart._id),
            menuIds: cart.map(singleProduct => singleProduct.menuId),
            // transactionId: paymentIntent.id,
            paymentStatus: 'Pending',
            deliveryStatus: 'Pending'

        }
        const response = await axiosSecure.post('/payment-initiate', payment)
        if(response.data.url){
            // console.log(response.data.url);
            window.location.replace(response.data.url)
            
        }
    }
    return (
        <div>
            <button onClick={handlePayment} className="bg-[#570DF8] hover:bg-[#4a07db] text-white px-40 py-2 rounded-md">Pay</button>
        </div>
    );
};

export default PaymentButton;