import type { PaletteOptions, ThemeOptions } from "@mui/material";
import { blue, gray, orange, petrol, red, yellow } from "./palettes.js";

const paletteOptions: PaletteOptions = {
  primary: {
    main: petrol[500]!
  },
  secondary: {
    main: orange[500]!
  },
  info: {
    main: blue[500]!
  },
  error: {
    main: red[500]!
  },
  warning: {
    main: yellow[500]!
  },
  grey: {
    50: gray[50],
    100: gray[100],
    200: gray[200],
    300: gray[300],
    400: gray[400],
    500: gray[500],
    600: gray[600],
    700: gray[700],
    800: gray[800],
    900: gray[900],
    A100: gray[100],
    A200: gray[200],
    A700: gray[400]
  }
};

const lightPaletteOptions: PaletteOptions = {
  ...paletteOptions,
  text: {
    primary: gray[900],
    secondary: gray[700],
    disabled: gray[500]
  }
};

const darkPaletteOptions: PaletteOptions = {
  ...paletteOptions,
  text: {
    primary: gray[100],
    secondary: gray[200],
    disabled: gray[400]
  }
};

const themeOptions: ThemeOptions = {
  cssVariables: {
    colorSchemeSelector: "class"
  },
  typography: {
    fontFamily: "var(--font-roboto), sans-serif",
    h1: {
      fontWight: 500
    },
    h2: {
      fontWeight: 500
    },
    h3: {
      fontWeight: 500
    },
    h4: {
      fontWeight: 500
    },
    h5: {
      fontWeight: 500
    },
    h6: {
      fontWeight: 500
    }
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small",
        color: "secondary"
      }
    },
    MuiLink: {
      defaultProps: {
        color: "text.secondary",
        variant: "body2"
      }
    },
    MuiButton: {
      defaultProps: {
        color: "secondary",
        variant: "contained",
        sx: {
          textTransform: "none"
        }
      }
    },
    MuiButtonGroup: {
      defaultProps: {
        color: "secondary"
      }
    },
    MuiSwitch: {
      defaultProps: {
        color: "secondary"
      }
    },
    MuiFormControl: {
      defaultProps: {
        color: "secondary"
      }
    },
    MuiCircularProgress: {
      defaultProps: {
        color: "secondary"
      }
    },
    MuiTooltip: {
      defaultProps: {
        slotProps: {
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -8]
                }
              }
            ]
          }
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor:
              "rgba(var(--mui-palette-secondary-mainChannel) / calc(var(--mui-palette-action-selectedOpacity) + var(--mui-palette-action-hoverOpacity)))",
            "&:hover": {
              backgroundColor:
                "rgba(var(--mui-palette-secondary-mainChannel) / calc(var(--mui-palette-action-selectedOpacity) + var(--mui-palette-action-hoverOpacity)))"
            }
          }
        }
      }
    }
  }
};

export { paletteOptions, lightPaletteOptions, darkPaletteOptions, themeOptions };
