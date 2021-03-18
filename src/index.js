import './App.css';
import mockdata from './mock-data.json';

function App() {
  console.log(mockdata);
    return (
      <div className = "App">
        <Header/>
        Banner
        Searchbar
        CityFilter

        <CardComponent/>
        <MapComponent/>

        <DetailPage/>
        Router
        Landingpage
        Detailpage
        Router

        <Footer/>
      </div>
    );
}

export default App;