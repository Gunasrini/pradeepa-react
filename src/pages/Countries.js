import React, { useContext } from 'react';
import { DashboardCardInfo } from '../App';

export default function Countries() {
    const country = useContext(DashboardCardInfo);
    const countries = [
        {
            name: "United States",
            percentage: "65%"
        },
        {
            name: "UK",
            percentage: "65%"
        },
        {
            name: "Russia",
            percentage: "65%"
        },
        {
            name: "Spain",
            percentage: "65%"
        },
        {
            name: "India",
            percentage: "65%"
        },
        {
            name: "France",
            percentage: "1.5%"
        }
    ]
    console.log(countries);
    return (
        <div className='innerContainer'>
            <h1>Countries</h1>
            <p>{country.name} {country.percentage}</p>
            <div className="w3-container">
                <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                    <thead>
                        {
                            countries.map(e =>
                                <tr key={e.name}>
                                    <td>{e.name}</td>
                                    <td>{e.percentage}</td>
                                </tr>
                            )
                        }
                    </thead>
                </table>
            </div>
        </div>
    )
}
