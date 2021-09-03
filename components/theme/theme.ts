import { createTheme } from "@material-ui/core/styles";
import darkScrollbar from "@material-ui/core/darkScrollbar";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF0000",
      dark: "#FF0000",
      light: "#FF0000",
    },
    secondary: {
      main: "#9a53ff",
    },
    background: {
      default: "#121212",
      paper: "#3e3e3e",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  },
});
