const turkeyContainer = document.getElementById("turkeyContainer");
const player = document.getElementById("turkeyContainer");

setTimeout(()=>{
    const turkey = createTurkey()
    turkeyContainer.appendChild(turkey)
    ;(2000/60)
//Five seconds untill the turkey reaches the bottom of the gameboard
}) 

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
        yPosition+=10
        turkey.style.transform =`translateY(${yPosition+"px"})`
        console.log(yPosition)
    },300)
    
    return turkey
}
 