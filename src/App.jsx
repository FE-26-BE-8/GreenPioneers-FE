import Home from "./components/pages/home/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ContactForm from "./components/pages/contact/ContactForm"
function App() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Home />
    },
    {
      path: "/kontak", 
      element: <ContactForm />
    }
  
  ])
  return (
  <RouterProvider router = {router}/>
  )
}

export default App
