import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useBlogPost } from '../../hooks/useBlog';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';

const BlogPostPage = () => {
  const { slug } = useParams();
  const { post, content, loading, error } = useBlogPost(slug);

  if (loading) {
    return (
      <Layout>
        <div className="container">
          <div className="loading">
            <h2>Loading...</h2>
            <p>Please wait while we load your blog post.</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <BlogPost post={post} content={content} />
    </Layout>
  );
};

export default BlogPostPage;
