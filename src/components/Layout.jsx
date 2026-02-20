import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main style={{ marginTop: "80px", minHeight: "80vh" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
