import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Data = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get('http://localhost:8000/posts')
                setData(response.data)
                setLoading(false)
            } catch (err) {
                console.error("Error fetching data:", err)
                setLoading(false)
            }
        };

        fetchData();
    }, [])
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/posts/${id}`)
            const updatedData = data.filter(item => item.id !== id)
            setData(updatedData);
        } catch (err) {
            console.error("Error deleting data:", err);
        }
    };

    return (
        <div className='main'>
            {loading ? (
                <div className="loader-container">
                    <div className="loader"></div>
                    <div>Loading...</div>
                </div>
            ) : (
                data.map((el) => (
                    <div className='mp' key={el.id}>
                        <h1>{el.title}</h1>
                        <h2>{el.body}</h2>
                        <button onClick={() => handleDelete(el.id)}>Delete</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Data;
