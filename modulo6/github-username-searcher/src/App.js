import Header from "./constants/Header";
import GlobalState from "./Global/GlobalState";
import Router from "./routes/Router";

const App = () => {
  return ( 
    <div>
      <GlobalState>
        <Header/>
        <Router/>
      </GlobalState>
    </div>
  );
}

export default App;
