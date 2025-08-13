import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useBlogPost } from '../../hooks/useBlog';
import BlogPost from '../../components/BlogPost';

const BlogPostPage = () => {
  const { slug } = useParams();
  const { post, content, loading, error } = useBlogPost(slug);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <h2>Loading...</h2>
          <p>Please wait while we load your blog post.</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return <Navigate to="/blog" replace />;
  }

  return <BlogPost post={post} content={content} />;
};

export default BlogPostPage;
