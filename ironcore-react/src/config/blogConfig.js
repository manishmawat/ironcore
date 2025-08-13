// Blog Configuration
export const blogConfig = {
  // Blog metadata
  blog: {
    title: "Blog",
    description: "Thoughts on AI, Machine Learning, and Software Development",
    author: "Manish Kumar Mawatwal",
    postsPerPage: 6
  },

  // Blog posts data
  posts: [
    {
      id: "docker-tutorial",
      title: "Docker Tutorial",
      excerpt: "Learn Docker fundamentals and best practices for containerizing applications. From basic concepts to advanced deployment strategies.",
      content: "docker-tutorial",
      author: "Manish Kumar Mawatwal",
      date: "August 11, 2025",
      readTime: "8 min read",
      tags: ["Docker", "DevOps", "Containers", "Deployment"],
      featured: true,
      image: "",
      category: "DevOps"
    },
    {
      id: "my-first-blog-post",
      title: "My First Blog Post",
      excerpt: "Write a brief description of your blog post here. This will appear in the blog list and search results.",
      content: "my-first-blog-post",
      author: "Manish Kumar Mawatwal",
      date: "August 11, 2025",
      readTime: "5 min read",
      tags: ["AI", "Engineering"],
      featured: true,
      image: "",
      category: "AI Engineering"
    },
    {
      id: "building-scalable-ai-systems",
      title: "Building Scalable AI Systems: Best Practices",
      excerpt: "Learn the essential principles and architectural patterns for building AI systems that can scale from prototype to production, handling real-world challenges and performance requirements.",
      content: "building-scalable-ai-systems",
      author: "Manish Kumar Mawatwal",
      date: "December 15, 2024",
      readTime: "8 min read",
      tags: ["AI", "Architecture", "Scalability", "Best Practices"],
      featured: true,
      image: "ai-systems",
      category: "AI Engineering"
    },
    {
      id: "ml-deployment-strategies",
      title: "Machine Learning Model Deployment Strategies",
      excerpt: "Explore different approaches to deploying ML models in production, from simple REST APIs to complex microservices architectures, with real-world examples and best practices.",
      content: "ml-deployment-strategies",
      author: "Manish Kumar Mawatwal",
      date: "December 10, 2024",
      readTime: "10 min read",
      tags: ["ML", "Deployment", "DevOps", "Production"],
      featured: true,
      image: "ml-deployment",
      category: "ML Engineering"
    },
    {
      id: "future-ai-software-development",
      title: "The Future of AI in Software Development",
      excerpt: "Discussing how AI is transforming the software development lifecycle and what developers need to know to stay ahead in this rapidly evolving field.",
      content: "future-ai-software-development",
      author: "Manish Kumar Mawatwal",
      date: "December 5, 2024",
      readTime: "6 min read",
      tags: ["AI", "Software Development", "Future", "Trends"],
      featured: false,
      image: "ai-future",
      category: "Industry Trends"
    },
    {
      id: "optimizing-neural-networks",
      title: "Optimizing Neural Networks for Production",
      excerpt: "Advanced techniques for optimizing neural network performance, including quantization, pruning, and model compression strategies for real-world deployment.",
      content: "optimizing-neural-networks",
      author: "Manish Kumar Mawatwal",
      date: "November 28, 2024",
      readTime: "12 min read",
      tags: ["Neural Networks", "Optimization", "Performance", "Production"],
      featured: false,
      image: "neural-optimization",
      category: "Deep Learning"
    }
  ],

  // Blog categories
  categories: [
    "AI Engineering",
    "ML Engineering", 
    "Deep Learning",
    "Industry Trends",
    "Best Practices",
    "Tutorials",
    "DevOps"
  ],

  // Blog tags
  tags: [
    "AI", "ML", "Deep Learning", "Neural Networks",
    "Architecture", "Scalability", "Deployment", "DevOps",
    "Production", "Performance", "Optimization",
    "Best Practices", "Tutorials", "Industry Trends",
    "Docker", "Containers"
  ]
};

export default blogConfig;
