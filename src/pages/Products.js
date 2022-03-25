import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';
import { DashboardCardInfo } from '../App';

export default function Products() {
    const title = useContext(DashboardCardInfo);
    const url = "https://fakestoreapi.com/products";
    const [res, setRes] = useState([]);
    const [loading, setLoading] = useState(false);


    // const getRes = () => {
    //     axios.get(url)
    //         .then((response) => {
    //             const data = response.data;
    //             setRes(data);
    //         })
    // }

    // const getRes = () => {
    //     fetch(url)
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((resJsonData) => {
    //             console.log(resJsonData);
    //             const data = resJsonData;
    //             console.log(data);
    //             setRes(data);

    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }

    // useEffect(() => getRes(), []);

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                const data = response.data;
                setRes(data);
                setLoading(true);
            })
    });

    if (!loading) {
        return (
            <div className='loaderContainer'>
                <div className="spinner"><div></div><div></div><div></div></div>
            </div>
        )
    }
    return (

        <div className='innerContainer'>
            <h1>Products: {title.name}</h1>

            <ul className='productList'>
                {
                    res.map((e) =>
                        <li key={e.id}>
                            <h2>{e.title}</h2>
                            <img alt={e.title} src={e.image} />
                            <div className='content'>
                                <span className='price'><strong>Price: $</strong>{e.price}</span>
                                <span className='category'><strong>Category:</strong> {e.category}</span>
                            </div>

                        </li>
                    )
                }
            </ul>


        </div>
    )

}
