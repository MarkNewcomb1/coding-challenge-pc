import React, { useState } from 'react';
import logo from '../cirrus-logo-vertical.svg';

export const Table = ({ data }) => {

    const [rsuEntry, setRsuEntry] = useState({});

    const handleClick = (key) => {
        console.log(key);
        const selectedEntry = data.filter((entry) => entry.location === key)[0];
        setRsuEntry(selectedEntry);
    }

    const handleClear = () => {
        setRsuEntry({});
    }

    return (
        <div className="table">
            <header><img src={logo} alt="logo" /></header>
            <div className="rows-and-sidebar">
                <div className="rows">
                    <div className="row top-row">
                        <span>Location</span>
                        <span>IP</span>
                        <span>Status</span>
                    </div>
                    {data.map((entry) => (
                        <div className="row" 
                        key={entry.location}
                        onClick={(key) => handleClick(entry.location) }
                        >
                            <span>{entry.location}</span>
                            <span>{entry.ip}</span>
                            <span style={{color: entry.status.state}}>{entry.status.state}</span>
                        </div>
                    ))}
                </div>
                <aside>
                    <header>Selected RSU</header>
                    <button onClick={() => handleClear()}>X</button>
                    {rsuEntry.ip && (
                        <>
                    <p className="details">{`IP: ${rsuEntry.ip}, Location: ${rsuEntry.location}, Status: ${rsuEntry.status.state}`}</p>
                    <p className="error">{rsuEntry.status.error}</p>
                    </>
                    )}
                </aside>
            </div>
        </div>
    )
}


export default Table;