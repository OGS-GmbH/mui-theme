import { createTheme } from "@mui/material";
import { darkPaletteOptions, lightPaletteOptions, themeOptions } from "./options.js";

/**
 * Light theme
 *
 * @remarks
 * Pre-configured MUI theme for light mode.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Theme
 */
const lightTheme = createTheme({
  ...themeOptions,
  palette: lightPaletteOptions
});

/**
 * Dark theme
 *
 * @remarks
 * Pre-configured MUI theme for dark mode.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Theme
 */
const darkTheme = createTheme({
  ...themeOptions,
  palette: darkPaletteOptions
});

/**
 * Adaptive theme with color schemes
 *
 * @remarks
 * MUI theme supporting both light and dark modes via colorSchemes.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Theme
 */
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
