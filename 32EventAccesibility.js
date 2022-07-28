// const moon=document.querySelector('.image');

// moon.addEventListener('click', function(){
//     console.log(' Clicked the photo');
// });







const klo=document.querySelector('.imsge');
 
function picsClick(event){
    if(event.type==='click'|| event.key==='Enter'){
        console.log('click again pics..')
    }
}

klo.addEventListener('click', picsClick); 