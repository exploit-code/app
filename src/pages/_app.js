import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";
import "../components/Layout/Layout.module.scss";
import { Inter } from "@next/font/google";

const inter = Inter({
    weight: ["400", "700"],
    style: ["normal"],
    subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
            <Component {...pageProps} />
        </Layout>
    );
}
