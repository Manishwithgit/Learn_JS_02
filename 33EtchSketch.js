// ...............

// select the element on the page canvas, shake button

const canva=document.querySelector('#etchsketch');

const cat=canva.getContext('2d');

const shakebtn=document.querySelector('.sake');

const DOT_AMOUNT = 12;

// setup our canvas for drawing.....

const {width, height} =canva;

let x = Math.floor(Math.random()*width);
let y = Math.floor(Math.random()*height);



// create random x and y starting points on the canvas

cat.lineJoin ='round';
cat.lineCap='round'; 
cat.lineWidth=DOT_AMOUNT;

let dot_hsl =0;
cat.strokeStyle=`hsl(${dot_hsl}, 100%, 50%)`;
// cat.strokeStyle=`hsl(${Math.random() * 360}, 100%, 50%)`;


cat.beginPath(); //start the drawing part.....
cat.moveTo(x,y);   
cat.lineTo(x,y);
cat.stroke();



// write a draw funtion.....

 function draw({key}){
      // increment the dot_hsl value
        dot_hsl+=10;
        console.log(dot_hsl)
        // cat.strokeStyle=`hsl(${dot_hsl}, 100% ,55%)`;
        cat.strokeStyle=`hsl(${Math.random() * 360}, 100%, 50%)`; 
    
      

    console.log(key);
    // start the path
    cat.beginPath();
    cat.moveTo(x,y);
     
    // move our x and y values depending on what the user did..
         switch(key){
            case'ArrowUp':
            y -= DOT_AMOUNT;
            break;
            case'ArrowRight':
            x += DOT_AMOUNT;
            break;
            case'ArrowDown':
            y += DOT_AMOUNT;
            break;
            case'ArrowLeft':
            x -= DOT_AMOUNT;
            break;
            default:break;
         }
    cat.lineTo(x,y);
    cat.stroke(); 
 }



// write a handler for the keys..MOVE TO UP DOWN LEFT RIGHT...

// function handkey(){
//     console.log('handling key...');
// }


// function handkey(event){
//     // event.preventDefault();
//     console.log(event.key);
//     console.log('handling key...');
// }

function handkey(e){
    if(e.key.includes('Arrow')){
        e.preventDefault();
        draw({key:e.key});
        // console.log(e.key);
        // console.log('handling key ...')
    }
}

// listen for arrow keys....
window.addEventListener('keydown', handkey);



// clear shake funtion....

function clearCanvas(){
    canva.classList.add('shake'); 
    canva .addEventListener('animationend', function(){
        console.log('done the shake')
        canva.classList.remove('sh ake')
    },
    {once:true});
}
shakebtn.addEventListener('click', clearCanvas);