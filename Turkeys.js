const turkeyContainer = document.getElementById("turkeyContainer");
const player = document.getElementById("player");
player.style.left = "0px"

document.addEventListener('keydown',(e) => {
    if (e.key === 'a' || e.key === "ArrowLeft") {
        player.style.left = `${makePositionNumber(player, "left") - 10}px`;
    } else if(e.key === 'd' || e.key === "ArrowRight") {
        player.style.left = `${makePositionNumber(player, "left") + 10}px`;
    }
});

setInterval(()=>{
    moveTurkeys();
    makeTurkey();
}, 500);

function makePositionNumber(object, position) { 
    let property = object.style[position].split("");
    property.pop();
    property.pop();
    property = property.join("");
    return parseInt(property);
}

function makeTurkey() {
    // Check if there are more than or equal to 3 turkeys, if so do nothing
    const turkeys = document.querySelectorAll(".turkey");
    if(turkeys.length >= 3) {
        return
    }

    console.log('made the turkey')
    const turkey = document.createElement("div")
    turkey.classList.add('turkey')

    // Randomize the x position
    // Game width - turkey width for the max left position
    const xPosition = Math.floor(Math.random() * (1500 - 10)) ;
    turkey.style.left = `${xPosition}px`

    // Add the tueky to a pre-exisiting html element
    turkeyContainer.appendChild(turkey)
}

function moveTurkeys() {
    const turkeys = document.querySelectorAll(".turkey");
    for (let i = 0; i < turkeys.length; i++) {
        const turkey = turkeys[i];
        if (turkey.style.top == false) {
            // initialize the turkey position
            turkey.style.top = "10px";
        } else if(makePositionNumber(turkey, "top") >= (700 - 30)) {
            // hits the bottom and resets
            const xPosition = Math.floor(Math.random() * (1500 - 10)) ;
            turkey.style.top = "0px"
            turkey.style.left = `${xPosition}px`
        } else {
            // turkey falls
            turkey.style.top = `${makePositionNumber(turkey, "top") + 10}px`
        }
    }
}