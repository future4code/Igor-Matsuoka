import { ThemeProvider } from "@emotion/react";
import React from "react";
import RouterComponent from "./routes/Routes";
import theme from "./constants/Theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterComponent/>
    </ThemeProvider>
  );
}

export default App;
