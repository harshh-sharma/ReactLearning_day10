import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Header";
import Body from "./Body/Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantDetailPage from "./RestaurantDetailPage";
import useOnline from "./Body/usestatus";

export const AppLayout = () => {
  const status = useOnline();
      console.log("status",status)
      if(status === false){
        return (<h1>You're offline please check your internet connection</h1>);
      }
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path : "/page",
        element : <RestaurantDetailPage/>
      }
    ],
  },
]);
