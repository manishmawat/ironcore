import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { formatDate } from '../lib/blog';

const BlogPost = ({ post, content }) => {
  if (!post) {
    return (
      <div className="container">
        <div className="error-message">
          <h2>Post Not Found</h2>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="blog-post">
      <div className="container">
        {/* Back to Blog Link */}
        <div className="back-to-blog">
          <Link to="/blog" className="back-link">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>

        {/* Blog Header */}
        <header className="blog-header">
          <div className="blog-meta">
            <span className="category">{post.category}</span>
            <span className="date">
              <Calendar size={16} />
              {formatDate(post.date)}
            </span>
            <span className="read-time">
              <Clock size={16} />
              {post.readTime}
            </span>
            <span className="author">
              <User size={16} />
              {post.author}
            </span>
          </div>
          
          <h1 className="blog-title">{post.title}</h1>
          <p className="blog-excerpt">{post.excerpt}</p>
          
          <div className="blog-tags">
            {post.tags.map(tag => (
              <span key={tag} className="tag">
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Blog Content */}
        <div className="blog-content">
          <div className="content-wrapper">
            <div 
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            <div className="sidebar-section">
              <h3>Table of Contents</h3>
              <div className="toc">
                {/* Auto-generated TOC would go here */}
                <p>Table of contents will be auto-generated</p>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Share This Post</h3>
              <div className="share-buttons">
                <button 
                  className="share-btn"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        text: post.excerpt,
                        url: window.location.href
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }
                  }}
                >
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Author</h3>
              <div className="author-info">
                <div className="author-avatar">
                  <User size={32} />
                </div>
                <div className="author-details">
                  <h4>{post.author}</h4>
                  <p>AI & ML Engineer passionate about building scalable systems</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
