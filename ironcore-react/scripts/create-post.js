#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get command line arguments
const args = process.argv.slice(2);
const title = args[0];
const category = args[1] || 'General';

if (!title) {
  console.error('Usage: npm run new-post "Post Title" [category]');
  console.error('Example: npm run new-post "My New Blog Post" "AI Engineering"');
  process.exit(1);
}

// Create slug from title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')
  .trim();

// Get current date
const now = new Date();
const date = now.toISOString().split('T')[0];

// Blog post template
const template = `---
title: "${title}"
excerpt: "Write a brief description of your blog post here. This will appear in the blog list and search results."
author: "Manish Kumar Mawatwal"
date: "${date}"
category: "${category}"
tags: []
featured: false
image: ""
---

# ${title}

## Introduction

Start your blog post with an engaging introduction that hooks the reader and explains what they'll learn.

## Main Content

Write your main content here using Markdown syntax:

- Use **bold** and *italic* text for emphasis
- Create lists like this one
- Add \`code snippets\` inline
- Include code blocks:

\`\`\`javascript
// Your code here
console.log("Hello, World!");
\`\`\`

## Subheadings

Use ## for subheadings to organize your content.

### Code Examples

Include practical examples that readers can follow along with.

## Conclusion

Wrap up your post with a summary of key takeaways and next steps for readers.

---

*This post is part of the ${category} series. Check out other related posts in the [blog](/blog).*
`;

// Create content directory if it doesn't exist
const contentDir = path.join(__dirname, '..', 'src', 'content', 'blog');
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

// Create the post file
const postPath = path.join(contentDir, `${slug}.md`);
fs.writeFileSync(postPath, template);

console.log(`✅ Created new blog post: ${postPath}`);
console.log(`📝 Edit the file to add your content`);
console.log(`🔗 Your post will be available at: /blog/${slug}`);
console.log(`\n📋 Next steps:`);
console.log(`1. Edit the frontmatter (title, excerpt, tags, etc.)`);
console.log(`2. Write your content in Markdown`);
console.log(`3. Add images to the public/images/blog/ directory`);
console.log(`4. Test locally with: npm run dev`);
