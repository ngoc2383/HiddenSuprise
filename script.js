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

    // If there is already an audio playing, pause it
    if (currentAudio && currentAudio !== newAudioElement) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio to the start
    }

    // If the audio element exists, play it
    if (newAudioElement) {
        newAudioElement.play();
        currentAudio = newAudioElement;
    } else {
        console.error('Audio element not found for', animal);
    }

    // Handle special case for chicken (show GIFs)
    if (animal === 'Chicken') {
        const chickenGifs = document.querySelectorAll('.chicken-gif');
        chickenGifs.forEach(gif => {
            gif.style.opacity = 1; // Make the GIF visible
            gif.style.zIndex = 2; // Bring it to the foreground
        });

        // Hide GIFs when the sound ends
        newAudioElement.addEventListener('ended', () => {
            chickenGifs.forEach(gif => {
                gif.style.opacity = 0;
                gif.style.zIndex = 0;
            });
    }
}
