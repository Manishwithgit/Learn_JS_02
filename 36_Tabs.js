 const tabs=document.querySelector('.tabs');
 const tabbutton=tabs.querySelectorAll('[role="tab"]');
 const tabpanels=tabs.querySelectorAll('[role="tabpanel"]');


 function handleTabClick(event){
    // hide all tab panels

    // console.log(tabpanels)
    
    // tabpanels.forEach(function(panel){
        // console.log(panel)
        // panel.hidden=true;
    // });

    tabpanels.forEach(panel => (panel.hidden=true));

    // mark all tabs as unselected... 
         tabbutton.forEach(tab=>{
            // tab.ariaSelected=false; 
            tab.setAttribute('aria-selected', false);
         });

         // mark the clicked tab as selected...
         event.currentTarget.setAttribute('aria-selected',true);

         //find the associated tabpanel and show it
         const{id} = event.currentTarget;
         
        // Method 1
         const tabpane1=tabs.querySelector(`
         [aria-labelledby="${id}"]`);
         console.log(tabpane1)
         tabpane1.hidden=false;

        
 }




 tabbutton.forEach(button=> button.addEventListener('click',handleTabClick))