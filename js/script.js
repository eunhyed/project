$(document).ready(function(){
    setInterval(slide, 2500);
    let i = 3;
    function slide(){
        if(i==0){
            $(".imgslide a").stop().fadeIn(2500);
            i==3;
        }
        else{
            $(".imgslide a").eq(i).stop().fadeOut(2000);
            i--;
        }
    }
});