 const getcountries = () =>
{
    console.log("Getting countries...");

    const vky = new XMLHttpRequest();

    vky.open("GET", "https://restcountries.com/v3.1/all ");
    vky.send();
     vky.responseType = "json";

     vky.onload =() => {
const countries = vky.response;

const countryNames = countries
.filter(
    (country) => country.region && country.region ==="Asia") .map((country)=> country.name.common);
  
    const twoLakhCountries = countries.filter((country) => country.population <200000).map((country)=> country.name.common);

    console.log("Full data", countries, "asian countries",countryNames);

    console.log("twoLakhCountries", twoLakhCountries);

    const totalPopulation = countries.map((country)=> country.population) .reduce((previousVal, currentVal) => 
    previousVal +  currentVal,0 ) 
    

      console.log("totalPopulation", totalPopulation);

        countries.forEach((country) => console.log(country.name.common, country.capital,country.flags.png));

     const newElement = countries.filter((country)=> country.currencies&&country.currencies.USD)
     .map((country)=> country.name.common)
     
       console.log ("usd countries",newElement);
      

    };
     };


getcountries();
