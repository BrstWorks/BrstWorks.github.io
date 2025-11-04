// DOM Elements
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.getElementById('progress');
const progressBar = document.querySelector('.progress-bar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');
const trackCover = document.getElementById('trackCover');
const trackList = document.getElementById('trackList');
const navToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contactForm');

// Playlist data
const playlist = [
    {
        title: 'Electronic Dreams',
        artist: 'BrstWorks',
        duration: '3:45',
        cover: 'assets/images/electronic-dreams.jpg',
        src: 'assets/audio/electronic-dreams.mp3'
    },
    {
        title: 'Midnight Vibes',
        artist: 'BrstWorks',
        duration: '4:12',
        cover: 'assets/images/midnight-vibes.jpg',
        src: 'assets/audio/midnight-vibes.mp3'
    },
    {
        title: 'Urban Pulse',
        artist: 'BrstWorks',
        duration: '2:58',
        cover: 'assets/images/urban-pulse.jpg',
        src: 'assets/audio/urban-pulse.mp3'
    },
    {
        title: 'Chill Waves',
        artist: 'BrstWorks',
        duration: '5:23',
        cover: 'assets/images/chill-waves.jpg',
        src: 'assets/audio/chill-waves.mp3'
    }
];

// Fallback audio for demonstration (using data URLs)
// Replace the src paths above with actual MP3 files in production
const fallbackAudio = {
    'electronic-dreams': "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBg==",
    'midnight-vibes': "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBg==",
    'urban-pulse': "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBg==",
    'chill-waves': "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkSR1/LPeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBg=="
};

let currentTrackIndex = 0;
let isPlaying = false;

// Initialize the music player
function initPlayer() {
    // Load the first track
    loadTrack(currentTrackIndex);
    
    // Set up event listeners
    setupEventListeners();
    
    // Update track list with event handlers
    updateTrackList();
}

// Load a specific track
function loadTrack(index) {
    const track = playlist[index];
    
    // Try to load the local audio file, fallback to demo audio if not available
    audio.src = track.src;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    
    // Handle cover image with fallback
    trackCover.src = track.cover;
    trackCover.onerror = function() {
        // Fallback to generated placeholder if image doesn't exist
        const colors = ['4ecdc4', 'ff6b6b', '45b7d1', '96ceb4'];
        const initials = track.title.split(' ').map(word => word[0]).join('').substring(0, 2);
        this.src = `https://via.placeholder.com/300x300/${colors[index % colors.length]}/fff?text=${initials}`;
    };
    
    // Update active track in playlist
    updateActiveTrack(index);
}

// Update the active track styling in playlist
function updateActiveTrack(index) {
    const trackItems = document.querySelectorAll('.track-item');
    trackItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Update track list with click handlers
function updateTrackList() {
    const trackItems = document.querySelectorAll('.track-item');
    trackItems.forEach((item, index) => {
        const playButton = item.querySelector('.play-track-btn');
        
        item.addEventListener('click', () => {
            currentTrackIndex = index;
            loadTrack(index);
            playTrack();
        });
        
        playButton.addEventListener('click', (e) => {
            e.stopPropagation();
            currentTrackIndex = index;
            loadTrack(index);
            playTrack();
        });
    });
}

// Play/Pause functionality
function togglePlay() {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
}

function playTrack() {
    audio.play();
    isPlaying = true;
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    
    // Add playing animation to current track
    const activeTrackItem = document.querySelector('.track-item.active');
    if (activeTrackItem) {
        const playButton = activeTrackItem.querySelector('.play-track-btn');
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
}

function pauseTrack() {
    audio.pause();
    isPlaying = false;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    
    // Remove playing animation from current track
    const activeTrackItem = document.querySelector('.track-item.active');
    if (activeTrackItem) {
        const playButton = activeTrackItem.querySelector('.play-track-btn');
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// Previous track
function prevTrack() {
    currentTrackIndex = currentTrackIndex > 0 ? currentTrackIndex - 1 : playlist.length - 1;
    loadTrack(currentTrackIndex);
    if (isPlaying) playTrack();
}

// Next track
function nextTrack() {
    currentTrackIndex = currentTrackIndex < playlist.length - 1 ? currentTrackIndex + 1 : 0;
    loadTrack(currentTrackIndex);
    if (isPlaying) playTrack();
}

// Update progress bar
function updateProgress() {
    const { duration, currentTime } = audio;
    
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = progressPercent + '%';
        
        // Update time displays
        currentTimeEl.textContent = formatTime(currentTime);
        durationEl.textContent = formatTime(duration);
    }
}

// Set progress
function setProgress(e) {
    const width = progressBar.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    
    audio.currentTime = (clickX / width) * duration;
}

// Format time to mm:ss
function formatTime(time) {
    if (isNaN(time)) return '0:00';
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Setup all event listeners
function setupEventListeners() {
    // Player controls
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', prevTrack);
    nextBtn.addEventListener('click', nextTrack);
    
    // Audio events
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', nextTrack);
    audio.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(audio.duration);
    });
    
    // Progress bar
    progressBar.addEventListener('click', setProgress);
    
    // Mobile navigation
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
    
    // Reset the form
    contactForm.reset();
}

// Scroll to section function (used by CTA button)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add parallax effect to hero section
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });
}

// Add loading animation
function showLoadingAnimation() {
    // Add a simple loading effect
    document.body.style.opacity = '0';
    
    window.addEventListener('load', () => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    });
}

// Keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Spacebar for play/pause
        if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            togglePlay();
        }
        
        // Arrow keys for next/previous
        if (e.code === 'ArrowRight') {
            nextTrack();
        }
        
        if (e.code === 'ArrowLeft') {
            prevTrack();
        }
    });
}

// Add visual feedback for interactions
function addVisualFeedback() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button, .track-item');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.height, rect.width);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add CSS for ripple effect
function addRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(78, 205, 196, 0.3);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(1);
                opacity: 0;
            }
        }
        
        button, .track-item {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
}

// Update page title with current playing track
function updatePageTitle() {
    audio.addEventListener('play', () => {
        const currentTrack = playlist[currentTrackIndex];
        document.title = `♪ ${currentTrack.title} - BrstWorks`;
    });
    
    audio.addEventListener('pause', () => {
        document.title = 'BrstWorks - Music & Audio';
    });
}

// Add intersection observer for scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initPlayer();
    showLoadingAnimation();
    addParallaxEffect();
    setupKeyboardShortcuts();
    addVisualFeedback();
    addRippleStyles();
    updatePageTitle();
    setupScrollAnimations();
});

// Error handling for audio loading
audio.addEventListener('error', (e) => {
    console.warn('Audio loading error, trying fallback:', e);
    
    // Try to use fallback audio
    const currentTrack = playlist[currentTrackIndex];
    const fallbackKey = currentTrack.src.split('/').pop().replace('.mp3', '').replace('-', '-');
    
    if (fallbackAudio[fallbackKey]) {
        console.log('Using fallback audio for:', currentTrack.title);
        audio.src = fallbackAudio[fallbackKey];
    } else {
        // Show user-friendly error message
        trackTitle.textContent = 'Audio unavailable - Add MP3 files to assets/audio/';
        console.log('No fallback available. Please add actual MP3 files to assets/audio/ folder.');
    }
});

// Volume control (if you want to add it later)
function setVolume(volume) {
    audio.volume = volume / 100;
}

// Export functions for potential external use
window.BrstWorks = {
    playTrack,
    pauseTrack,
    nextTrack,
    prevTrack,
    setVolume,
    scrollToSection
};