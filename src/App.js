
import "./App.css";
import mockdata from "./mock-data.json";
import DetailPage from "./DetailPage";
import LandingPage from "./LandingPage";
import { Switch, Route } from "react-router-dom";


function App() {
  console.log(mockdata);
  return (
    <div className="App">
      {/* <Header/>
        Banner
        Searchbar
        CityFilter

        <CardComponent/>
        <MapComponent/> */}

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/restaurants/:id" component={DetailPage} />
      </Switch>

    </div>
  );
}

export default App;
