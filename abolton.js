 var btn=document.querySelector(".play")
 var video=document.querySelector(".video")



 btn.addEventListener("click",function(){
    if(video.paused){
        video.play();
        btn.style.display="none"
    }
    else{
        video.pause();
        btn.style.display="block"


    }
 })
 video.addEventListener("click",function(){
    if(video.played){
        video.pause();
        btn.style.display="block"
    }
    else{
        btn.style.display="none"

    }
 })