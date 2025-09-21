import { createBrowserRouter, RouterProvider } from "react-router"
import HomePage from "@/pages/HomePage";
import NotificationPage from "@/pages/NotificationPage";

export default function App() {
    const routers = createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>,
            handle: {
                title: "Home"
            }
        },
        {
            path: "/notification",
            element: <NotificationPage/>,
            handle: {
                title: "Notification"
            }
        },
    ]);
  return (
    <>
        <RouterProvider router={routers} />
    </>
  )
}

