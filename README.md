# Brimany Attorneys Blog

A modern blog built with [Eleventy (11ty)](https://www.11ty.dev/) and [Decap CMS](https://decapcms.org/) for Brimany Attorneys.

## Features

- Fast, static site generation with 11ty
- Git-based CMS with Decap CMS
- Responsive design matching the main Brimany Attorneys website
- Easy content management through a user-friendly admin interface
- Automatic deployment via Netlify

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/imostack/brimany-blog.git
   cd brimany-blog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The site will be available at `http://localhost:8080`

4. **Build for production:**
   ```bash
   npm run build
   ```

   The built site will be in the `_site` folder.

## Deployment to Netlify

### Initial Setup

1. **Create a Git Repository:**
   - Push this project to a new GitHub repository

2. **Connect to Netlify:**
   - Log in to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository
   - Build settings will be auto-detected from `netlify.toml`

3. **Configure Custom Domain:**
   - Go to Site settings > Domain management
   - Add your custom domain: `blog.brimanyattorneys.com`
   - Follow Netlify's instructions to configure DNS

4. **Enable Netlify Identity:**
   - Go to Site settings > Identity
   - Click "Enable Identity"
   - Under Registration preferences, select "Invite only"
   - Go to Identity > Settings > Services > Git Gateway
   - Enable Git Gateway

5. **Invite Users:**
   - Go to Identity tab
   - Click "Invite users"
   - Enter the email address of users who should have CMS access

### Accessing the CMS

Once deployed, the CMS admin panel is available at:
```
https://blog.brimanyattorneys.com/admin/
```

Users will need to:
1. Accept the email invitation
2. Set up their password
3. Log in to the admin panel

## Content Management

### Creating a New Blog Post

1. Go to the admin panel (`/admin/`)
2. Click "Blog Posts" in the sidebar
3. Click "New Blog Posts"
4. Fill in the required fields:
   - **Title**: The post title
   - **Publish Date**: When to publish
   - **Author**: Post author (defaults to Onisowurun Sampson)
   - **Category**: Select from available categories
   - **Featured Image**: Upload or select an image
   - **Body**: Write your content using Markdown

5. Click "Save" to save as draft or "Publish" to publish immediately

### Editorial Workflow

The CMS uses an editorial workflow with three states:
- **Draft**: Work in progress
- **In Review**: Ready for review
- **Ready**: Approved and ready to publish

## Project Structure

```
brimany-blog/
├── src/
│   ├── _includes/       # Layout templates
│   │   ├── base.njk     # Base layout
│   │   └── post.njk     # Blog post layout
│   ├── admin/           # Decap CMS admin
│   │   ├── index.html   # Admin entry point
│   │   └── config.yml   # CMS configuration
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript
│   ├── posts/           # Blog posts (Markdown)
│   └── index.njk        # Blog homepage
├── .eleventy.js         # 11ty configuration
├── netlify.toml         # Netlify configuration
└── package.json         # Dependencies
```

## Customization

### Adding New Categories

Edit `src/admin/config.yml` and add new options to the category field:

```yaml
- label: "Category"
  name: "category"
  widget: "select"
  options:
    - "Legal Insights"
    - "Corporate Law"
    - "Your New Category"  # Add here
```

### Modifying Styles

Edit `src/css/styles.css` to customize the blog appearance. The styles are designed to match the main Brimany Attorneys website.

## Support

For technical issues with the blog, contact the web development team.

For content-related questions, reach out to Brimany Attorneys.

---

Built with love for Brimany Attorneys
