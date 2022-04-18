import logo from "./logo.svg";
import "./App.css";
import Router from "./routes";
import ThemeProvider from "./theme";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
