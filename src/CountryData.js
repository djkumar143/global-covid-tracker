import React, { useState } from 'react'
import './CountryData.css'

const CountryData = ({ data: { Countries } }) => {

const [selectedCountry,setSelectedCountry] = useState("");
const [show,setShow] = useState(false);
const [countryResults,setCountryResults] = useState([]);

const submitCountry = () =>{
    const countryResult =  Countries.filter((country)=>country.Country===selectedCountry);
    setCountryResults(countryResult);
    setShow(true)
}
    return (
        <div className="country-data">
            <div className="country-dataHeading">
                <h2>View specific Information for countries:</h2>
            </div>
            <div className="country-selection">
                <h3>Select Country from the list</h3>
                <div className="country-list">
                <select onChange={(e)=>setSelectedCountry(e.target.value)}>
                    <option value="">select country</option>
                    {!Countries ? <option value="" >loading</option> :
                        Countries.map((country,i) =>
                            <option key={i} value={country.Country.value}  >{country.Country}  </option>
                        )
                    }
                </select><button onClick={submitCountry}>Check</button>
                </div>
            </div>

                    {
                      show ?
                      countryResults.map((country)=>
                      
                      
                <div  className="global-reportInfo">
                    <div className="group">
                        <h4 className="report-info">New Confirmed Cases: {country.NewConfirmed}</h4>
                        <h4 className="report-info">Total Confirmed Cases: { country.TotalConfirmed}</h4>
                    </div>
                    <div className="group">
                        <h4 className="report-info">New Deaths: {country.NewDeaths}</h4>
                        <h4 className="report-info">Total Deaths: { country.TotalDeaths}</h4>
                    </div>
                    <div className="group">
                        <h4 className="report-info">New Recovered: {country.NewRecovered}</h4>
                        <h4 className="report-info">Total Recovered: { country.TotalRecovered}</h4>
                    </div>
                </div>
                      )
                 : <h2 className="no-results">Results will be displayed here</h2>

                    }
            
            
        </div>
    )
}

export default CountryData


