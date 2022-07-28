const learnButton=document.querySelectorAll('.board button');


const outermodal=document.querySelector('.outer-modal');
const innermodal=document.querySelector('.inner-modal');
 

function handBordButtonClick(event){
    // console.log('yes it click');
    const button=event.currentTarget;
    const board = button.closest('.board');
    // console.log(board);
    //grab the image src
    const imgsrc=board.querySelector('img').src;
    // console.log(imgsrc)
    const desc =board.dataset.description;
    // console.log(desc);


    const name=board.querySelector('h2').textContent;
     
    // populate the modal with the new info
      innermodal.innerHTML=`
      <img src="${imgsrc.replace('222','600')}" alt='${name}'/>
      <p>${desc}</p>
      `;
      // show the modal
      outermodal.classList.add('open'); 
      
}

learnButton.forEach(button=>
    button.addEventListener('click',
    handBordButtonClick)
    
);

function closemodal(){
    outermodal.classList.remove('open');
}

outermodal.addEventListener('click', function(event){
    const isoutside=!event.target.closest('.inner-modal');
    if(isoutside){
        closemodal();
    }
});
window.addEventListener('keydown', event=>{
    console.log(event);
    if(event.key ==="Escape"){
        closemodal()
    }
})

 