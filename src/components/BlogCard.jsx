// src/components/BlogCard.jsx
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import sampleImage from '../assets/category/sample.jpg';
import truncateText from '../utils/TrimFunc';

import Technology from '../assets/category/Technology.jpg';
import Food from '../assets/category/Food.jpg';
import Health from '../assets/category/Health.jpg';
import Lifestyle from '../assets/category/Lifestyle.jpg';
import Travel from '../assets/category/Travel.jpg';
import Other from '../assets/category/Other.jpg';

const categoryImages = {
    Technology,
    Food,
    Health,
    Lifestyle,
    Travel,
    Other,
};

function BlogCard({ blog }) {
    const image = categoryImages[blog.category] || sampleImage;

    return (
        <li className="blog-card">
            <Link to={`/blog/${blog._id}`} className="blog-card__link">
                <div className="blog-card__image">
                    <img src={image} alt={blog.category} />
                </div>
                <div className="blog-card__content">
                    <div className="blog-card__meta">
                        <span className="blog-card__date">Jul 7 2025</span>
                        <span className="blog-card__read-time">1 min read</span>
                    </div>
                    <h2 className="blog-card__title">{blog.title}</h2>
                    <p className="blog-card__description">{truncateText(blog.content)}</p>
                    <div className="blog-card__stats">
                        <span className="blog-card__views">0 views</span>
                        <span className="blog-card__comments">0 comments</span>
                        <span className="blog-card__likes">
                            7 <FontAwesomeIcon icon={faHeart} />
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default BlogCard;
