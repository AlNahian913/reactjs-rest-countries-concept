import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './Components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      {/* <LoadCountries></LoadCountries> */}
    </div>
  );
}












// function LoadCountries() {
//   const [countries, setCountries] = useState([])

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])

//   return (
//     <div>
//       <h1>Visiting Every Country of the World!!!!!</h1>
//       <h4>Available Countries: {countries.length}</h4>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h4>Country Name: {props.name}</h4>
//       <h5>Population : {props.population} </h5>
//     </div>
//   )
// }

export default App;
