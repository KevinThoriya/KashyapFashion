import { SnackbarProvider } from "notistack";
import ReactThemeProvider from "../src/components/ThemeProvider";
import { UserContextProvider } from "../src/Hooks/userProvider";
import "../styles/globals.css";

export const Providers = ({ children }) => {
  return (
    <ReactThemeProvider>
      <SnackbarProvider
        // action={
        //   <div
        //     className="p-2 stroke-white cursor-pointer"
        //   >
        //     <ClosedCaptionRounded size={20} />
        //   </div>
        // }
        dense
        maxSnack={5}
        preventDuplicate
        autoHideDuration={5000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <UserContextProvider>{children}</UserContextProvider>
      </SnackbarProvider>
    </ReactThemeProvider>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
