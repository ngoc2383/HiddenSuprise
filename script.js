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
}


