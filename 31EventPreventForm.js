// const moon=document.querySelector('.my');

// moon.addEventListener('click', function(event){
//     console.log('checked...'); 

//     const changepage=confirm(
//         'This website might be slow'
//     );
//     console.log(changepage);
//     event.preventDefault();
// });



const moon=document.querySelector('.my');

moon.addEventListener('click', function(event){
    // console.log('checked...'); 
    event.preventDefault();

    const changepage=confirm(
        'This website might be slow'
    );
     if(changepage){ 
        
        window.location=event.currentTarget.href;
     }

    console.log(changepage);
});


//.....................................................

// const signForm=document.querySelector('[name="signup"]');

// signForm.addEventListener('submit', function(event){
//     event.preventDefault();
//     console.log(event .currentTarget .name);
//     console.log(event .currentTarget .email .value);
//    console.log(event.currentTarget .tick .checked)
// });

//.................................................

const signForm=document.querySelector('[name="signup"]');

signForm.addEventListener('submit', function(event){
    const name=event.currentTarget.name.value;
    if(name.includes('moon')){
        alert('next time');
        event.preventDefault();
    }
    
    
}); 


function logevent(event){
    console.log(event .type);
}

signForm .name.addEventListener('keyup', logevent)


//  keyup     keydown      focus       blur