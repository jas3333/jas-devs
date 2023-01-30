import axios from 'axios';
import { useState, useEffect } from 'react';

const Linux = () => {
    const [linuxBlogs, setLinuxBlogs] = useState([]);

    const getBlogs = async () => {
        try {
            const response = await axios.get('/api/v1/apps/linux');
            console.log(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <div className='container auto mg-top-vlg'>
            <h1>Linux</h1>
        </div>
    );
};

export default Linux;
