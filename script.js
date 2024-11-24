// Function to play sound based on the image clicked
let currentAudio = null;
function playSound(animal) {
    // Define the corresponding audio element for each animal
    const audioMap = {
        'Cat': 'catsound',
        'Dog': 'dogsound',
        'Wolf': 'wolfsound',
        'Bird': 'birdsound',
        'Chicken': 'chickensound',
        'Lion': 'lionsound'
    };

    // Get the audio element by id based on the provided animal
    const newAudioElement = document.getElementById(audioMap[animal]);

    // If there is already an audio playing, stop it
    if (currentAudio) {
        // Special handling for chicken sound (hide GIFs)
        if (currentAudio.id === 'chickensound') {
            const chickenGifs = document.querySelectorAll('.chicken-gif');
            chickenGifs.forEach(gif => {
                gif.style.opacity = 0; // Hide GIF
                gif.style.zIndex = 0; // Reset z-index
            });

            const overlay = document.querySelector('.black-overlay');
            if (overlay) {
                overlay.style.opacity = 0; // Hide overlay
                overlay.style.zIndex = 0; // Reset z-index
            }
        }

        // Stop the current audio
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio to the start
    }

    // If the new audio element exists, play it
    if (newAudioElement) {
        newAudioElement.play();
        currentAudio = newAudioElement;
    } else {
        console.error('Audio element not found for', animal);
        currentAudio = null; // Clear current audio reference if no valid element
        return;
    }

    // Handle special case for chicken (show GIFs while sound is playing)
    if (animal === 'Chicken') {
        const chickenGifs = document.querySelectorAll('.chicken-gif');
        chickenGifs.forEach(gif => {
            gif.style.opacity = 1; // Make the GIF visible
            gif.style.zIndex = 2; // Bring it to the foreground
        });

        const overlay = document.querySelector('.black-overlay');
        if (overlay) {
            overlay.style.opacity = 0.5; // Show overlay
            overlay.style.zIndex = 1; // Place behind GIF
        }

        // Hide GIFs when the sound ends
        newAudioElement.addEventListener('ended', () => {
            chickenGifs.forEach(gif => {
                gif.style.opacity = 0;
                gif.style.zIndex = 0;
            });

            overlay
        });
    }
}
