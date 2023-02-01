import axios from 'axios';
import { useState, useEffect } from 'react';
import Blogs from '../components/Blogs';

const Linux = () => {
    const [linuxBlogs, setLinuxBlogs] = useState([]);

    const getBlogs = async () => {
        try {
            const response = await axios.get('/api/v1/apps/blogs');
            const blogList = response.data;
            setLinuxBlogs(blogList.filter((blog) => blog.category === 'linux'));
            console.log(linuxBlogs);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <div className='container mg-top-vlg auto'>
            {linuxBlogs.map((blog, index) => {
                return <Blogs key={index} {...blog} />;
            })}
        </div>
    );
};

export default Linux;
