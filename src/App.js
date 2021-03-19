import './App.css';
import mockdata from './mock-data.json';
/*import DetailPage from "./DetailPage";*/
import LandingPage from "./LandingPage";


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

      <LandingPage />


      {/*
        <DetailPage />
        Router
        Landingpage
        Detailpage
        Router */}

      {/* <Footer/> */}
    </div>
  );
}

export default App;
