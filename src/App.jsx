import Login from "./components/pages/login/Login"
import Register from './components/pages/register/Register';
import News from "./components/pages/news/News"
import Tips from "./components/pages/tips/Tips";
import Home from "./components/pages/home/Home";
import Programs from "./components/pages/programs/Programs.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
      path: "/list-news",
      element: <News />,
    },
        {
      path: "/list-programs",
      element: <Programs />,
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
