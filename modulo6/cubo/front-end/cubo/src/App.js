import React from "react";
import GlobalState from "./global/globalState";
import HomePage from "./pages/homepage";
import GlobalStyle from "./global/globalStyle";

function App() {

  return (<div>

    <GlobalState>

    <GlobalStyle/>

    <HomePage/>

    </GlobalState>
    
    </div>
  );
}

export default App;
