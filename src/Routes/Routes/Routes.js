import { createBrowserRouter } from "react-router-dom";
import Login from "../../Accounts/Login/Login";
import SignUp from "../../Accounts/SignUp/SignUp";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/Home/About/About";
import { Blog } from "../../Pages/Home/Blog/Blog";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import ProjectsDetails from "../../Pages/Home/Home/ProjectsDetails/ProjectsDetails";
import Resume from "../../Pages/Resume/Resume";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
      {
        path: "/projectsDetails/:id",
        element: <ProjectsDetails></ProjectsDetails>,
        loader: async ({ params }) => {
          return fetch(`https://personal-portfolio-server-plum.vercel.app/projects/${params.id}`);
        },

        // loader: async ({ params }) => fetch`https://personal-portfolio-server-plum.vercel.app/projects/${params.id}
       
      },
    ],
  },
]);
