import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Router from "next/router";
import ReactThemeProvider from "../../src/components/ThemeProvider";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import SBreadcrumb from "../../src/components/SBreadcrumb";
import { Typography } from "@mui/material";

export default function Category() {
  const router = useRouter();
  const { catSlug } = router.query;
  const breadcrumb = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Sarees",
      href: "/",
    },

    {
      name: catSlug,
      href: `/sarees/${catSlug}`,
    },
  ];
  return (
    <ReactThemeProvider>
      <div className={{}}>
        <Head>
          <title>Search for best sarees</title>
        </Head>

        <main className={{}}>
          <Navbar />
          <div className="lg:px-60 mt-10">
            <SBreadcrumb data={breadcrumb} />
            <Typography variant="h4" className="my-4">
              {catSlug}
            </Typography>
            <div className="flex justify-around flex-col hidden sm:block">
              <div className="flex-1">asdsad</div>
              <div className="flex-1">adsfdsf</div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ReactThemeProvider>
  );
}
