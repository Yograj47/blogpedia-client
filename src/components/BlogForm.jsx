import { useState, useEffect } from "react";
import TextEditor from "./TextEditor";
import axios from "axios";
import "../css/TextEditor.css";
const API_URL = import.meta.env.VITE_API_URL;
import Spinner from "../utils/spinner";

function BlogForm({ blogId = null, cloudinaryId = null, editMode = false }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Technology");
    const [tags, setTags] = useState([]);
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [editModeBlogData, setEditModeBlogData] = useState("");
    const [content, setContent] = useState({
        htmlContent: "",
        jsonContent: {},
    });
    const [loading, setLoading] = useState(false);

    // Fetch blog data if in edit mode
    useEffect(() => {
        if (editMode && blogId) {
            fetch(`${API_URL}/api/v1/blog/${blogId}`)
                .then((res) => res.json())
                .then((data) => {
                    setTitle(data.data.title);
                    setCategory(data.data.category);
                    setTags(data.data.tags || []);
                    setImageUrl(data.data.imageUrl);
                    setContent(data.data.content);
                    setEditModeBlogData(data.data);
                })
                .catch((err) => console.error("Error fetching blog for edit:", err));
        }
    }, [editMode, blogId]);

    const handleEditorSave = (data) => {
        setContent(data);
    };

    async function handleSubmit(e) {
        e.preventDefault();

        if (!title || !category || (!imageFile && !editMode) || !content.htmlContent) {
            alert("Please fill in all fields.");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("category", category);
        formData.append("tags", JSON.stringify(tags));

        if (imageFile) {
            formData.append("file", imageFile);
            if (editMode) {
                formData.append("oldCloudinaryId", editModeBlogData?.cloudinaryId || "");
            }
        }

        formData.append("content", JSON.stringify(content));

        try {
            setLoading(true);

            let response;
            if (editMode && blogId) {
                response = await axios.patch(`${API_URL}/api/v1/blog/${blogId}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
            } else {
                response = await axios.post(`${API_URL}/api/v1/blog`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
            }

            if (response.status === 200 || response.status === 201) {
                alert(editMode ? "Blog updated successfully!" : "Blog uploaded successfully!");
                // Reset form
                setTitle("");
                setCategory("Technology");
                setTags([]);
                setImageFile(null);
                setImageUrl("");
                setContent({ htmlContent: "", jsonContent: {} });
            }
        } catch (error) {
            console.error("Error uploading blog:", error);
            alert("Failed to upload blog. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            className="flex flex-col items-center max-w-3xl w-full mx-auto mt-8 p-6 bg-white rounded-lg shadow-2xl shadow-blue-200"
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-bold mb-6 text-blue-300">
                {editMode ? "Edit Blog" : "Create a New Blog"}
            </h2>

            <input
                type="text"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mb-4 w-full border border-gray-300 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mb-4 w-full border border-gray-300 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Other">Other</option>
            </select>

            <input
                type="text"
                placeholder="Tags (comma separated)"
                onChange={(e) => setTags(e.target.value.split(",").map((tag) => tag.trim()))}
                value={tags.join(", ")}
                className="mb-4 w-full border border-gray-300 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="mb-4 w-full border border-gray-300 py-2 px-3 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                required={!editMode}
            />

            {(imageFile || imageUrl) && (
                <div className="mb-4">
                    <img
                        src={imageFile ? URL.createObjectURL(imageFile) : imageUrl}
                        alt="Cover"
                        className="w-full h-48 object-cover rounded"
                    />
                </div>
            )}

            <div className="mb-6 w-full">
                <TextEditor handleEditorSave={handleEditorSave} content={content} />
            </div>

            {loading ? (
                <div className="flex justify-center items-center">
                    <Spinner />
                </div>
            ) : (
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition duration-200 cursor-pointer"
                >
                    {editMode ? "Update Blog" : "Publish Blog"}
                </button>
            )}
        </form>
    );
}

export default BlogForm;
