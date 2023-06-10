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
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
