// Function to play sound based on the image clicked
function playSound(id) {
    // Select the audio element by using the id with "sound" suffix
    /*const audioElement = document.getElementById(id + 'Sound');
    print(audioElement)
    
    // Check if the audio element exists, and play it if it does
    if (audioElement) {
        audioElement.play();
        var audio = new Audio('Bird Sound.mp3');
        audio.play();
        console.log('Playing sound for ', id);
    } else {
        console.error('Audio element not found for', id);
    }
        */
    if (id == 'cat') {
        var audio = new Audio('Bird Sound.mp3');
        audio.play();
    }else if (id == 'dog') {
        var audio = new Audio('Bird Sound.mp3');
        audio.play();
    }else if (id == 'chicken'){
        var audio = new Audio('Bird Sound.mp3');
        audio.play();
    }else if ( id == 'wolf'){
        var audio = new Audio('Bird Sound.mp3');
        audio.play();
    }else if (id == 'lion'){
        var audio = new Audio('Bird Sound.mp3');
        audio.play();
    }else if ( id == 'bird'){
        var audio = new Audio('Bird Sound.mp3');
        audio.play();
    }else {
        console.error('Audio element not found!');
    }
        
}
