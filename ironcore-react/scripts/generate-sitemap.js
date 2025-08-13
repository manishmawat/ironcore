#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import blog configuration
import blogConfig from '../src/config/blogConfig.js';

// Configuration
const BASE_URL = 'https://yourdomain.com/ironcore';
const OUTPUT_FILE = path.join(__dirname, '../public/sitemap.xml');
const CURRENT_DATE = new Date().toISOString().split('T')[0];

// Generate sitemap XML content
function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Main pages
  xml += '  <!-- Main Pages -->\n';
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/</loc>\n`;
  xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>1.0</priority>\n`;
  xml += `  </url>\n`;
  
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/blog</loc>\n`;
  xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += `  </url>\n`;
  
  // Blog posts
  xml += '  <!-- Blog Posts -->\n';
  blogConfig.posts.forEach(post => {
    // Convert date format from "December 15, 2024" to "2024-12-15"
    const dateParts = post.date.split(' ');
    const month = new Date(Date.parse(post.date + " 1, 2000")).getMonth() + 1;
    const day = parseInt(dateParts[1]);
    const year = dateParts[2];
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/blog/${post.id}</loc>\n`;
    xml += `    <lastmod>${formattedDate}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>${post.featured ? '0.7' : '0.6'}</priority>\n`;
    xml += `  </url>\n`;
  });
  
  xml += '</urlset>';
  
  return xml;
}

// Write sitemap to file
function writeSitemap(xmlContent) {
  try {
    fs.writeFileSync(OUTPUT_FILE, xmlContent, 'utf8');
    console.log(`✅ Sitemap generated successfully at: ${OUTPUT_FILE}`);
    console.log(`📊 Total URLs: ${2 + blogConfig.posts.length}`);
  } catch (error) {
    console.error('❌ Error writing sitemap:', error);
    process.exit(1);
  }
}

// Main execution
function main() {
  console.log('🚀 Generating sitemap...');
  
  // Check if blogConfig exists
  if (!blogConfig || !blogConfig.posts) {
    console.error('❌ Blog configuration not found');
    process.exit(1);
  }
  
  const sitemap = generateSitemap();
  writeSitemap(sitemap);
  
  console.log('🎉 Sitemap generation complete!');
}

// Run if called directly
main();
