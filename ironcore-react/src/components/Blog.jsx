import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { blogConfig } from '../config/blogConfig';

const Blog = () => {
  // Get featured posts for the main page
  const featuredPosts = blogConfig.posts.filter(post => post.featured).slice(0, 3);

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>
        <div className="blog-grid">
          {featuredPosts.map((post, index) => (
            <div key={post.id} className="blog-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="blog-image">
                <BookOpen size={40} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="category">{post.category}</span>
                  <span className="date">{post.date}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <Link to={`/blog/${post.id}`} className="blog-link">Read More →</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="section-footer">
          <Link to="/blog" className="btn btn-secondary">View All Blog Posts</Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
