import Layout from "@/components/Layout";
import "../styles/globals.css";
import "../styles/Home.module.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <div className="grad">
        <Component {...pageProps} />
        <style jsx>{`
          .grad {
            padding-top: 25px;
            min-height: 550px;
            background: black;
          }
        `}</style>
      </div>
    </Layout>
  );
}
