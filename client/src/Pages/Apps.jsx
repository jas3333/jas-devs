import axios from 'axios';

import { useState, useEffect } from 'react';

const Apps = () => {
    const [appData, setAppData] = useState([]);

    const getApps = async () => {
        try {
            const response = await axios.get('/api/v1/apps');
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getApps();
    }, []);

    return (
        <div className='container mg-top-vlg auto'>
            <h1>Apps</h1>
        </div>
    );
};

export default Apps;
