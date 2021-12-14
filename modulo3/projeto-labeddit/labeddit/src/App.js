import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import RouterComponent from "./routes/Routes";
import theme from "./constants/Theme"
import { Router } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
      <RouterComponent/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
