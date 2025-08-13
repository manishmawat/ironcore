import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { format, parseISO } from 'date-fns';

// Blog posts directory
const POSTS_DIR = '/src/content/blog/';

// Process markdown content
export async function processMarkdown(content) {
  const { data, content: markdownContent } = matter(content);
  
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .process(markdownContent);

  return {
    frontmatter: data,
    content: processedContent.toString(),
    excerpt: generateExcerpt(processedContent.toString())
  };
}

// Generate excerpt from content
function generateExcerpt(content, maxLength = 200) {
  const textContent = content.replace(/<[^>]*>/g, '');
  if (textContent.length <= maxLength) return textContent;
  return textContent.substring(0, maxLength).trim() + '...';
}

// Format date
export function formatDate(dateString) {
  try {
    const date = parseISO(dateString);
    return format(date, 'MMMM d, yyyy');
  } catch {
    return dateString;
  }
}

// Calculate read time
export function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
}

// Blog post metadata interface
export const createPostMetadata = (frontmatter, slug) => ({
  id: slug,
  title: frontmatter.title,
  excerpt: frontmatter.excerpt,
  author: frontmatter.author || 'Manish Kumar Mawatwal',
  date: frontmatter.date,
  readTime: frontmatter.readTime || calculateReadTime(frontmatter.content || ''),
  tags: frontmatter.tags || [],
  featured: frontmatter.featured || false,
  image: frontmatter.image,
  category: frontmatter.category,
  slug: slug
});

// Validate blog post frontmatter
export function validatePostMetadata(frontmatter) {
  const required = ['title', 'date', 'category'];
  const missing = required.filter(field => !frontmatter[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }
  
  return true;
}
