import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogCard from './blogCard';
const API_URL = import.meta.env.VITE_API_URL;
import Spinner from '../utils/spinner';

function BlogSection() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // New loading state

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${API_URL}/api/v1/blog/latest`);
                setBlogs(res.data.data);
                console.log("Blogs fetched successfully:", res.data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
            } finally {
                setLoading(false); // Done fetching (success or error)
            }
        };

        fetchBlogs();
    }, []);

    return (
        <section className="blog__box">
            <h1 className="heading">Latest Blog</h1>

            <ul className="blog__listing">
                {loading ? (
                    <Spinner />
                ) : blogs.length > 0 ? (
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)
                ) : (
                    <p>No blogs found.</p> // Display something when no blogs exist
                )}
            </ul>

            <Link to="/blogs" className='more__post_btn'>More Posts</Link>
        </section>
    );
}

export default BlogSection;
