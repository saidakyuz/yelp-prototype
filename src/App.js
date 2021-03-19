
import "./App.css";
import mockdata from "./mock-data.json";
import DetailPage from "./DetailPage";
import LandingPage from "./LandingPage";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header"


function App() {
  console.log(mockdata);
  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/restaurants/:id" component={DetailPage} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
