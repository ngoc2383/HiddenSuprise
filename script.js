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
                overlay.style.opacity = 0; // Hide overlay
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
            overlay.style.opacity = 1; // Show overlay with semi-transparency
            overlay.style.zIndex = 4; // Place behind GIF
        }

        // Show GIFs and overlay when the sound starts playing
        const chickenGifs = document.querySelectorAll('.chicken-gif');
        chickenGifs.forEach(gif => {
            gif.style.opacity = 1; // Make the GIF visible
            gif.style.zIndex = 5; // Bring it to the foreground
        });

        // Hide GIFs and overlay when the sound ends
        newAudioElement.addEventListener('ended', () => {
            console.log('Audio ended for Chicken, hiding overlay');
            chickenGifs.forEach(gif => {
                gif.style.opacity = 0;
                gif.style.zIndex = 0;
            });

            if (overlay) {
                overlay.style.opacity = 0;
                overlay.style.zIndex = 4;
            }
        });
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "example") {
        // Do some async work
        fetchSomeData().then(data => {
            sendResponse(data); // Send the response back
        }).catch(err => {
            console.error(err);
            sendResponse({ error: "Failed to fetch data" }); // Respond with an error
        });

        // Return true to indicate that the response is async
        return true;
    }
});


