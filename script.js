// Function to play sound based on the image clicked
function playSound(id) {
    // Map of animal ids to their respective sound file paths
    const soundMap = {
        'cat': '/.Cat Sound.mp3',
        'dog': '/.Dog Sound.mp3',
        'chicken': '/.Chicken Sound.mp3',
        'wolf': '/.Wolf Sound.mp3',
        'lion': '/.Lion Sound.mp3',
        'bird': '/.Bird Sound.mp3'
    };

    // Check if the id exists in the map
    if (soundMap[id]) {
        var audio = new Audio(soundMap[id]);
        audio.play();
    } else {
        console.error('Audio element not found!');
    }
}
