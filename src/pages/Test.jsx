import axios from "axios";

function TestForm() {
    const formStyle = {
        maxWidth: "400px",
        margin: "40px auto",
        padding: "24px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "#fafafa",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
    };
    const labelStyle = {
        display: "block",
        marginBottom: "16px",
        fontWeight: "bold"
    };
    const inputStyle = {
        width: "100%",
        padding: "8px",
        marginTop: "4px",
        marginBottom: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "1rem"
    };
    const buttonStyle = {
        padding: "10px 20px",
        background: "#1976d2",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: "bold"
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            title: formData.get("title"),
            content: formData.get("content"),
            author: formData.get("author"),

            category: formData.get("category")
        }
        console.log("Form Data Submitted:", data);
        await axios.post("http://localhost:3000/api/blogs", data)
            .then(res => {
                console.log("Blog Added Successfully:", res.data);
                alert("Blog Added Successfully!");
                event.target.reset();
            })
            .catch(err => {
                console.error("Error Adding Blog:", err);
                alert("Failed to add blog. Please try again.");
            });
    }


    return (
        <div style={{ padding: "24px" }}>
            <p style={{ color: "#888" }}>Note: This only for testing purpose!!</p>
            <h1 style={{ textAlign: "center" }}>Test Form</h1>
            <form style={formStyle} onSubmit={handleSubmit}>
                <label style={labelStyle}>
                    Title:
                    <input type="text" name="title" required style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    Content:
                    <textarea name="content" required style={inputStyle}></textarea>
                </label>
                <label style={labelStyle}>
                    Author:
                    <input type="text" name="author" required style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    Category:
                    <select name="category" required style={inputStyle}>
                        <option value="Technology">Technology</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Health">Health</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                    </select>
                </label>
                <button type="submit" style={buttonStyle}>Add Blog</button>
            </form>
        </div>
    )
}

export default TestForm;