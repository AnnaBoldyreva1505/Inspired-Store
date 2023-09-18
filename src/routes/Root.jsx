import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header.jsx";
import { Main } from "../Components/Layout/Main/Main.jsx";
import { Footer } from "../Components/Footer/Footer.jsx";
import ScrollToTop from "react-scroll-up";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const Root = () => (
  <>
    <ScrollToTop showUnder={160}>
      <span>
        <BsFillArrowUpCircleFill fill="#000000" size={40} />
      </span>
    </ScrollToTop>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);
