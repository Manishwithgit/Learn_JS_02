const turns=document.querySelector('.terms-conditions');

const watch=document.querySelector('.watch');

const button=document.querySelector('.accept');





// turns.addEventListener('scroll',function(e){
//     console.log(e.currentTarget.scrollTop);
//     console.log(e.currentTarget.scrollHeight);
// })



function obcallback(payload){
    // console.log(payload[0].intersectionRatio);
    if(payload[0].intersectionRatio===1){
        button.disabled=false;
        // console.log('Remove disable'); 
        ob.unobserve(turns.lastElementChild);    
    } 
 
    else{
        button.disabled=true;
    }
}

const ob=new IntersectionObserver(obcallback,{
    root:turns,
    threshold:1,
});
// ob.observe(watch);




ob.observe(turns.lastElementChild) ;





 
