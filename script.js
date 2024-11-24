const cat = document.getElementById('catsound');
const dog = document.getElementById('dogsound');
const wolf = document.getElementById('wolfsound');
const bird = document.getElementById('birdsound');
const chicken = document.getElementById('chickensound');
const lion = document.getElementById('lionsound');

function playSound(id) {
    if (id == 'cat' || id == 'dog' || id == 'chicken' || id =='wolf' || id == 'bird' || id == 'lion') {
        id.play();
    }else{
        console.error('Audio element not found!');
    }
}