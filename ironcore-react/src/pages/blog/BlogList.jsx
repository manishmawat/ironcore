import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, Clock, User, Tag, BookOpen } from 'lucide-react';
import { blogConfig } from '../../config/blogConfig';
import Layout from '../../components/Layout';

const BlogList = () => {
  const [posts, setPosts] = useState(blogConfig.posts);
  const [filteredPosts, setFilteredPosts] = useState(blogConfig.posts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState([]);

  // Filter posts based on search, category, and tags
  useEffect(() => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post =>
        selectedTags.some(tag => post.tags.includes(tag))
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, selectedTags, posts]);

  // Handle tag selection
  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedTags([]);
  };

  return (
    <Layout>
      <div className="blog-page">
        <div className="container">
          {/* Page Header */}
          <header className="page-header">
            <h1 className="page-title">{blogConfig.blog.title}</h1>
            <p className="page-description">{blogConfig.blog.description}</p>
          </header>

          {/* Search and Filters */}
          <div className="blog-controls">
            {/* Search Bar */}
            <div className="search-container">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Category Filter */}
            <div className="filter-container">
              <Filter size={20} className="filter-icon" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select"
              >
                <option value="All">All Categories</option>
                {blogConfig.categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {(searchTerm || selectedCategory !== 'All' || selectedTags.length > 0) && (
              <button onClick={clearFilters} className="clear-filters-btn">
                Clear Filters
              </button>
            )}
          </div>

          {/* Tags Filter */}
          <div className="tags-filter">
            <h3>Filter by Tags:</h3>
            <div className="tags-list">
              {blogConfig.tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`tag-btn ${selectedTags.includes(tag) ? 'active' : ''}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="results-info">
            <p>Showing {filteredPosts.length} of {posts.length} posts</p>
          </div>

          {/* Blog Posts Grid */}
          <div className="blog-posts-grid">
            {filteredPosts.map((post, index) => (
              <article key={post.id} className="blog-post-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="post-image">
                  <BookOpen size={40} />
                </div>
                
                <div className="post-content">
                  <div className="post-meta">
                    <span className="category">{post.category}</span>
                    <span className="date">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="read-time">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="post-title">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="post-excerpt">{post.excerpt}</p>
                  
                  <div className="post-tags">
                    {post.tags.map(tag => (
                      <span key={tag} className="tag">
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="post-footer">
                    <span className="author">
                      <User size={14} />
                      {post.author}
                    </span>
                    <Link to={`/blog/${post.id}`} className="read-more">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="no-results">
              <BookOpen size={48} />
              <h3>No posts found</h3>
              <p>Try adjusting your search terms or filters</p>
              <button onClick={clearFilters} className="clear-filters-btn">
                Clear All Filters
              </button>
            </div>
          )}

          {/* Featured Posts Section */}
          {selectedCategory === 'All' && selectedTags.length === 0 && !searchTerm && (
            <section className="featured-posts">
              <h2>Featured Posts</h2>
              <div className="featured-grid">
                {blogConfig.posts
                  .filter(post => post.featured)
                  .map((post, index) => (
                    <article key={post.id} className="featured-post-card">
                      <div className="post-image">
                        <BookOpen size={32} />
                      </div>
                      <div className="post-content">
                        <h3 className="post-title">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="post-excerpt">{post.excerpt}</p>
                        <div className="post-meta">
                          <span className="date">{post.date}</span>
                          <span className="read-time">{post.readTime}</span>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogList;
