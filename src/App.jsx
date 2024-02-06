import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "./components/UserLayout/UserLayout";

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
