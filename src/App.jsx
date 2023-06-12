import Login from "./components/Login"
import Register from './components/Register';
import News from "./components/pages/news/News"
import Tips from "./components/pages/tips/Tips";
import Home from "./components/pages/home/Home";
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
