import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./components/About/About.jsx"
import Home from "./components/Home/Home.jsx"
import Contact from "./components/Contact/Contact.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
    </Route>
  )
)

export default router
