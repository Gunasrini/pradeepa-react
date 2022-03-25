import React, { useContext } from 'react';
import { DashboardCardInfo } from '../App';

export default function InnerServices() {
    const info = useContext(DashboardCardInfo);
    return (
        <div className='service-section'>

            <h1>Im from the Inner Service Section</h1>
            <p>Total Messages is :<strong>{info.msgCount}</strong> </p>
            <p>Total Views is : <strong>{info.viewCount}</strong></p>
            <p>Total Shares is : <strong>{info.shareCount}</strong></p>
            <p>Total Users is : <strong>{info.userCount}</strong></p>
        </div>
    )
}
