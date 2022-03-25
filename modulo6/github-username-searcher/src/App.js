import Header from "./constants/Header";
import GlobalState from "./Global/GlobalState";
import GlobalStyle from "./Global/GlobalStyle";
import Router from "./routes/Router";

const App = () => {
  return ( 
    <div>
      <GlobalState>
        <GlobalStyle/>
        <Header/>
        <Router/>
      </GlobalState>
    </div>
  );
}

export default App;
