const cat = document.getElementById('catsound');
const dog = document.getElementById('dogsound');
const wolf = document.getElementById('wolfsound');
const bird = document.getElementById('birdsound');
const chicken = document.getElementById('chickensound');
const lion = document.getElementById('lionsound');

function playSound(id) {
    if (id == 'cat') {
        cat.play();
    } elif (id == 'dog') {
        dog.play();
    } elif (id == 'chicken'){
        chicken.play();
    } elif ( id == 'wolf'){
        wolf.play();
    } elif (id == 'lion'){
        lion.play();
    } elif ( id == 'bird'){
        bird.play();
    } else {
        console.error('Audio element not found!')
    }
    
}