import SearchBox from "./searchBox";
import InfoBox  from "./InfoBox";
import { useState } from "react";



export default function weatherApp(){
    const [weatherInfo,SetweatherInfo]=useState({
        city: "New Delhi",
        Temperature: 23,
        MinTemp: 34,
        MaxTemp: 33,
        humidity: 33,
        weather: "haze"

    });
    let updateInfo=(newinfo)=>{
        SetweatherInfo(newinfo);

    };
    return(
        <div style={{textAlign:"center"}}>
            
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>

        </div>
    )
}

