
let blockBackG = document.querySelector('.box');

blockBackG.addEventListener('click', function (e){
    let element = e.target;
    let rod = element.closest('.value-q');
    // let count = 0
    // if(element.closest('.block-question')){
    //     count = element.closest('.block-question').getElementsByClassName('value-q-bg').length;
    // }
    if (element.closest('.value-q') && (element.classList.contains('click-on-me'))){
        rod.classList.toggle('value-q-bg');
    }
    // else if(element.closest('.value-q') && (element.classList.contains('click-on-me')) && count===1){
    //
    // }


})
