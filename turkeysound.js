// setInterval(() => {
//     new Audio('It-s-Raining-Turkeys/Turkey Gobble-SoundBible.com-123256561.mp3').play()

// }, 2000);
document.addEventListener('keydown',(key)=>{
    if(key.keyCode ===37){
        new Audio('turkeysound.mp3').play()
    }
})

