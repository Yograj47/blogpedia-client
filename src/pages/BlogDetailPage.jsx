import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../css/blogPage.css';
const API_URL = import.meta.env.VITE_API_URL;

function BlogPage() {
    const { blogId } = useParams(); // Clean destructure

    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(`${API_URL}/api/blogs/${blogId}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data.data);
                console.log("Blog fetched:", data.data);
            })
            .catch(err => console.error("Error fetching blog:", err));
    }, [blogId]);

    return (
        <div className="blog-page">
            <h1 className="blog-page-title">{blog.title}</h1>
            <div className="blog-page-content">

                <p className="blog-page-author">By {blog.author}</p>
                <p className="blog-page-category">Category: {blog.category}</p>

                {blog.image && (
                    <div className="blog-page-image">
                        <img src={blog.image} alt={blog.title} />
                    </div>
                )}

                <div className="blog-page-body">
                    <p>{blog.content}</p>
                </div>

                <p className="blog-page-date">
                    Published on: {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ""}
                </p>
            </div>
        </div>
    );
}

export default BlogPage;
