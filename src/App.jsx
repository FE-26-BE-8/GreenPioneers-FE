import Login from "./components/pages/login/Login"
import Register from './components/pages/register/Register';
import News from "./components/pages/news/News";
import DetailNews from "./components/pages/news/DetailNews";
import DetailTips from "./components/pages/tips/DetailTips";
import DetailPrograms from "./components/pages/DetailPrograms"
import Tips from "./components/pages/tips/Tips";
import Home from "./components/pages/home/Home";
import Programs from "./components/pages/programs/Programs"
import LinkProgram from "./components/pages/programs/LinkProgram"
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import ContactForm from "./components/pages/contact/ContactForm";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/kontak",
      element: <ContactForm />,
    },
    {
      path: "/list-tips",
      element: <Tips />,
    },
    {
      path: "/list-tips/:id",
      element: <DetailTips />,
    },
    {
      path: "/list-news/:id",
      element: <DetailNews />,
    },
    {
      path: "/list-news",
      element: <News />,
    },
    {
      path: "/list-programs",
      element: <Programs />,
    },
    {
      path: "/detail-programs/:id",
      element: <DetailPrograms />,
    },
    {
      path: "/link-programs/:id",
      element: <LinkProgram />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
