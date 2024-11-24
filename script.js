let currentAudio = null;

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
        });
    }
}

// Function to move chicken GIFs randomly
function moveChickenGifsRandomly(gif) {
    // Get the size of the GIF element
    const gifWidth = gif.offsetWidth;
    const gifHeight = gif.offsetHeight;

    // Randomly decide the position within the visible screen area
    const randomX = Math.floor(Math.random() * (window.innerWidth - gifWidth));  // Random X position within the window width
    const randomY = Math.floor(Math.random() * (window.innerHeight - gifHeight)); // Random Y position within the window height

    // Move the GIF to a random position, within the visible screen
    gif.style.position = 'absolute'; // Ensure it's positioned absolutely
    gif.style.left = `${randomX}px`;
    gif.style.top = `${randomY}px`;
}

// Function to apply zoom effect when the chicken GIF is clicked
function applyZoomEffect() {
    // Apply zoom effect when the chicken image is clicked
    document.body.style.transition = 'transform 0.3s ease'; // Smooth transition for zoom
    document.body.style.transform = 'scale(1.5)'; // Zoom in effect

    // Reset zoom after a short time (to return to normal size)
    setTimeout(() => {
        document.body.style.transform = 'scale(1)';
    }, 300); // The zoom effect will reset after 300ms (adjust this duration as needed)
}

// Add event listener to chicken GIFs to apply zoom effect when clicked
document.querySelectorAll('.chicken-gif').forEach(gif => {
    gif.addEventListener('click', applyZoomEffect);
});

// Move GIFs every 2 seconds (or adjust timing as needed)
setInterval(() => {
    const chickenGifs = document.querySelectorAll('.chicken-gif');
    chickenGifs.forEach(gif => {
        moveChickenGifsRandomly(gif);
    });
}, 2000); // Adjust the interval for movement speed



