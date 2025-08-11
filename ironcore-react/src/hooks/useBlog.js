import { useState, useEffect } from 'react';
import { processMarkdown, createPostMetadata } from '../lib/blog';

// In a real implementation, you would import markdown files dynamically
// For now, we'll simulate this with the existing blog config
import { blogConfig } from '../config/blogConfig';

export function useBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        
        // Convert existing blog config to new format
        const processedPosts = blogConfig.posts.map(post => ({
          ...post,
          slug: post.id,
          date: post.date // Keep existing date format for now
        }));
        
        setPosts(processedPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const getPost = (slug) => {
    return posts.find(post => post.slug === slug);
  };

  const getPostsByCategory = (category) => {
    if (category === 'All') return posts;
    return posts.filter(post => post.category === category);
  };

  const getPostsByTag = (tag) => {
    return posts.filter(post => post.tags.includes(tag));
  };

  const getFeaturedPosts = () => {
    return posts.filter(post => post.featured);
  };

  const searchPosts = (query) => {
    const searchTerm = query.toLowerCase();
    return posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  };

  return {
    posts,
    loading,
    error,
    getPost,
    getPostsByCategory,
    getPostsByTag,
    getFeaturedPosts,
    searchPosts
  };
}

export function useBlogPost(slug) {
  const [post, setPost] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        
        // Find the post by slug
        const foundPost = blogConfig.posts.find(p => p.id === slug);
        
        if (!foundPost) {
          setError('Post not found');
          return;
        }

        setPost(foundPost);
        
        // For now, we'll use a placeholder content
        // In a real implementation, this would load the markdown file
        setContent(`
          <h2>Introduction</h2>
          <p>This is a placeholder for the blog post content. In the full implementation, 
          this would be loaded from the markdown file and processed with syntax highlighting.</p>
          
          <h2>Content Loading</h2>
          <p>The markdown content would be processed and rendered here with proper styling.</p>
          
          <h3>Code Examples</h3>
          <pre><code class="language-javascript">
// Example code would be highlighted here
function example() {
  console.log("Hello, World!");
}
          </code></pre>
        `);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  return { post, content, loading, error };
}
