 var turkeybutton = document.getElementById("playbutton")
turkeybutton.addEventListener("click",()=>{
    console.log('thisworks')
    setInterval(() => {
       new Audio('turkeycaught.mp3').play()
    
    }, 2000);
})

document.addEventListener('keydown',(key)=>{
    if(key.keyCode ===37){
        new Audio('turkeysound.mp3').play()
    }
})

