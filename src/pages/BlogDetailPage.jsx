import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../css/blogPage.css';
import BlogForm from "../components/BlogForm";
const API_URL = import.meta.env.VITE_API_URL;
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BlogPage() {

    const { blogId } = useParams();
    const [editMode, setEditMode] = useState(false);
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

    console.log("Blog data:", blog.content);


    return (
        <div className="blog-page">
            {editMode && blogId && blog._id === blogId ? (
                <>
                    <button onClick={() => { setEditMode(false) }}>
                        <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer text-2xl" />
                    </button>
                    <BlogForm blogId={blog._id} cloudinaryId={blog.cloudinaryId} editMode />
                </>
            ) : (
                <>
                    <div className="blog-page-header">
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
                            <a className="blog-page-btn blog-page-btn--secondary">Del Blog</a>
                            <a
                                className="blog-page-btn blog-page-btn--secondary" onClick={() => setEditMode(!editMode)}
                            >
                                Edit Blog
                            </a>
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
                            <p dangerouslySetInnerHTML={{ __html: blog.content ? blog.content.htmlContent || "" : "" }}></p>
                        </div>

                        <p className="blog-page-date">
                            Published on: {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ""}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}


export default BlogPage;
