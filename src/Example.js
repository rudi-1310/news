import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Example() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null); // Add a state variable to track errors

    useEffect(() => {
        // Fetch data from your API server when the component mounts
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/data");
                setData(response.data);
                setError(null); // Clear any previous errors
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error); // Set the error state
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <div>
                <h2>Fetched Data</h2>
                {error ? (
                    <p>Error fetching data: {error.message}</p>
                ) : (
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>{item.headline}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
