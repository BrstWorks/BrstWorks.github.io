// DOM Elements - only get what we need initially
let audio, playBtn, prevBtn, nextBtn, progress, progressBar;
let currentTimeEl, durationEl, trackTitle, trackArtist, trackCover, trackList;
let navToggle, navMenu, contactForm;

// Playlist data with local asset paths
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

// Simple silent audio for demonstration (very small)
const SILENT_AUDIO = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAAD///////8=";

let currentTrackIndex = 0;
let isPlaying = false;

// Lazy load DOM elements when needed
function initDOMElements() {
    if (!audio) {
        audio = document.getElementById('audio');
        playBtn = document.getElementById('playBtn');
        prevBtn = document.getElementById('prevBtn');
        nextBtn = document.getElementById('nextBtn');
        progress = document.getElementById('progress');
        progressBar = document.querySelector('.progress-bar');
        currentTimeEl = document.getElementById('currentTime');
        durationEl = document.getElementById('duration');
        trackTitle = document.getElementById('trackTitle');
        trackArtist = document.getElementById('trackArtist');
        trackCover = document.getElementById('trackCover');
        trackList = document.getElementById('trackList');
        navToggle = document.getElementById('mobile-menu');
        navMenu = document.querySelector('.nav-menu');
        contactForm = document.getElementById('contactForm');
    }
}

// Initialize the music player
function initPlayer() {
    initDOMElements();
    
    // Load the first track info (without audio)
    updateTrackDisplay(currentTrackIndex);
    
    // Set up event listeners
    setupEventListeners();
    
    // Update track list with event handlers
    updateTrackList();
}

