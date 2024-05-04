import { Footer, NavBar } from "@/component";
import "@/styles/globals.css";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const router = useRouter();
  const noFooterRoutes = ["/collection", "/profile"];

  const showFooter = !noFooterRoutes.includes(router.pathname);

  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
