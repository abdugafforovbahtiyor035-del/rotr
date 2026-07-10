import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Mebel from "./pages/mebel/mebel";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mebel" element={<Mebel />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes> 
  );
}

export default App;
