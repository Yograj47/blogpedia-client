import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/blog.css';
import BlogCard from '../components/blogCard';
import Pagination from '../utils/Pagination';
import Spinner from '../utils/spinner';

const API_URL = import.meta.env.VITE_API_URL;

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currPage, setCurrPage] = useState(1);  // start from 1
    const [postPerPage] = useState(8);

    const fetchBlogs = async (category) => {
        const url =
            category && category !== 'All'
                ? `${API_URL}/api/v1/blog?category=${category}`
                : `${API_URL}/api/v1/blog/`;

        try {
            const res = await axios.get(url);
            setBlogs(res.data.data);
            console.log(res.data);
        } catch (err) {
            console.error('Error fetching blogs:', err);
            setBlogs([]);  // clear on error
        } finally {
            setLoading(false); // Done fetching (success or error)
        }
    };

    useEffect(() => {
        setCurrPage(1); // reset page when category changes
        fetchBlogs(selectedCategory);
    }, [selectedCategory]);

    const lastPostIndex = currPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currPost = blogs.slice(firstPostIndex, lastPostIndex);

    const categories = ['All', 'Technology', 'Health', 'Food', 'Lifestyle', 'Travel', 'Other'];

    return (
        <>
            <main className="blog">
                <div className="blog__main">
                    <div className="blog__filter">
                        <ul className="blog__filter-list">
                            {categories.map((cat) => (
                                <li
                                    key={cat}
                                    className={`blog__filter-item ${selectedCategory === cat ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="blog__grid">
                        <ul className="blog_page__list" id={selectedCategory}>
                            {loading ? (
                                (
                                    <Spinner />
                                )
                            ) : blogs.length > 0 ? (
                                currPost.map((blog) => (
                                    <BlogCard key={blog._id} blog={blog} />
                                ))
                            ) : (
                                <p className="blog__no-post">No blogs found.</p>
                            )
                            }
                        </ul>
                    </div>
                </div>

                <aside className="blog__sidebar">
                    <div className="blog__trending">
                        <h3 className="blog__sidebar-heading">🔥 Trending Blogs</h3>
                        {/* Add trending cards later */}
                    </div>
                    <div className="blog__editor-choice">
                        <h3 className="blog__sidebar-heading">✍️ Editor's Picks</h3>
                        {/* Add editor's pick cards later */}
                    </div>
                </aside>
                <Pagination
                    totalPost={blogs.length}
                    postPerPage={postPerPage}
                    setCurrPage={setCurrPage}
                    currPage={currPage}
                />
            </main>
        </>
    );
}

export default Blog;
