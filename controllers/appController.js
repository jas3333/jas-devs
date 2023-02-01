import Blog from './../model/blogModel.js';

const sendApps = (req, res) => {};

const sendBlogs = async (req, res) => {
    const blogs = await Blog.find({});
    console.log(blogs);
    res.status(200).json(blogs);
};

const sendSingleBlog = (req, res) => {
    res.status(200).json({ message: 'Sending Programming' });
};

export { sendApps, sendBlogs, sendSingleBlog };
