// Function to play sound based on the image clicked
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
    const audioElement = document.getElementById(audioMap[animal]);

    // If the audio element exists, play it
    if (audioElement) {
        audioElement.play();
    } else {
        console.error('Audio element not found for', animal);
    }
}

