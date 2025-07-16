// src/components/BlogCard.jsx
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import truncateText from '../utils/TrimFunc';

function BlogCard({ blog }) {
    return (
        <li className="blog-card">
            <Link to={`/blog/${blog._id}`} className="blog-card__link">
                <div className="blog-card__image">
                    <img src={blog.imageUrl} alt={blog.category} />
                </div>
                <div className="blog-card__content">
                    <div className="blog-card__meta">
                        <span className="blog-card__date">Jul 7 2025</span>
                        <span className="blog-card__read-time">1 min read</span>
                    </div>
                    <h2 className="blog-card__title">{blog.title}</h2>
                    <p className="blog-card__description">{truncateText(blog.content)}</p>
                    <div className="blog-card__stats">
                        <span className="blog-card__views">{blog.views} views</span>
                        <span className="blog-card__comments">{blog.comments} comments</span>
                        <span className="blog-card__likes">
                            {blog.likes} <FontAwesomeIcon icon={faHeart} />
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default BlogCard;
