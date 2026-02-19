import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />

      <main style={{ marginTop: "80px", minHeight: "80vh" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
