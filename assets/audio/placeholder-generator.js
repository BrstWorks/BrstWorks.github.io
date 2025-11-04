// Placeholder Audio Generator
// This script generates simple audio data URLs for demonstration purposes
// Replace with actual MP3 files in production

// Generate a simple beep tone as base64 data URL
function generatePlaceholderAudio(frequency = 440, duration = 3) {
    // This is a simplified approach - in reality you'd want actual audio files
    // For now, we'll use a data URL for a very short audio clip
    
    // Sample MP3 header for a short silent audio (about 1 second)
    const silentMp3DataUrl = "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAATMP3/7QQQALrwgEIQEBAgQEAQQLB/Pf/tBBAAuvCAQhAQECBAQBBAsH89/+0EEAAKBEyBCAQgADADYBQAAFAAFBUohD/P/+//7//v8QEm2//j+//j8QEm4A//7/EP8QLgABBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUF";
    
    return silentMp3DataUrl;
}

// Export placeholder audio URLs
window.PlaceholderAudio = {
    'electronic-dreams': generatePlaceholderAudio(440, 225), // 3:45
    'midnight-vibes': generatePlaceholderAudio(523, 252),    // 4:12  
    'urban-pulse': generatePlaceholderAudio(330, 178),       // 2:58
    'chill-waves': generatePlaceholderAudio(392, 323)        // 5:23
};

console.log('Placeholder audio generated. Replace with actual MP3 files for production.');