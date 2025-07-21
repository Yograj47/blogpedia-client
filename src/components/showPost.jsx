function ShowPost({ htmlContent }) {
    return (
        <div className="show-post">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
    );
}

export default ShowPost;