// Update track display without loading audio immediately
function updateTrackDisplay(index) {
    const track = playlist[index];
    
    if (trackTitle) trackTitle.textContent = track.title;
    if (trackArtist) trackArtist.textContent = track.artist;
    
    // Handle cover image with local fallback
    if (trackCover) {
        // Reset previous state
        trackCover.style.display = 'block';
        const existingPlaceholder = trackCover.parentElement.querySelector('.cover-placeholder');
        if (existingPlaceholder) {
            existingPlaceholder.style.display = 'none';
        }
        
        trackCover.src = track.cover;
        trackCover.onerror = function() {
            // Hide the broken image
            this.style.display = 'none';
            
            // Show or create CSS-based placeholder
            let placeholder = this.parentElement.querySelector('.cover-placeholder');
            if (!placeholder) {
                placeholder = document.createElement('div');
                placeholder.className = 'cover-placeholder';
                this.parentElement.appendChild(placeholder);
            }
            
            const colors = ['#4ecdc4', '#ff6b6b', '#45b7d1', '#96ceb4'];
            const initials = track.title.split(' ').map(word => word[0]).join('').substring(0, 2);
            
            placeholder.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 80px;
                height: 80px;
                border-radius: 10px;
                background: linear-gradient(45deg, ${colors[index % colors.length]}, ${colors[(index + 1) % colors.length]});
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: 1.2rem;
                z-index: 2;
            `;
            placeholder.textContent = initials;
            placeholder.style.display = 'flex';
        };
        
        trackCover.onload = function() {
            // Show real image and hide placeholder
            this.style.display = 'block';
            const placeholder = this.parentElement.querySelector('.cover-placeholder');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        };
    }
    
    // Update active track in playlist
    updateActiveTrack(index);
}

// Load audio only when needed (when user tries to play)
function loadTrack(index) {
    const track = playlist[index];
    
    if (audio) {
        // Don't load audio URL immediately, wait for play attempt
        audio.removeAttribute('src');
        audio.load(); // Reset audio element
    }
    
    updateTrackDisplay(index);
}

// Check if audio file exists before playing
async function checkAudioExists(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        return false;
    }
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
        
        if (playButton) {
            playButton.addEventListener('click', (e) => {
                e.stopPropagation();
                currentTrackIndex = index;
                loadTrack(index);
                playTrack();
            });
        }
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
    initDOMElements();
    
    const track = playlist[currentTrackIndex];
    
    // First, try to load the actual audio file
    if (!audio.src || audio.src === window.location.href || audio.src === SILENT_AUDIO) {
        // Check if the audio file exists
        checkAudioExists(track.src).then(exists => {
            if (exists) {
                // File exists, load and play it
                audio.src = track.src;
                attemptPlay();
            } else {
                // File doesn't exist, use silent placeholder
                console.log('Audio file not found:', track.src);
                audio.src = SILENT_AUDIO;
                if (trackTitle) {
                    trackTitle.textContent = `${track.title} (Add ${track.src.split('/').pop()} to play)`;
                }
                attemptPlay();
            }
        }).catch(() => {
            // Network error or other issue, use placeholder
            audio.src = SILENT_AUDIO;
            if (trackTitle) {
                trackTitle.textContent = `${track.title} (Demo mode - Add MP3 files)`;
            }
            attemptPlay();
        });
    } else {
        attemptPlay();
    }
}

function attemptPlay() {
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            isPlaying = true;
            if (playBtn) playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            
            // Add playing animation to current track
            const activeTrackItem = document.querySelector('.track-item.active');
            if (activeTrackItem) {
                const playButton = activeTrackItem.querySelector('.play-track-btn');
                if (playButton) playButton.innerHTML = '<i class="fas fa-pause"></i>';
            }
        }).catch(error => {
            console.log('Play failed:', error);
            if (trackTitle) {
                trackTitle.textContent = `${playlist[currentTrackIndex].title} (Audio unavailable)`;
            }
        });
    }
}

function pauseTrack() {
    if (audio) {
        audio.pause();
        isPlaying = false;
        if (playBtn) playBtn.innerHTML = '<i class="fas fa-play"></i>';
        
        // Remove playing animation from current track
        const activeTrackItem = document.querySelector('.track-item.active');
        if (activeTrackItem) {
            const playButton = activeTrackItem.querySelector('.play-track-btn');
            if (playButton) playButton.innerHTML = '<i class="fas fa-play"></i>';
        }
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
    if (!audio) return;
    
    const { duration, currentTime } = audio;
    
    if (duration && progress && currentTimeEl && durationEl) {
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = progressPercent + '%';
        
        // Update time displays
        currentTimeEl.textContent = formatTime(currentTime);
        durationEl.textContent = formatTime(duration);
    }
}

// Set progress
function setProgress(e) {
    if (!audio || !progressBar) return;
    
    const width = progressBar.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    
    if (duration) {
        audio.currentTime = (clickX / width) * duration;
    }
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
    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (prevBtn) prevBtn.addEventListener('click', prevTrack);
    if (nextBtn) nextBtn.addEventListener('click', nextTrack);
    
    // Audio events (only set up when audio is available)
    if (audio) {
        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', nextTrack);
        audio.addEventListener('loadedmetadata', () => {
            if (durationEl && audio.duration) {
                durationEl.textContent = formatTime(audio.duration);
            }
        });
        
        // Clean error handling
        audio.addEventListener('error', (e) => {
            console.log('Audio error occurred');
            // Only show error if not already using placeholder
            if (audio.src !== SILENT_AUDIO) {
                if (trackTitle) {
                    trackTitle.textContent = `${playlist[currentTrackIndex].title} (File not found)`;
                }
            }
        });
        
        audio.addEventListener('loadstart', () => {
            // Reset title when loading real audio starts
            if (trackTitle && audio.src !== SILENT_AUDIO) {
                trackTitle.textContent = playlist[currentTrackIndex].title;
            }
        });
    }
    
    // Progress bar
    if (progressBar) {
        progressBar.addEventListener('click', setProgress);
    }
    
    // Mobile navigation
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        });
    });
    
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
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
        } else if (e.code === 'ArrowRight') {
            nextTrack();
        } else if (e.code === 'ArrowLeft') {
            prevTrack();
        }
    });
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

// Optimized loading animation
function showLoadingAnimation() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-in-out';
    
    // Quick fade in
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    showLoadingAnimation();
    initPlayer();
});

// Export functions for potential external use
window.BrstWorks = {
    playTrack,
    pauseTrack,
    nextTrack,
    prevTrack,
    scrollToSection
};