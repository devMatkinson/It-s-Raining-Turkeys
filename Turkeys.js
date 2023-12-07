const turkeyContainer = document.getElementById("turkeyContainer");
const player = document.getElementById("turkeyContainer");
let speed = 10
const maxSpeed = 50
setTimeout(()=>{
    const turkey = createTurkey()
    turkeyContainer.appendChild(turkey)
    ;(100/60)
//Five seconds untill the turkey reaches the bottom of the gameboard
}) 
//Code for the turkey
function createTurkey(){
    const turkey = document.createElement("div")
    turkey.style.width="30px"
    turkey.style.height="30px"
    turkey.style.backgroundColor="red"
    turkey.style.posistion="absolute"
    turkey.style.top="20px"
    turkey.style.left=Math.random() *100 + "px"
    var yPosition=20
    setInterval(()=>{
        if(yPosition>=670){
            if(speed<=maxSpeed){
                speed+=2
            }
            
            yPosition=0
            turkey.style.transform =`translateY(${yPosition+"px"})`
        }
        yPosition+=speed
        turkey.style.transform =`translateY(${yPosition+"px"})`
        console.log(yPosition)
    },100)
    
    return turkey
}
 