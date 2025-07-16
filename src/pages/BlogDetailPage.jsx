import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../css/blogPage.css';
const API_URL = import.meta.env.VITE_API_URL;

function BlogPage() {
    const { blogId } = useParams(); // Clean destructure

    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(`${API_URL}/api/v1/blog/${blogId}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data.data);
                console.log("Blog fetched:", data.data);
            })
            .catch(err => console.error("Error fetching blog:", err));
    }, [blogId]);

    const editBlog = (e) => {
        e.preventDefault();
        // Redirect to the edit page
        console.log(e.target);
    }


    return (
        <div className="blog-page">
            <div
                className="blog-page-header"
            >
                <h1 className="blog-page-title">{blog.title}</h1>
                <div
                    className="blog-page-btns"
                    style={{
                        display: "flex",
                        gap: "12px",
                        marginTop: "16px",
                        flexWrap: "wrap",
                        alignItems: "center"
                    }}
                >
                    <a href="/blogs" className="blog-page-btn blog-page-btn--primary">Back to Blogs</a>
                    <a href={`/blog/${blogId}/delete`} className="blog-page-btn blog-page-btn--secondary">Delete Blog</a>
                    <a href={`/blog/${blogId}/edit`} onClick={editBlog} className="blog-page-btn blog-page-btn--secondary">Edit Blog</a>
                </div>
            </div>
            <div className="blog-page-content">

                <p className="blog-page-author">By {blog.author}</p>
                <p className="blog-page-category">Category: {blog.category}</p>

                {blog.imageUrl && (
                    <div className="blog-page-image">
                        <img src={blog.imageUrl} alt={blog.title} />
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
