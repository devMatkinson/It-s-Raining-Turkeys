const player = document.getElementById("player");
player.style.left = "0px"

document.addEventListener('keydown',(e) => {
    if (e.key === 'a' || e.key === "ArrowLeft") {
        player.style.left = `${makePositionNumber(player, "left") - 10}px`;
    } else if(e.key === 'd' || e.key === "ArrowRight") {
        player.style.left = `${makePositionNumber(player, "left") + 10}px`;
    }
});
function makePositionNumber(object, position) { 
    let property = object.style[position].split("");
    property.pop();
    property.pop();
    property = property.join("");
    return parseInt(property);}