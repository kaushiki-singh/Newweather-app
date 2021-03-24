import React from 'react';
import CityInput from './components/cityInput';
import CityWeather from './components/cityWeather';
import './App.css';

import './App.css';

function App() {
  const [city, setCity] = React.useState("");
  const [cityWeather, setCityWeather] = React.useState({});
  const fetchCityWeather = ()=> {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ce2fb5a45dbb2f9c94ca6c8e1896aff7`)
    .then((res) => res.json())
    .then((result)=>{
      console.log("result id ", result);
      setCityWeather(result);
    })
  };

 
  return ( 
  <>
  <div className="weather">
  <CityInput 
  city={city} 
  setCity={setCity} 
  fetchCityWeather={fetchCityWeather}/>
  <CityWeather
  cityWeather={cityWeather} />
  </div>
  </>
  );
}

export default App;

// <Router>
//     <div style={{display: "flex", justifyContent: "space-evenly" }}>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
      
//     </div>
//     <Switch>

    
//     <Route path="/" exact>
//         <Home />
//       </Route>

//     <Route path="/about" exact>
//         <About />
//       </Route>


//     </Switch>
//     </Router>
