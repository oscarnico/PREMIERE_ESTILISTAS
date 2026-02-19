import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import About from "./pages/About";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(
      "%c" +
        "    ╭─────────────────────────────╮\n" +
        "    │    🧑‍💻  ÓSCAR NICOLÁS       │\n" +
        "    │  nicolas.oscar@outlook.es  │\n" +
        "    │      ╭┳╮  ╭┳╭┳╮           │\n" +
        "    │      ┃┃┃  ┃┃┃┃┃           │\n" +
        "    │      ╰┻┻━━┻┻┻┻╯           │\n" +
        "    ╰─────────────────────────────╯",
      "font-family: monospace; color: #4285f4; background: #f8f9fa; padding: 5px;",
    );
  }, []);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/citas" element={<Appointment />} />
      </Route>
    </Routes>
  );
}

export default App;
