let currentAudio = null;
let zoomInterval = null;  // Variable to store zoom interval

function playSound(animal) {
    const audioMap = {
        'Cat': 'catsound',
        'Dog': 'dogsound',
        'Wolf': 'wolfsound',
        'Bird': 'birdsound',
        'Chicken': 'chickensound',
        'Lion': 'lionsound'
    };

    const newAudioElement = document.getElementById(audioMap[animal]);

    // Log to see if the newAudioElement exists
    console.log('Selected audio element:', newAudioElement);

    if (currentAudio) {
        if (currentAudio.id === 'chickensound') {
            // Special handling for chicken sound (hide GIFs and overlay)
            const chickenGifs = document.querySelectorAll('.chicken-gif');
            chickenGifs.forEach(gif => {
                gif.style.opacity = 0; // Hide GIF
                gif.style.zIndex = 0; // Reset z-index
            });

            const overlay = document.querySelector('.black-overlay');
            if (overlay) {
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';  // Make overlay fully transparent
                overlay.style.visibility = 'hidden';  // Hide overlay
                overlay.style.zIndex = 4; // Reset z-index
            }
        }

        // Stop the current audio
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio to the start
    }

    // If the new audio element exists, play it
    if (newAudioElement) {
        console.log('Playing new sound for', animal);
        newAudioElement.play();
        currentAudio = newAudioElement;
    } else {
        console.error('Audio element not found for', animal);
        currentAudio = null; // Clear current audio reference if no valid element
        return;
    }

    // Handle special case for chicken (show GIFs and overlay while sound is playing)
    if (animal === 'Chicken') {
        const overlay = document.querySelector('.black-overlay');
        if (overlay) {
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';  // Semi-transparent black
            overlay.style.visibility = 'visible';  // Make overlay visible
            overlay.style.zIndex = 4; // Place behind GIF
        }

        // Show GIFs and overlay when the sound starts playing
        const chickenGifs = document.querySelectorAll('.chicken-gif');
        chickenGifs.forEach(gif => {
            console.log('Chicken GIF');
            gif.style.opacity = 1; // Make the GIF visible
            gif.style.zIndex = 5; // Bring it to the foreground
            moveChickenGifsRandomly(gif); // Start moving the GIFs
        });

        // Start the zoom effect repeatedly while the chicken sound plays
        applyZoomEffect();
        
        // Hide GIFs and overlay when the sound ends
        newAudioElement.addEventListener('ended', () => {
            console.log('Audio ended for Chicken, hiding overlay');
            chickenGifs.forEach(gif => {
                gif.style.opacity = 0;
                gif.style.zIndex = 0;
            });

            if (overlay) {
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';  // Make overlay fully transparent
                overlay.style.visibility = 'hidden';  // Hide overlay
                overlay.style.zIndex = 4; // Reset z-index
            }

            // Stop zooming effect once the sound ends
            resetZoom();
        });
    } else if (animal === 'Cat') {
        resetZoom()
        
        const overlay = document.querySelector('.black-overlay');
        if (overlay) {
            overlay.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';  // Semi-transparent black
            overlay.style.visibility = 'visible';  // Make overlay visible
            overlay.style.zIndex = 4;
        }

        newAudioElement.addEventListener('ended', () => {
            if (overlay) {
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';  // Make overlay fully transparent
                overlay.style.visibility = 'hidden';  // Hide overlay
                overlay.style.zIndex = 4;
            }
        });
    }
}

let lastPosition = { x: null, y: null };

function moveChickenGifsRandomly(gif) {
    // Get the size of the GIF element
    const gifWidth = gif.offsetWidth;
    const gifHeight = gif.offsetHeight;

    // Randomly decide the position within the visible screen area
    let randomX, randomY;

    // Ensure the new position is not the same as the last position
    do {
        randomX = Math.floor(Math.random() * (window.innerWidth - gifWidth));  // Random X position within the window width
        randomY = Math.floor(Math.random() * (window.innerHeight - gifHeight)); // Random Y position within the window height
    } while (randomX === lastPosition.x && randomY === lastPosition.y);  // If same as previous, regenerate

    // Move the GIF to a random position, within the visible screen
    gif.style.position = 'absolute'; // Ensure it's positioned absolutely
    gif.style.left = `${randomX}px`;
    gif.style.top = `${randomY}px`;

    // Update last position to current position
    lastPosition = { x: randomX, y: randomY };
}

// Function to apply zoom effect when the chicken GIF is clicked
function applyZoomEffect() {
    // Apply zoom effect when the chicken image is clicked
    document.body.style.transition = 'transform 0.2s ease'; // Smooth transition for zoom
    document.body.style.transform = 'scale(1.2)'; // Zoom in effect

    // Create an interval to repeatedly apply the zoom effect while the chicken sound is playing
    if (!zoomInterval) {
        zoomInterval = setInterval(() => {
            document.body.style.transition = 'transform 0.1s ease';  // Reset transition
            document.body.style.transform = 'scale(1.1)'; // Apply zoom in

            // After a brief interval, reset zoom
            setTimeout(() => {
                document.body.style.transform = 'scale(1)'; // Reset zoom back to normal
            }, 150); // This controls the speed of the zoom effect
        }, 300); // Interval at which zoom happens (adjust this value for repeat frequency)
    }
}

// Function to reset zoom effect (for switching between animals)
function resetZoom() {
    if (zoomInterval) {
        clearInterval(zoomInterval);  // Clear the zoom interval when switching to other animals
        zoomInterval = null;  // Reset the zoom interval
    }
    document.body.style.transform = 'scale(1)';  // Reset zoom back to normal
    document.body.style.transition = 'transform 0.1s ease'; // Ensure smooth transition
}

// Move GIFs every 0.3 seconds (or adjust timing as needed)
setInterval(() => {
    const chickenGifs = document.querySelectorAll('.chicken-gif');
    chickenGifs.forEach(gif => {
        moveChickenGifsRandomly(gif);
    });
}, 300); // Adjust the interval for movement speed
