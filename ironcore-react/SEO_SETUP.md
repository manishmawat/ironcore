# SEO Setup Guide

This guide explains the SEO configuration for your IronCore portfolio website.

## Files Created

### 1. `robots.txt` (`/public/robots.txt`)
- **Purpose**: Tells search engine crawlers how to index your website
- **Location**: Will be accessible at `https://yourdomain.com/ironcore/robots.txt`
- **Content**: 
  - Allows all search engines to crawl your site
  - Points to your sitemap
  - Sets a respectful crawl delay

### 2. `sitemap.xml` (`/public/sitemap.xml`)
- **Purpose**: Lists all your website pages for search engines
- **Location**: Will be accessible at `https://yourdomain.com/ironcore/sitemap.xml`
- **Content**: 
  - Main pages (home, blog)
  - All blog posts with dates and priorities
  - Proper XML formatting for search engines

### 3. `generate-sitemap.js` (`/scripts/generate-sitemap.js`)
- **Purpose**: Automatically generates updated sitemap based on your blog configuration
- **Usage**: `npm run generate-sitemap`

## How to Use

### 1. Update Domain
Before deploying, update the domain in these files:
- `robots.txt`: Change `https://yourdomain.com` to your actual domain
- `generate-sitemap.js`: Change `BASE_URL` constant

### 2. Generate Sitemap
```bash
npm run generate-sitemap
```

This will:
- Read your blog configuration
- Generate a new sitemap.xml
- Include all blog posts with proper dates
- Set appropriate priorities for featured posts

### 3. Automate Sitemap Updates
Add this to your build process or set up a cron job:
```bash
# Add to package.json build script
"build": "tsc -b && vite build && npm run copy-to-root && npm run generate-sitemap"
```

## SEO Benefits

### Search Engine Crawling
- **robots.txt**: Guides crawlers efficiently
- **sitemap.xml**: Ensures all pages are discovered
- **Proper URLs**: Clean, SEO-friendly URL structure

### Content Discovery
- **Blog Posts**: All posts automatically included in sitemap
- **Date Information**: Helps with content freshness
- **Priority Settings**: Featured posts get higher priority

### Technical SEO
- **XML Format**: Standard sitemap protocol
- **Last Modified**: Tracks content updates
- **Change Frequency**: Helps crawlers optimize visits

## Maintenance

### When to Update
- After adding new blog posts
- When changing domain
- Before major deployments
- Monthly for content freshness

### Best Practices
1. **Keep URLs Clean**: Use descriptive, keyword-rich URLs
2. **Update Regularly**: Run sitemap generation after content changes
3. **Monitor Performance**: Use Google Search Console to track indexing
4. **Validate XML**: Ensure sitemap follows proper format

## Search Engine Submission

### Google Search Console
1. Add your property
2. Submit sitemap URL: `https://yourdomain.com/ironcore/sitemap.xml`
3. Monitor indexing status

### Bing Webmaster Tools
1. Add your site
2. Submit sitemap
3. Track performance

## Troubleshooting

### Common Issues
- **404 Errors**: Ensure all URLs in sitemap are valid
- **Crawl Errors**: Check robots.txt syntax
- **Indexing Delays**: Sitemaps help but don't guarantee immediate indexing

### Validation
- **Sitemap**: Use online XML validators
- **Robots.txt**: Test with Google's robots.txt tester
- **URLs**: Verify all links work correctly

## Next Steps

1. **Customize Domain**: Update URLs in configuration files
2. **Test Locally**: Verify files are accessible
3. **Deploy**: Upload to your hosting provider
4. **Submit**: Add sitemap to search engine tools
5. **Monitor**: Track indexing and performance

---

For more information, check out:
- [Google Sitemap Guidelines](https://developers.google.com/search/docs/advanced/sitemaps/overview)
- [Robots.txt Specification](https://developers.google.com/search/docs/advanced/robots/intro)
- [SEO Best Practices](https://developers.google.com/search/docs/beginner/seo-starter-guide)
