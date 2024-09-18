import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import MenuLayout from '../Pages/Menu/MenuLayout/MenuLayout';
import OurShop from '../Pages/OurShop/OurShop';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Basic from '../components/Form';
import PrivateRout from './PrivateRout';
import Secret from '../Pages/Secret/Secret';
import PhotoUpload from '../Pages/File';
import DashboardLayout from '../Layouts/DashboardLayout';
import Cart from '../Pages/Dashboard/Cart/Cart';
import AdminHome from '../Pages/Dashboard/AdminHome/AdminHome';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import AdminRoute from './AdminRoute';
import AddItems from '../Pages/Dashboard/AddItems/AddItems';
import ManageItems from '../Pages/Dashboard/ManageItems/ManageItems';
import UpdateItem from '../Pages/Dashboard/Update/UpdateItem';
import StripePayment from '../Pages/Payment/StripePayment';
import StripePayment2 from '../Pages/Payment/StripePayment2';
import PaymentHistory from '../Pages/Dashboard/PaymentHistory/PaymentHistory';
import UserHome from '../Pages/Dashboard/UserHome/UserHome';
import StripePayment3 from '../Pages/Payment/StripePayment3';
import Payment from '../Pages/Payment/Payment';
import PaymentSuccess from '../Pages/PaymentSuccess/PaymentSuccess';
import PaymentFailed from '../Pages/PaymentFailed/PaymentFailed';
// import StripePayment3 from '../Pages/Payment/StripePayment3';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <MenuLayout></MenuLayout>
            },
            {
                path: 'shop/:category',
                element: <OurShop></OurShop>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'form',
                element: <Basic></Basic>
            },
            {
                path: 'file',
                element: <PhotoUpload></PhotoUpload>
            },
            {
                path: 'userSecret',
                element: <PrivateRout> <Secret></Secret> </PrivateRout>
            },
            {
                path: 'adminSecret',
                element: <PrivateRout> <Secret></Secret> </PrivateRout>
            },
            
        ]
    },
    {
        path: 'dashboard',
        element:<PrivateRout> <DashboardLayout></DashboardLayout></PrivateRout>,
        children: [
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'paymentSuccess',
                element: <PaymentSuccess></PaymentSuccess>
            },
            {
                path: 'paymentFailed',
                element: <PaymentFailed></PaymentFailed>
            },
            // addmin routes
           
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute> <UpdateItem></UpdateItem> </AdminRoute>,
                loader: ({params})=> fetch(`https://bristo-boss-server-ten.vercel.app/menu/${params.id}`)
            }
        ]
        
    }
])

export default router;