import React, { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/api/country?name=${query}`);
      console.log(response.data.data)
      if (!response || !response.data.data || !Array.isArray(response.data.data)) {
        console.error("Invalid response from server");
        return;
      }

      let  list = response.data.data
      list = list.map(val=>{
        let formateCurrencies_keys = Object.keys(val.currencies)
        // console.log(formateCurrencies_keys)
        let formateCurrencies = val.currencies[formateCurrencies_keys[0]]
      
        formateCurrencies = formateCurrencies['name']+'-'+ formateCurrencies['symbol']
        
        console.log(formateCurrencies)

        return {
          ...val,
          currencies:formateCurrencies
        }
      })

      console.log(list)
      setCountries(list);
    } catch (error) {
      console.log(error);
    }
  };


  return (
      <div style={{width:'500px',margin:'0 auto',padding:'0 20px'}}>
        <h1>Country Info</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="query">Enter country name or code:</label>
          <input
              type="text"
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
 {/* "eng": {
                    "official": "United Kingdom of Great Britain and Northern Ireland",
                    "common": "United Kingdom"
                }
            }
        },
        "tld": [
            ".uk"
        ],
        "cca2": "GB",
        "ccn3": "826",
        "cca3": "GBR",
        "cioc": "GBR",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "GBP": {
                "name": "British pound
            } */}

        {countries.map((country) => (
            <div key={country.name.common} style={{padding:'0 0 20px','borderBottom':'3px solid #eee'}}>
              <h2>{country.name.common}</h2>
              <img src={country.flags.png}  style={{display:"inline-block",width:'100%',margin:'10px 0'}} alt={`Flag of ${country.name.common}`} />
              <p>Capital: {country.capital}</p>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>tld:{country.tld}</p>
              <p>cca2:{country.cca2}</p>
              <p>ccn3:{country.ccn3}</p>
              <p>cca3:{country.cca3}</p>
              <p>cioc:{country.cioc}</p>
              <p>independent:{country.independent?'yes':'no'}</p>
              <p>status:{country.status}</p>
              <p>unMember:{country.unMember?"yse":"no"}</p>
              <p>currencies:{country.currencies}</p>
              
            </div>
        ))}
      </div>
  );
}

export default App;
