import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Suspense } from "react";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1>Loading..</h1>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
