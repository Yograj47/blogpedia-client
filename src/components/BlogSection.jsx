import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogCard from './blogCard';
const API_URL = import.meta.env.VITE_API_URL;
import Spinner from '../utils/spinner';

function BlogSection() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${API_URL}/api/blogs/latest`);
                setBlogs(res.data.data);
                console.log("Blogs fetched successfully:", res.data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <section className="blog__box">


            <h1 className="heading">Latest Blog</h1>
            <ul className="blog__listing">
                {
                    blogs && blogs.length > 0
                        ? (
                            blogs.map(blog => (
                                <BlogCard key={blog._id} blog={blog} />
                            ))
                        )
                        : (
                            <Spinner />)
                }
            </ul>
            <div className="more__post_btn">
                <Link to="/blogs">More Posts</Link>
            </div>
        </section>
    );
}

export default BlogSection;
