# BrstWorks - Music & Audio Website

A modern, responsive music website built for GitHub Pages. Features a custom audio player, playlist management, and a sleek dark theme perfect for music content.

## 🎵 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Custom Music Player**: Built-in audio player with playlist support
- **Modern UI**: Dark theme with gradient accents and smooth animations
- **Interactive Elements**: Sound wave visualizations and hover effects
- **Contact Form**: Integrated contact form for visitor inquiries
- **GitHub Pages Ready**: Optimized for easy deployment on GitHub Pages

## 🚀 Quick Start

### Deploy to GitHub Pages

1. **Fork or Download** this repository
2. **Upload to GitHub**: Create a new repository and upload all files
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
4. **Access Your Site**: Your site will be available at `https://yourusername.github.io/repository-name`

### Local Development

```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to the project directory
cd brstworks-v2

# Open with a local server (recommended)
# Option 1: Using Python
python -m http.server 8000

# Option 2: Using Node.js (http-server)
npx http-server

# Option 3: Using VS Code Live Server extension
# Just right-click on index.html and select "Open with Live Server"
```

## 📁 Project Structure

```
brstworks-v2/
├── index.html              # Main HTML file
├── styles.css              # CSS styling
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
├── _github_pages_info.txt  # GitHub Pages deployment info
└── assets/                 # Media files and assets
    ├── setup-guide.html    # Interactive setup guide
    ├── audio/              # Audio files folder
    │   ├── README.md       # Audio setup instructions
    │   ├── placeholder-generator.js  # Demo audio system
    │   └── (your MP3 files go here)
    └── images/             # Cover images folder
        ├── README.md       # Image setup instructions
        └── (your cover images go here)
```

## 🎨 Customization

### Colors & Theme
The site uses CSS custom properties for easy color customization. Main colors:
- Primary: `#4ecdc4` (Teal)
- Secondary: `#ff6b6b` (Coral)
- Accent: `#45b7d1` (Blue)
- Background: Dark gradients

### Adding Your Music
1. **Add Audio Files**: Place MP3 files in `assets/audio/` folder
2. **Add Cover Images**: Place square cover images in `assets/images/` folder  
3. **Update Playlist**: The playlist in `script.js` is already configured for local assets
4. **Follow Naming**: Use lowercase filenames with hyphens (e.g., `my-song.mp3`)

**Quick Setup:**
- Place `electronic-dreams.mp3` in `assets/audio/`
- Place `electronic-dreams.jpg` in `assets/images/`
- The site will automatically load your files!

Example playlist entry (already configured):
```javascript
{
    title: 'Electronic Dreams',
    artist: 'BrstWorks',
    duration: '3:45',
    cover: 'assets/images/electronic-dreams.jpg',
    src: 'assets/audio/electronic-dreams.mp3'
}
```

**📖 Need Help?** Open `assets/setup-guide.html` in your browser for a detailed, interactive guide!

### Branding
- **Logo/Title**: Edit the brand name in `index.html`
- **Colors**: Modify CSS gradient values in `styles.css`
- **Content**: Update text content in HTML sections
- **Images**: Replace placeholder images with your own

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup and audio API
- **CSS3**: Modern styling with flexbox, grid, and animations
- **Vanilla JavaScript**: No dependencies, lightweight and fast
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Inter font family

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Features
- **Lightweight**: No heavy frameworks or libraries
- **Optimized Images**: Placeholder images with lazy loading ready
- **Efficient CSS**: Minimal reflows and repaints
- **Audio Preloading**: Smart audio loading for better UX

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and up
- **Tablet**: 768px to 1199px
- **Mobile**: 767px and below
- **Small Mobile**: 480px and below

## 🎵 Audio Player Features

### Controls
- Play/Pause functionality
- Previous/Next track navigation
- Progress bar with seek functionality
- Time display (current/duration)
- Keyboard shortcuts (Space, Arrow keys)

### Playlist Management
- Click any track to play
- Visual indication of currently playing track
- Smooth transitions between tracks
- Auto-play next track when current ends

## 📧 Contact Form

The contact form is ready to use but requires backend integration for email sending. Options include:

1. **Netlify Forms**: If deploying to Netlify
2. **Formspree**: Free form handling service
3. **EmailJS**: Client-side email sending
4. **Custom Backend**: Your own server-side solution

## 🚀 Deployment Options

### GitHub Pages (Recommended)
- Free hosting for public repositories
- Automatic deployment on push
- Custom domain support
- SSL certificate included

### Alternative Platforms
- **Netlify**: Advanced features, form handling
- **Vercel**: Fast deployment, preview URLs
- **Surge.sh**: Simple static site deployment

## 📈 SEO Optimization

The site includes:
- Semantic HTML structure
- Meta descriptions and titles
- Open Graph tags ready
- Clean, crawlable URLs
- Fast loading times

## 🔧 Customization Examples

### Change Primary Color
```css
/* In styles.css, replace #4ecdc4 with your color */
.nav-link:hover { color: #your-color; }
.hero-subtitle { color: #your-color; }
/* Update all gradient references */
```

### Add New Sections
1. Add HTML section in `index.html`
2. Add corresponding CSS in `styles.css`
3. Update navigation links
4. Add scroll animation if desired

### Integrate Real Audio Files
1. Upload MP3/WAV files to your repository
2. Update file paths in the playlist array
3. Ensure files are web-optimized (compressed)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you need help with customization or deployment, feel free to:
- Open an issue on GitHub
- Check the documentation
- Contact through the website's contact form

---

**BrstWorks** - Where Music Meets Innovation 🎵