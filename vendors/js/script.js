$(window).scroll(function(){
  
    var wScroll = $(this).scrollTop();
    
    var wWidth = $(this).innerWidth();
    
    if (wWidth <= 767) {
        $('.sax').css({
            'transform' : 'scale(' + (1 - (wScroll/3000)) +')'
        }); 
        
        
    } else {
        $('.sax').css({
            'transform' : 'scale(' + (1 + (wScroll/4000)) +')'
        });  
    }
    
    
    $('.vocal').css({
        'transform' : 'translate(0px, '+ wScroll /10 +'%)'
    });
    
    $('.violino').css({
        'transform' : 'translate(0px, '+ wScroll /8 +'%)'
        
    });
    
    
    
    
    var teste = (  ( 1 + (wScroll/1000)));

    console.log(teste); 
});
