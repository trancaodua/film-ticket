// theme
import componentsOverrides from "./overrides";
import palette from "./palette";

// @mui
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

function ThemeProvider({ children }) {
  const theme = createTheme({
    palette: palette.light,
    components: componentsOverrides(),
  });

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
