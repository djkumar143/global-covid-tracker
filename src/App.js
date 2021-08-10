import React  ,{useState,useEffect} from 'react';
import Nav from './Nav';
import './App.css'
import Info from './Info';
import axios from 'axios'
import CountryData from './CountryData';


const url = 'https://api.covid19api.com/summary'

const App = () =>{
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios(url)
            setData(response.data)
        } catch (error) {
            console.warn(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return(
        <div className="app">
           <Nav/>
           <Info data={data} />
           <CountryData data={data}/>
        </div>
    )
}

export default App;











