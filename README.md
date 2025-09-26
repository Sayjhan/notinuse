# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your professional experience, projects, and skills.

## Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Fully Responsive**: Works perfectly on all devices and screen sizes
- 🚀 **Interactive Elements**: Smooth scrolling, hover effects, and animations
- 📝 **Contact Form**: Functional contact form with validation
- 🎯 **SEO Optimized**: Semantic HTML structure for better search engine visibility
- ⚡ **Fast Loading**: Optimized CSS and JavaScript for performance

## Sections Included

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About Me** - Personal information and statistics
3. **Work Experience** - Timeline of professional experience
4. **Projects** - Showcase of your best work
5. **Skills** - Technical skills and technologies
6. **Contact** - Contact information and form
7. **Footer** - Copyright and additional links

## Getting Started

### 1. Customize Content

#### Personal Information
- Update your name in the `<title>` tag and hero section
- Replace placeholder text with your actual information
- Update contact details (email, phone, location)
- Add your social media links

#### Experience Section
- Modify job titles, company names, and dates
- Update job descriptions and responsibilities
- Add or remove experience entries as needed

#### Projects Section
- Replace placeholder projects with your actual work
- Update project descriptions and technologies used
- Add links to live demos and GitHub repositories
- Replace placeholder icons with actual project screenshots

#### Skills Section
- Update skills based on your expertise
- Organize skills into relevant categories
- Add or remove skill categories as needed

### 2. Customize Styling

#### Colors
The website uses a modern color scheme that can be easily customized:

```css
/* Primary colors */
--primary-color: #2563eb;      /* Blue */
--secondary-color: #fbbf24;    /* Yellow */
--accent-color: #667eea;       /* Purple */

/* Background colors */
--bg-light: #f9fafb;
--bg-dark: #1f2937;
```

#### Typography
The website uses Inter font family. You can change it by:
1. Updating the Google Fonts link in the HTML
2. Modifying the `font-family` property in CSS

### 3. Add Your Images

#### Profile Picture
- Replace the placeholder icon in the hero section
- Update the `profile-placeholder` div with your actual image:

```html
<div class="hero-image">
    <img src="path/to/your/photo.jpg" alt="Your Name" class="profile-photo">
</div>
```

#### Project Images
- Replace placeholder icons with actual project screenshots
- Update the `project-placeholder` divs with your images:

```html
<div class="project-image">
    <img src="path/to/project-image.jpg" alt="Project Name">
</div>
```

### 4. Customize the Contact Form

The contact form currently shows a success message. To make it functional:

1. **EmailJS Integration** (Recommended):
   ```javascript
   // Add EmailJS script to HTML
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   
   // Initialize EmailJS
   emailjs.init("YOUR_USER_ID");
   
   // Update form submission in script.js
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
       name: name,
       email: email,
       subject: subject,
       message: message
   });
   ```

2. **Formspree Integration**:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
   ```

3. **Custom Backend**: Implement your own form handling backend

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── images/             # Your images folder
    ├── profile.jpg
    ├── project1.jpg
    └── project2.jpg
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Compress images before adding them
2. **Minify CSS/JS**: Use tools like UglifyJS or CSSNano for production
3. **CDN**: Use CDN for external libraries (already implemented)
4. **Lazy Loading**: Consider implementing lazy loading for images

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Or connect your GitHub repository for automatic deployments
3. Your site will be available at a Netlify subdomain

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy your site
3. Your site will be available at a Vercel subdomain

## Customization Examples

### Change Color Scheme
```css
:root {
    --primary-color: #8b5cf6;      /* Purple */
    --secondary-color: #f97316;    /* Orange */
    --accent-color: #06b6d4;       /* Cyan */
}
```

### Add New Section
```html
<section id="education" class="education">
    <div class="container">
        <h2 class="section-title">Education</h2>
        <!-- Your education content -->
    </div>
</section>
```

### Modify Animations
```css
.fade-in-up {
    animation: fadeInUp 1s ease-out; /* Change duration */
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(50px); /* Change distance */
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and ensure images exist
2. **Styling not applied**: Verify CSS file is linked correctly
3. **JavaScript not working**: Check browser console for errors
4. **Mobile menu not working**: Ensure JavaScript file is loaded

### Performance Issues

1. **Slow loading**: Optimize images and minify CSS/JS
2. **Animations laggy**: Reduce animation complexity on mobile
3. **Large file sizes**: Compress images and use modern formats (WebP)

## Support

If you encounter any issues or need help customizing your portfolio:

1. Check the browser console for error messages
2. Verify all file paths are correct
3. Ensure all files are in the same directory
4. Test in different browsers

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Fonts: [Inter](https://fonts.google.com/specimen/Inter) by Google Fonts
- Icons: [Font Awesome](https://fontawesome.com/)
- Design inspiration from modern web design trends

---

**Happy coding! 🚀**

Feel free to customize this portfolio to match your personal brand and style. The code is well-structured and commented, making it easy to modify and extend.
