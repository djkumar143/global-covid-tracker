import React from 'react';
import './Info.css';

const Info = ({data:{Global}}) => {
   
    return (
        <div className="info">
            <div className="global-report">
                <div className="global-reportHeading">
                    <h2>Global Report (Covid-19) </h2>
                </div>
                <div className="global-reportInfo">
                    <div className="group">
                        <h4 className="report-info">New Confirmed Cases: {!Global ? "loading..." : Global.NewConfirmed}</h4>
                        <h4 className="report-info">Total Confirmed Cases: {!Global ? "loading..." : Global.TotalConfirmed}</h4>
                    </div>
                    <div className="group">
                        <h4 className="report-info">New Deaths: {!Global ? "loading..." : Global.NewDeaths}</h4>
                        <h4 className="report-info">Total Deaths: {!Global ? "loading..." : Global.TotalDeaths}</h4>
                    </div>
                    <div className="group">
                        <h4 className="report-info">New Recovered: {!Global ? "loading..." : Global.NewRecovered}</h4>
                        <h4 className="report-info">Total Recovered: {!Global ? "loading..." : Global.TotalRecovered}</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Info
