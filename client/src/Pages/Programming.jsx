import axios from 'axios';
import { useEffect, useState } from 'react';

const Programming = () => {
    const [programming, setProgramming] = useState([]);

    const getProgramming = async () => {
        try {
            const response = await axios.get('/api/v1/apps/programming');
            console.log(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getProgramming();
    }, []);

    return (
        <div className='container auto mg-top-vlg'>
            <h1>Programming</h1>
        </div>
    );
};

export default Programming;
