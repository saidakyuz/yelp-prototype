import "./App.css";
// import mockdata from "./mock-data.json";
import DetailPage from "./DetailPage";
import LandingPage from "./LandingPage";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  // console.log(mockdata);

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    fetch(`https://protected-scrubland-40709.herokuapp.com/restaurants`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((e) => console.log("Request failed: ", e));
  }, []);

  console.log("asdfggh", data);
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <LandingPage result={data} />
        </Route>
        <Route exact path="/restaurants/:id">
          <DetailPage result={data} />
        </Route>
        {/* <Route exact path="/" component={LandingPage} /> */}
        {/* <Route exact path="/restaurants/:id" component={DetailPage} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
