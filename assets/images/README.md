# Cover Images

This folder contains album/track cover images for the BrstWorks music player.

## Current Placeholder Images:
- `electronic-dreams.jpg` - Cover for Electronic Dreams track
- `midnight-vibes.jpg` - Cover for Midnight Vibes track  
- `urban-pulse.jpg` - Cover for Urban Pulse track
- `chill-waves.jpg` - Cover for Chill Waves track

## Image Specifications:

### Recommended Format:
- **Format**: JPG or PNG
- **Size**: 300x300px (square aspect ratio)
- **File Size**: Keep under 500KB for faster loading
- **Quality**: 85-95% compression for JPG

### Alternative Sizes:
- Minimum: 200x200px
- Maximum: 800x800px
- Always maintain square (1:1) aspect ratio

## Adding New Cover Images:

1. **Create Square Images**: Ensure all covers are square (same width and height)
2. **Optimize File Size**: Use image compression tools to reduce file size
3. **Consistent Naming**: Use lowercase with hyphens (e.g., "my-track-name.jpg")
4. **Update Playlist**: Modify the `playlist` array in `script.js` to reference your new images

## File Naming Convention:
- Use lowercase letters only
- Replace spaces with hyphens
- Match the audio file name
- Example: "My Song.mp3" → "my-song.jpg"

## Fallback System:
If an image fails to load, the player will automatically generate a placeholder with:
- Gradient background color
- Track initials as text
- Consistent with the site's color scheme

## Tools for Image Creation:
- **Free**: GIMP, Paint.NET, Canva
- **Online**: Photopea, Remove.bg, Squoosh (compression)
- **Professional**: Photoshop, Illustrator

## Current Status:
The site currently uses automatic fallback placeholders.
Add actual cover art images to enhance the visual experience!