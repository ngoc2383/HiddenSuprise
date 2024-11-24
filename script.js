// Function to play sound based on the image clicked
function playSound(id) {
    // Select the audio element by using the id with "sound" suffix
    const audioElement = document.getElementById(id + 'sound');
    
    // Check if the audio element exists, and play it if it does
    if (audioElement) {
        audioElement.play();
    } else {
        console.error('Audio element not found for', id);
    }
}
