import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import layout from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={layout.layout}>
      <Header />
      <main className={layout.layout__main}>{children}</main>
      <Footer />
    </div>
  );
}
