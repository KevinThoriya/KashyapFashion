import { ThemeProvider } from "@mui/material";
import React from "react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// Create a theme instance.

export const colors = {
  primary: "rgba(174,150,129,0.94)",
  secondary: "#DFD8CA",
  text: "#4a4a4a",
};
let theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    text: {
      main: colors.text,
    },
  },
  typography: {
    allVariants: {
      color: colors.text,
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };

const ReactThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ReactThemeProvider;
