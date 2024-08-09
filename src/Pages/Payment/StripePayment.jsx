import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: Pk secret key
const stripePromise = loadStripe("pk_test_51PWpysKLk0U02GmcZ4c2QHEhiEFhrOk32YxBmpc0j0K1g8LkKT6cPk7f1rCSAZrsTHJPUftkmoGBV0pjnz3MBXFM00rtxJsFH4");
const StripePayment = () => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{CLIENT_SECRET}}",
  };
  return (
    <div>
      <h2>Payment</h2>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default StripePayment;
