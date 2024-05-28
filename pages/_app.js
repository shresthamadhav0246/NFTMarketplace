import { Footer, NavBar } from "@/component";
import { NFTMarketplaceProvider } from "@/context/NFTMarketplace";

import "@/styles/globals.css";
import { useRouter } from "next/router";

export const metadata = {
  title: "NFTMarketplace",
  description: "null",
};

function App({ Component, pageProps }) {
  const router = useRouter();
  const noFooterRoutes = ["/collection", "/profile"];

  const showFooter = !noFooterRoutes.includes(router.pathname);

  return (
    <NFTMarketplaceProvider>
      <NavBar />
      <Component {...pageProps} />
      {showFooter && <Footer />}
    </NFTMarketplaceProvider>
  );
}

export default App;
