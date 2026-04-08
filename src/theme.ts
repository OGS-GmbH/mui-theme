import { createTheme } from "@mui/material";
import { darkPaletteOptions, lightPaletteOptions, themeOptions } from "./options.js";

const lightTheme = createTheme({
  ...themeOptions,
  palette: lightPaletteOptions
});

const darkTheme = createTheme({
  ...themeOptions,
  palette: darkPaletteOptions
});

const theme = createTheme({
  ...themeOptions,
  colorSchemes: {
    light: {
      palette: lightPaletteOptions
    },
    dark: {
      palette: darkPaletteOptions
    }
  }
});

export { lightTheme, darkTheme, theme };
