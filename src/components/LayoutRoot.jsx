import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import style from "../styles/LayoutRoot.module.scss";
import Footer from "./Footer";
import { useEffect } from "react";

export default function LayoutRoot() {
  return (
    <section className={style.root}>
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}
