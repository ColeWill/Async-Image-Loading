(() => {
    'use strict';
    // Page is loaded
    console.log('script.js');
    const objects = document.getElementsByClassName('asyncImage');
    
    // 'objects' are each img, take all of them and excute this function
    // for each 'item' which is each img
    Array.from(objects).map((item) => {
        
      //  using image constructor, make a new img using JS
      const img = new Image();
     // take the src of this new Image and give it the src of on of our images
      img.src = item.dataset.src;
      
     // when the img loads
      img.onload = () => {
        item.classList.remove('asyncImage');
        // if the Item's nodeName = IMG ? set the new src : ELSE set background
        if (item.nodeName === 'IMG') {
            setTimeout(function(){
                item.src = item.dataset.src;
                item.classList.add('FadeIn');
            },3000);
            
        } else {
            null;
            // item.style.backgroundImage = `url(${item.dataset.src})`;
        }    
      };
    });
  })();