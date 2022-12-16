
let blockBackG = document.querySelector('.box');

blockBackG.addEventListener('click', function (e){
    let element = e.target
    if (element.classList.contains('value-q')){
        element.classList.toggle('value-q-bg');
    }
})