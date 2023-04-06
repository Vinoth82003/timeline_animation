(function(){
    'use strict';
    let item = document.querySelectorAll('.timeline_ul .timeline_li');
    function isElementInViewport(el){
        var rect = el.getBoundingClientRect();
        return(
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= 
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
        
    }

    function callBackFunction(){
        for(let i = 0; i < item.length; i++){
            if (isElementInViewport(item[i])) {
                item[i].classList.add('in_view');
            }
        }
    }

    window.addEventListener('load',callBackFunction);
    window.addEventListener('resize',callBackFunction);
    window.addEventListener('scroll',callBackFunction);

})();
